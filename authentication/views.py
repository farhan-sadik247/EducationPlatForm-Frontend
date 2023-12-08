from django.shortcuts import redirect, render
from rest_framework.response import Response
from rest_framework.decorators import api_view
# from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout, get_user_model
from .serializers import UserinfoSerializer
from django.http import HttpResponse, HttpRequest, JsonResponse
from .models import Userinfo
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from django.utils.decorators import method_decorator
from course.models import Course
from course.serializers import CourseSerializer
User = get_user_model()

# Create your views here.
@api_view(["GET", "POST"])
def home(request):
    print(request)
    if request.method == "POST":
        users = Userinfo.objects.all()
        serializer = UserinfoSerializer(users, many = True)
        return Response(serializer.data)
    return Response(str(request.user.id))

@api_view(["GET"])
def signout(request):
    if request.method == "GET":
        logout(request)
    return Response("kdajhf")


@api_view(["POST"])
def signin(request):
    if request.method == "POST":
        username = request.data["username"]
        password = request.data["password"]
        userinfo = authenticate(username=username, password= password)

        if userinfo is not None:
            login(request, userinfo)
            print(request.user.username)
    return Response()


@api_view(["POST"])
def teacher_signup(request):
    if request.method == "POST":
        username = request.data["username"]
        fullname = request.data["fullname"]
        email = request.data["email"]
        password = request.data["password"]
        password2 = request.data["cpass"]
        skills = request.data["skills"]
        
        userinfo = Userinfo.objects.create_user(username, email, password= password, fullname= fullname, skills = skills, is_teacher= True)

        userinfo.save()

        return Response("gg")

@api_view(["POST", "GET"])
def signup(request):
    if request.method == "POST":
        username = request.data["username"]
        fullname = request.data["fullname"]
        email = request.data["email"]
        password = request.data["password"]
        password2 = request.data["cpass"]
        interest = request.data["skills"]
        ques = request.data["question"]
        ans = request.data["answer"]

        
        userinfo = Userinfo.objects.create_user(username, email, password= password, fullname= fullname, it = interest, is_teacher= False, ques = ques, ans = ans)

        userinfo.save()

        return Response("gg")
    

@api_view(["GET"])
def allTeacher(request):
    if request.method == "GET":
        teacher = Userinfo.objects.filter(is_teacher=True).order_by('-rating').all()
        for i in teacher:
            total = 0
            course = Course.objects.filter(teacher = i)
            if len(course) == 0:
                i.rating = 0
            else:
                for j in course:
                    total += j.rating
                i.rating = (total/len(course))
        # teacher = Userinfo.objects.filter(is_teacher=True).order_by('-rating').all()
        serializer = UserinfoSerializer(teacher, many = True)
        return Response(serializer.data)
    
@api_view(["GET"])
def getTeacher(request,teacher_id):
    if teacher_id == "undefined":
        return Response("None")
    teacher = Userinfo.objects.get(id = teacher_id)
    if request.method == "GET":
        serializer = UserinfoSerializer(teacher, many = False)
        return Response(serializer.data)
    if request.method == "POST":
        rating = request.data["rating"]
        no_rating = teacher.no_rating
        if no_rating == 1:
            teacher.rating = rating
            teacher.total = rating
            teacher.save()
        else:
            total = float(teacher.total) + float(rating)
            teacher.total = total
            teacher.rating = round(total/no_rating, 1)
            teacher.save()
        teacher.no_rating += 1
        teacher.save()
    return Response(teacher.rating)

@api_view(["POST"])
def create_admin(request):
    if request.method == "POST":
        username = request.data["username"]
        # fullname = request.data["fullname"]
        email = request.data["email"]
        # it = request.it["it"]
        password = request.data["password"]
        password2 = request.data["password2"]


        if User.objects.filter(username=username):
            messages.error(request, "Username exists already")
            return redirect("create_admin")
        
        if password!= password2:
            messages.error(request, "Both password does not match")
            return redirect("create_admin")
        
        userinfo = User.objects.create_superuser(username, email, password)

        userinfo.save()
        
        userinfo = authenticate(username=username, password=password)
        login(request, userinfo)
        messages.success(request, "Account Created Successfully!")
        return redirect("home")
    

@api_view(["POST","GET"])
def edit_profile(request):
    if request.method == "POST":
        # password = request.data["password"]
        user = request.user
        # if password != request.user.password:
        #     return Response("hacker")
        
        u = Userinfo.objects.get(id=user.id)
        if request.data["username"] != "":
            u.username = request.data["username"]
        if request.data["email"] != "":
            u.email = request.data["email"]
        if request.data["phone"] != "":
            u.phone = request.data["phone"]
        if request.data["dob"] != "":
            u.dob = request.data["dob"],
        if request.data["address"] != "":
            u.address = request.data["address"]
        if request.data["gender"] != "":
            u.gender = request.data["gender"]
        u.save()
    return Response("")


def getPic(request):
    if request.method == "POST":
        user = request.user
        u = Userinfo.objects.get(id = user.id)
        u.pic = request.FILES["file"]
        u.save()
    return HttpResponse([])


@api_view(["POST", "GET"])
def changePass(request, cp):
    if request.method == "POST":
        if cp[0] == "$" :
            password = request.data["password"]
            if request.user.check_password(password) == True:
                pass1 = request.data["pass1"]
                username = request.user.pk
                user = User.objects.get(pk = username)
                user.set_password(pass1)
                user.save()
                return Response("1")
        else:
            new_password = request.data["pass1"]
            user = Userinfo.objects.get(username = cp)
            user.set_password(new_password)
            user.save()
            return Response("")
     
    if request.method == "GET":
        if cp[0] == "$":
            password = cp[1:]
            if request.user.check_password(password):
                print("T")
                return Response("t")
            else:
                print("f")
                return Response("f")

        else:
            name, q, a = [i for i in cp.split("$")]
            user = Userinfo.objects.get(username = name)
            if user.ques == int(q) and user.ans == a:
                return Response(user.id)
            else:
                return Response("f")
    return Response([])

@api_view(["GET"])
def getUser(request):
    user_id = request.user.id
    user = Userinfo.objects.filter(id = user_id)
    if len(user) > 0:
        user = user[0]
        serializer = UserinfoSerializer(user, many = False)
        return Response(serializer.data)
    return Response(str(request.user.username))


@api_view(["POST"])
def admin_pass(request):
    pass
    # if request.method == "POST":
    #     superpass = request.data["superpass"]
    #     if superpass == "Hehheboy":
    #         request.user.is_staff = True
    #         return redirect("create_admin")
    #     myuser.user_permissions.add(permission, permission, ...)
    #     myuser.user_permissions.remove(permission, permission, ...)

# @api_view(["POST","GET"])       
# def teacher(request, house_id):
#     teacher = Teacher.objects.get(pk = house_id)
#     if request.user.is_authenticated:
#         cart_items = Cart_item.objects.filter(cart=Cart.objects.get(manush=request.user))
#         for item in cart_items:
#             if item.house == house:
#                 in_cart = True
#                 break
        

@api_view(["GET"])
def check_name(request, username):
    if len(username) == 1:
        return Response("nai")
    user = Userinfo.objects.filter(username = username[1:])
    print(user)
    if len(user) == 0:
        return Response("nai")
    else:
        return Response("ase")


@api_view(["GET"])
def test(request):
    user = Userinfo.objects.get(username = "user2")
    course = Course.objects.get(title = "course a")
    # ser = CourseSerializer(course, many = True)

    return Response(course.teacher)