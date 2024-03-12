from rest_framework import serializers
from app_gallery.models import Gallery


class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ['id','images']