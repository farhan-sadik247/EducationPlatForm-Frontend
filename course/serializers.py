from rest_framework.serializers import ModelSerializer
from .models import Course, Content

class CourseSerializer(ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class ContentSerializer(ModelSerializer):
    class Meta:
        model = Content
        fields = '__all__'