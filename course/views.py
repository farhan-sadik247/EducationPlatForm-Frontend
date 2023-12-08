from django.shortcuts import redirect, render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from .serializers import CourseSerializer, ContentSerializer, CatagorySerializer, BoughtSerializer
from django.http import HttpResponse, HttpRequest, JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.db.models import Q
from authentication.serializers import UserinfoSerializer
# Create your views here.

@api_view(["POST"])
def addCourse(request):
    if request.method == "POST":
        title = request.data["title"]
        description = request.data["description"]
        techs = request.data["techs"]
        teacher = request.user
        price = request.data["subscriptionAmount"]
        cata_id = request.data["cata"]
        catagory = Catagory.objects.get(id = int(cata_id))

        
        courseinfo = Course.objects.create(title = title, details= description, techs = techs, teacher = teacher, price = price, catagory = catagory)

        courseinfo.save()

    return Response("")

@api_view(["POST"])
def editCourse(request, course_id):
    if request.method == "POST":
        course = Course.objects.get(id = course_id)
        if request.data["title"] != "":
            course.title = request.data["title"]
        if request.data["description"] != "":
            course.details = request.data["description"]
        if request.data["subscriptionAmount"] != "":
            course.price = request.data["subscriptionAmount"]
        if request.data["discount"] != "":
            course.discount = request.data["discount"]
            print(request.data["discount"])

        course.save()

    return Response("")

@api_view(["POST"])
def addContent(request):
    if request.method == "POST":
        course_id = request.data["course_id"]
        course = Course.objects.get(id = int(course_id))
        title = request.data["title"]
        description = request.data["description"]
        link = request.data["link"]
            
        if request.data["type"] == "chapter":
            remarks = request.data["remark"]
            courseinfo = Content.objects.create(title = title, description= description, remarks = remarks, link = link, course=course, type = request.data["type"])
        if request.data["type"] == "assignment":
            sub_link = request.data["sub_link"]
            courseinfo = Content.objects.create(title = title, description= description, sub_link=sub_link, link = link, course=course, type = request.data["type"])

        courseinfo.save()
    return Response("")

@api_view(["POST"])
def addCatagory(request):
    if request.method == "POST":
        title = request.data["title"]
        description = request.data["description"]
        
        catagory = Catagory.objects.create(title = title, details= description)

        catagory.save()
    return Response("")

@api_view(["GET"])
def cata_name(request, cataname):
    if len(cataname) == 1:
        return Response("nai")
    cata = Catagory.objects.filter(title = cataname[1:])
    if len(cata) == 0:
        return Response("nai")
    else:
        return Response("ase")

@api_view(["GET"])
def getContent(request, course_id):
    if course_id == "undefined":
        return Response("None")
    if course_id == "$":
        course_list = []
        user = request.user
        bought_items = Bought_item.objects.filter(student = user)
        for bought_item in bought_items:
            course = bought_item.course
            course_list.append(course.id)
        courses = Course.objects.filter(id__in=course_list)
        contents = Content.objects.filter(Q(course__in = courses) & Q(type = "assignment"))
        serializer = ContentSerializer(contents, many = True)
        return Response(serializer.data)

    if request.method == "GET":
        content = Content.objects.filter(course = course_id)
        serializer = ContentSerializer(content, many = True)
        return Response(serializer.data)
    
@api_view(["GET"])
def getCata(request):
    if request.method == "GET":
        content = Catagory.objects.all()
        serializer = CatagorySerializer(content, many = True)
        return Response(serializer.data)

@api_view(["GET"])
def getCata_id(request, cata_id):
    if request.method == "GET":
        if cata_id != "undefined":
            content = Catagory.objects.get(id = cata_id)
            serializer = CatagorySerializer(content, many = False)
            return Response(serializer.data)
    return Response(" ")
@api_view(["GET"])
def allCourse(request):
    if request.method == "GET":
        course = Course.objects.all()
        serializer = CourseSerializer(course, many = True)
        return Response(serializer.data)
 
