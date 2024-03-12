from rest_framework import serializers
from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(
        source="user.username", allow_null=True, read_only=True
    )
    

    def get_user_name(self, obj):
        return obj.user.username if obj.user else None

    class Meta:
        model = Review
        fields = ["id", "user", "text_review","user_name","image", "created_at"]
        exlude = ['stars']
