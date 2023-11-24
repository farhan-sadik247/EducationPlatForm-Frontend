from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path("addcourse", views.addCourse, name = "addcourse"),
    path("allcourse", views.allCourse, name = "allcourse"),
    path("popcourse", views.popCourse, name = "popcourse"),
    path("latecourse", views.lateCourse, name = "latecourse"),
    path("<int:course_id>/getcourse", views.getCourse, name = "getcourse"),
    path("<int:course_id>/totalstd", views.totalStd, name = "totalstd"),
    path("teachercourses", views.TeacherCourses, name = "teachercourses"),
    path("<int:teacher_id>/recentcourse", views.RecentCourses, name = "recentcourses"),
    path("delelteCourse", views.deleteCourse, name = "deletecourses"),
    path("<int:student_id>/favCourses", views.favCourses, name = "favCourses"),
    path("<int:student_id>/removeCourses", views.removeCourse, name = "removeCourses"),
    path("<int:student_id>/boughtCourses", views.boughtCourses, name = "boughtCourses"),
]