@api_view(["GET"])
def popCourse(request):
    if request.method == "GET":
        course = Course.objects.order_by('-rating')[0:4]
        serializer = CourseSerializer(course, many = True)
        return Response(serializer.data)
    
@api_view(["GET"])
def lateCourse(request):
    if request.method == "GET":
        course = Course.objects.order_by('-created_at')[0:4]
        serializer = CourseSerializer(course, many = True)
        return Response(serializer.data)

@api_view(["GET", "POST"])
def getCourse(request, course_id):
    course = Course.objects.get(id = course_id)
    if request.method == "GET":
        serializer = CourseSerializer(course, many = False)
        return Response(serializer.data)
    if request.method == "POST":
        rating = request.data["rating"]
        no_rating = course.no_rating
        if no_rating == 1:
            course.rating = rating
            course.total = rating
            course.save()
        else:
            total = float(course.total) + float(rating)
            course.total = total
            print(course.rating)
            course.rating = round(total/no_rating, 1)
            course.save()
        course.no_rating += 1
        course.save()
        user = request.user
        bought = Bought_item.objects.get(student = user, course = course)
        bought.rating = True
        bought.save()
    return Response(course.rating)




@api_view(["GET"])
def TeacherCourses(request, teacher_id):
    if request.method == "GET":
        if teacher_id == "$":
            teacher_id = request.user.id
            teacher = Userinfo.objects.get(id= teacher_id)
            course = Course.objects.filter(teacher = teacher)
            serializer = CourseSerializer(course, many = True)
            return Response(serializer.data)
        if teacher_id != "undefined":
            teacher = Userinfo.objects.get(id= teacher_id)
            course = Course.objects.filter(teacher = teacher)
            serializer = CourseSerializer(course, many = True)
            return Response(serializer.data)
    return Response([])
    
@api_view(["GET"])
def RecentCourses(request, teacher_id):
    if request.method == "GET":
        course = Course.objects.filter(teacher = teacher_id).order_by("-created_at")
        if len(course)>0:
            course = course[0]
        serializer = CourseSerializer(course, many = False)
        return Response(serializer.data)

@api_view(["POST"])
def deleteCourse(request):
    if request.method == "POST":
        course_id = request.data["index"]
        course = Course.objects.get(id = course_id)          
        course.delete()
        return Response("")
    
@api_view(["POST"])
def deleteContent(request):
    if request.method == "POST":
        content_id = request.data["index"]
        content = Content.objects.get(id = content_id)          
        content.delete()
        return Response("")

@api_view(["GET"])
def totalStd(request, course_id):
    if course_id == "undefined":
        return Response("None")
    if course_id == "$":
        teacher_id = request.user.id
        teacher = Userinfo.objects.get(id = teacher_id)
        courses = Course.objects.filter(teacher = teacher)
        total = 0
        for course in courses:
            total += len(Bought_item.objects.filter(course = course))
        res = {
            "std" : total,
            "course" : len(courses)
        }
        return Response(res)
    if request.method == "GET":
        total = Bought_item.objects.filter(course = course_id)
        return Response(len(total))
    

@api_view(["GET"])
def boughtCourses(request, student_id):
    if student_id[0] == "$":
        user = request.user
        course_id = int(student_id[1:])
        bought = Bought_item.objects.filter(student=user, course= course_id)
        if len(bought) > 0:
            return Response(bought[0].rating)
        else:
            return Response("f")
    if request.method == "GET":
        course_list = []
        teacher_list = []
        rating_list = []
        user = request.user
        bought_items = Bought_item.objects.filter(student = user)
        for bought_item in bought_items:
            course = bought_item.course
            course_list.append(course.id)
            rating_list.append(bought_item.rating)
        for i in range(len(course_list)):
            course = Course.objects.get(id = course_list[i])
            teacher = course.teacher
            course = CourseSerializer(course, many = False)
            teacher = UserinfoSerializer(teacher, many = False)
            course_list[i] = course.data
            teacher_list.append(teacher.data)
        data = {
            "teacher": teacher_list,
            "course": course_list,
            "rating": rating_list
        }
        return Response(data)
        
        
