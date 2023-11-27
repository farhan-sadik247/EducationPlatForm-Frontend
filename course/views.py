from django.shortcuts import redirect, render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from .serializers import CourseSerializer, ContentSerializer, CatagorySerializer
from django.http import HttpResponse, HttpRequest, JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
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
def addContent(request):
    if request.method == "POST":
        course_id = request.data["course_id"]
        course = Course.objects.get(id = int(course_id))
        title = request.data["title"]
        description = request.data["description"]
        remarks = request.data["remark"]
        link = request.data["link"]
        
        courseinfo = Content.objects.create(title = title, description= description, remarks = remarks, link = link, course=course)

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
def allCourse(request):
    if request.method == "GET":
        course = Course.objects.all()
        serializer = CourseSerializer(course, many = True)
        return Response(serializer.data)
 
@api_view(["GET"])
def popCourse(request):
    if request.method == "GET":
        course = Course.objects.order_by('-rating')[0:3]
        serializer = CourseSerializer(course, many = True)
        return Response(serializer.data)
    
@api_view(["GET"])
def lateCourse(request):
    if request.method == "GET":
        course = Course.objects.order_by('-created_at')[0:3]
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
    return Response(course.rating)




@api_view(["GET"])
def TeacherCourses(request):
    if request.method == "GET":
        teacher_id = request.user.id
        course = Course.objects.filter(teacher = teacher_id)
        serializer = CourseSerializer(course, many = True)
        return Response(serializer.data)
    
@api_view(["GET"])
def RecentCourses(request, teacher_id):
    if request.method == "GET":
        course = Course.objects.filter(teacher = teacher_id).order_by("-created_at")[0]
        serializer = CourseSerializer(course, many = False)
        print(serializer.data)
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
    if request.method == "GET":
        total = Bought_item.objects.filter(course = course_id)
        print(len(total))
        return Response(len(total))
    

@api_view(["GET"])
def boughtCourses(request):
    if request.method == "GET":
        user = request.user
        fav_course = Fav_item.objects.filter(student = user)
        serializer = CourseSerializer(fav_course, many = True)
        return Response(serializer.data)

    
@api_view(["GET"])
def favCourses(request):
    user = request.user
    fav_course = Fav_item.objects.filter(student = user)
    serializer = CourseSerializer(fav_course, many = True)
    return Response(serializer.data)


@api_view(["POST"])
def removeCourse(request, teacher_id):
    if request.method == "POST":
        user = request.user
        course_id = request.data("course_id")
        course = Fav_item.objects.get(id = course_id)          
        course.delete()
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