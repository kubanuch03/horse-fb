from rest_framework import generics, permissions
from app_gallery.models import Gallery

from .serializers import GallerySerializer


#User
class ListGalleryApiView(generics.ListAPIView):
    queryset = Gallery.objects.all().order_by("created_at")
    serializer_class = GallerySerializer
    permission_classes = [permissions.AllowAny]


class DetailGalleryApiView(generics.RetrieveAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
    permission_classes = [permissions.AllowAny]



#Admin
class CreateGalleryApiView(generics.ListCreateAPIView):
    queryset = Gallery.objects.all().order_by("created_at")
    serializer_class = GallerySerializer
    permission_classes = [permissions.IsAdminUser]



class RUDGalleryApiView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = GallerySerializer
    permission_classes = [permissions.IsAdminUser]