@api_view(["GET"])
def favCourses(request):
    if request.method == "GET":
        course_list = []
        teacher_list = []
        user = request.user
        bought_items = Fav_item.objects.filter(student = user)
        for bought_item in bought_items:
            course = bought_item.course
            course_list.append(course.id)
        for i in range(len(course_list)):
            course = Course.objects.get(id = course_list[i])
            teacher = course.teacher
            course = CourseSerializer(course, many = False)
            teacher = UserinfoSerializer(teacher, many = False)
            course_list[i] = course.data
            teacher_list.append(teacher.data)
        data = {
            "teacher": teacher_list,
            "course": course_list
        }
        return Response(data)
    
@api_view(["GET"])
def cartCourses(request):
    if request.method == "GET":
        course_list = []
        teacher_list = []
        user = request.user
        bought_items = Cart_item.objects.filter(student = user)
        for bought_item in bought_items:
            course = bought_item.course
            course_list.append(course.id)
        for i in range(len(course_list)):
            course = Course.objects.get(id = course_list[i])
            teacher = course.teacher
            course = CourseSerializer(course, many = False)
            teacher = UserinfoSerializer(teacher, many = False)
            course_list[i] = course.data
            teacher_list.append(teacher.data)
        data = {
            "teacher": teacher_list,
            "course": course_list
        }
        return Response(data)
            

@api_view(["POST"])
def removeFav(request):
    if request.method == "POST":
        user = request.user
        course_id = request.data["index"]
        course = Course.objects.get(id = course_id)         
        bought = Fav_item.objects.get(course = course, student= user) 
        bought.delete()
        return Response("")
    
@api_view(["POST"])
def removeBought(request):
    if request.method == "POST":
        user = request.user
        course_id = request.data["index"]
        course = Course.objects.get(id = course_id)         
        bought = Bought_item.objects.get(course = course, student= user) 
        bought.delete()
        return Response("")
    
@api_view(["POST"])
def removeCart(request):
    if request.method == "POST":
        user = request.user
        course_id = request.data["index"]
        course = Course.objects.get(id = course_id)         
        bought = Cart_item.objects.get(course = course, student= user) 
        bought.delete()
        return Response("")


@api_view(["GET"])
def check_name(request, coursename):
    if len(coursename) == 1:
        return Response("nai")
    course = Course.objects.filter(title = coursename[1:])
    if len(course) == 0:
        return Response("nai")
    else:
        return Response("ase")
    
@api_view(["POST"])
def editContent(request, content_id):

    if request.method == "POST":
        u = Content.objects.get(id=content_id)
        if request.data["title"] != "":
            u.title = request.data["title"],
        if request.data["link"] != "":
            u.link = request.data["link"],
        if request.data["description"] != "":
            u.description = request.data["description"],
        if request.data["remark"] != "":
            u.remarks = request.data["reamrk"],
        u.save()
    return Response("")

