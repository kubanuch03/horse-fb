from rest_framework import generics

from .models import Baner
from .serializers import BanerSerializer


class BanerDetailApiView(generics.ListAPIView):
    queryset = Baner.objects.all()
    serializer_class = BanerSerializer
