from django.db import models
from authentication.models import Userinfo

# Create your models here.

class Catagory(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False, default="A")
    details = models.TextField(blank=True, null=True, default=None)
    added = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.title}"
    

class Course(models.Model):
    title = models.CharField(max_length=100,blank=False, default = None)
    details = models.TextField(blank=False, default = None)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=False, default = 0)
    pic = models.ImageField(upload_to="courses/", blank = True, null = True)
    rating = models.DecimalField(max_digits=2, decimal_places=1, blank=False, default=0)
    techs = models.TextField(blank=False, default = None)
    created_at = models.DateTimeField(auto_now_add = True)
    no_rating = models.IntegerField(blank = True, null = True, default=1)
    total = models.DecimalField(max_digits=1000, decimal_places=1, blank=False, default=0)
    catagory = models.ForeignKey(Catagory, on_delete=models.CASCADE, default = "1")
    discount = models.DecimalField(blank = True, null = True, default = 0, max_digits=4, decimal_places=1)
    

    teacher = models.ForeignKey(Userinfo, on_delete= models.CASCADE, default = None)

    def __str__(self) -> str:
        return f'Course: {self.title}'

class Fav_item(models.Model):
    course = models.ForeignKey(Course, on_delete = models.CASCADE)
    student = models.ForeignKey(Userinfo, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f'Course: {self.course.title} for {self.student.username}'
    


class Bought_item(models.Model):
    student = models.ForeignKey(Userinfo, on_delete = models.CASCADE)
    course = models.ForeignKey(Course, on_delete = models.CASCADE)
    rating = models.BooleanField(default=False, blank=True, null=True)

    def __str__(self) -> str:
        return f'Course: {self.course.title} for {self.student.username}'
    
class Cart_item(models.Model):
    student = models.ForeignKey(Userinfo, on_delete = models.CASCADE)
    course = models.ForeignKey(Course, on_delete = models.CASCADE)

    def __str__(self) -> str:
        return f'Course: {self.course.title} for {self.student.username}'


class Content(models.Model):
    added = models.DateTimeField(auto_now_add=True)
    file = models.FileField(blank=True, null=True, upload_to="content/")
    link = models.TextField(blank=True, null=True, default = None)
    description = models.TextField(blank = False, null = False, default = "")
    title = models.CharField(max_length=200, blank=False, null = False, default = "")
    remarks = models.TextField(blank=True, null=True, default = None)
    sub_link = models.TextField(blank=True, null=True, default = None)
    type = models.CharField(max_length=50, null = True, blank= True, default = None)
    

    course = models.ForeignKey(Course, on_delete = models.CASCADE)