@api_view(["GET"])
def courseSearch(request, cata_id):
    if request.method == "GET":
        if cata_id[2:] == "undefined":
            return Response([])
        if len(cata_id) == 3:
            if cata_id[0:2] == "ff" or cata_id[0:2] == "tt":
                if cata_id[2] == "0":
                    course = Course.objects.all()
                else:
                    cata = Catagory.objects.get(id = cata_id[2])
                    course = Course.objects.filter(catagory= cata)
            elif cata_id[:2] == "tf":
                if cata_id[2] == "0":
                    print(1)
                    course = Course.objects.filter(price=0)
                else:
                    print(2)
                    cata = Catagory.objects.get(id = cata_id[2])
                    course = Course.objects.filter(Q(catagory= cata) & Q(price=0))
            else:
                if cata_id[2] == "0":
                    print(3)
                    course = Course.objects.filter(~Q(price=0))
                else:
                    print(4)
                    cata = Catagory.objects.get(id = cata_id[2])
                    course = Course.objects.filter(catagory = cata).exclude(price=0)
            serializer = CourseSerializer(course, many = True)
            return Response(serializer.data)
        else:
            if cata_id[0:2] == "ff" or cata_id[0:2] == "tt":
                if cata_id[2] == "0":
                    course = Course.objects.filter(title__contains = cata_id[3:])
                else:
                    cata = Catagory.objects.get(id = cata_id[2])
                    course = Course.objects.filter(Q(catagory= cata) & Q(title__contains = cata_id[3:]))
            elif cata_id[:2] == "tf":
                if cata_id[2] == "0":
                    print(1)
                    course = Course.objects.filter(Q(price=0) & Q(title__contains = cata_id[3:]))
                else:
                    print(2)
                    cata = Catagory.objects.get(id = cata_id[2])
                    course = Course.objects.filter(Q(catagory= cata) & Q(price=0) & Q(title__contains = cata_id[3:]))
            else:
                if cata_id[2] == "0":
                    print(3)
                    course = Course.objects.filter(Q(title__contains = cata_id[3:]) & ~Q(price=0))
                else:
                    print(4)
                    cata = Catagory.objects.get(id = cata_id[2])
                    course = Course.objects.filter(Q(catagory = cata) & Q(title__contains = cata_id[3:])).exclude(price=0)
            serializer = CourseSerializer(course, many = True)
            return Response(serializer.data)
        

@api_view(["GET"])
def getStd(request):
    if request.method == "GET":
        std_list = []
        user_id = request.user.id
        teacher = Userinfo.objects.get(id = user_id)
        courses = Course.objects.filter(teacher= teacher)
        for course in courses:
            bought_items = Bought_item.objects.filter(course = course)
            for bought_item in bought_items:
                std = bought_item.student
                std_list.append(std.id)
        std = Userinfo.objects.filter(id__in=std_list)
        ser = UserinfoSerializer(std, many = True)
        return Response(ser.data)
    
@api_view(["POST"])
def enRoll(request):
    if type(request.data) == list:
        user = request.user
        for i in request.data:
            course = Course.objects.get(id = int(i))
            Bought_item.objects.create(student = user, course = course)
            cart = Cart_item.objects.get(Q(student = user) & Q(course = course))
            cart.delete()
            fav = Fav_item.objects.get(Q(student = user) & Q(course = course))
            fav.delete()
        return Response(" ")
        
    if request.method == "POST":
        user = request.user
        course_id = request.data["courseid"]
        course = Course.objects.get(id = course_id)
        Bought_item.objects.create(student = user, course=course)
        cart = Cart_item.objects.get(Q(student = user) & Q(course = course))
        cart.delete()
        fav = Fav_item.objects.get(Q(student = user) & Q(course = course))
        fav.delete()

    
    return Response(" ")

@api_view(["POST"])
def addFav(request):
    if request.method == "POST":
        user = request.user
        course_id = request.data["courseid"]
        course = Course.objects.get(id = course_id)
        Fav_item.objects.create(student = user, course=course)
    return Response(" ")

@api_view(["POST"])
def addCart(request):
    if request.method == "POST":
        user = request.user
        course_id = request.data["courseid"]
        course = Course.objects.get(id = course_id)
        Cart_item.objects.create(student = user, course=course)
    return Response(" ")


@api_view(["GET"])
def contentTeacher(request, content_id):
    if request.method == "GET":
        content = Content.objects.get(id = content_id)
        course = content.course
        teacher = course.teacher
        seralizer = UserinfoSerializer(teacher, many = False)
        return Response(seralizer.data)
    return Response(" ")

@api_view(["POST"])
def getpic(request, id):
    if request.method == "POST":
        if id != "$":
            course = Course.objects.get(title = id)
            course.pic = request.FILES["file"]
            course.save()
    return Response(" ")


