from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.Course)
admin.site.register(models.Fav_item)
admin.site.register(models.Bought_item)
admin.site.register(models.Content)
admin.site.register(models.Catagory)
admin.site.register(models.Cart_item)