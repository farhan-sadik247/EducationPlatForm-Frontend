from rest_framework.serializers import ModelSerializer
from .models import Course, Content, Catagory, Bought_item

class CourseSerializer(ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class ContentSerializer(ModelSerializer):
    class Meta:
        model = Content
        fields = '__all__'

class CatagorySerializer(ModelSerializer):
    class Meta:
        model = Catagory
        fields = '__all__'

class BoughtSerializer(ModelSerializer):
    class Meta:
        model = Bought_item
        fields = ["rating"]