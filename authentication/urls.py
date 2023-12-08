from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name = "home"),
    path("signup", views.signup, name = "signup"),
    path("signin", views.signin, name = "signin"),
    path("signout", views.signout, name = "signout"),
    path("admin_pass", views.admin_pass, name = "admin_pass"),
    path("create_admin", views.create_admin, name = "create_admin"),
    path("t_signup", views.teacher_signup, name = "t_signup"),
    # path("profile", views.profile, name = "profile"),
    path("update", views.edit_profile, name = "edit_profile"),
    path("change_pass/<str:cp>", views.changePass, name = "change_pass"),
    path("allteacher", views.allTeacher, name = "allteacher"),
    path("getteacher/<str:teacher_id>", views.getTeacher, name = "getteacher"),
    path("checkname/<str:username>", views.check_name, name = "checkname"),
    path("getuser", views.getUser, name = "getuser"),
    path("getpic", views.getPic, name = "getpic"),
    path("test", views.test, name = "test"),

]