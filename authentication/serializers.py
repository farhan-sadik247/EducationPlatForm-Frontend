from rest_framework.serializers import ModelSerializer
from .models import Userinfo

class UserinfoSerializer(ModelSerializer):
    class Meta:
        model = Userinfo
        fields = ['fullname',"skills", "phone", "dob", "rating", "address", "gender", "it","id", "username", "is_teacher", "email", "pic"]
        # fields = "__all__"