from django.db import models
from authentication.models import Userinfo

# Create your models here.

class Catagory(models.Model):
    details = models.TextField(blank=True, null=True, default=None)
    added = models.DateTimeField(auto_now_add=True)

class Course(models.Model):
    title = models.CharField(max_length=100,blank=False, default = None)
    details = models.TextField(blank=False, default = None)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=False, default = 0)
    # pic = models.ImageField(upload_to="images/")
    rating = models.DecimalField(max_digits=2, decimal_places=1, blank=False, default=0)
    techs = models.TextField(blank=False, default = None)
    created_at = models.DateTimeField(auto_now_add = True)
    no_rating = models.IntegerField(blank = True, null = True, default=1)
    total = models.DecimalField(max_digits=1000, decimal_places=1, blank=False, default=0)
    # catagory = models.ForeignKey(Catagory, on_delete=models.CASCADE, default = 1)
    

    teacher = models.ForeignKey(Userinfo, on_delete= models.CASCADE, default = None)


class Fav(models.Model):
    created_at = models.DateTimeField(auto_now_add = True)
    student = models.ForeignKey(Userinfo, on_delete = models.CASCADE)

    @property
    def num_items(self):
        return len(self.cart_item_set.all())

    def __str__(self) -> str:
        return 'Cart of: ' + self.student.username

class Fav_item(models.Model):
    fav = models.ForeignKey(Fav, on_delete = models.CASCADE)
    course = models.ForeignKey(Course, on_delete = models.CASCADE)

    def __str__(self) -> str:
        return f'Course: {self.course.title} for {self.fav.student.username}'
    

class Bought(models.Model):
    bought_at = models.DateTimeField(auto_now_add = True)
    student = models.ForeignKey(Userinfo, on_delete = models.CASCADE)

    @property
    def num_items(self):
        return len(self.cart_item_set.all())

    def __str__(self) -> str:
        return 'Cart of: ' + self.student.username

class Bought_item(models.Model):
    bought = models.ForeignKey(Bought, on_delete = models.CASCADE)
    course = models.ForeignKey(Course, on_delete = models.CASCADE)

    def __str__(self) -> str:
        return f'Course: {self.course.title} for {self.bought.student.username}'


class Content(models.Model):
    added = models.DateTimeField(auto_now_add=True)
    file = models.FileField(blank=True, null=True, upload_to="content/")
    link = models.TextField(blank=True, null=True, default = None)

    course = models.ForeignKey(Course, on_delete = models.CASCADE)
