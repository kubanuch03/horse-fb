from rest_framework import generics

from .models import Info
from .serializers import InfoSerializer









class InfoListApiViews(generics.ListAPIView):
    queryset = Info.objects.all()
    serializer_class = InfoSerializer
    fields = ['id','title','description']


class InfoDetailApiViews(generics.RetrieveAPIView):
    queryset = Info.objects.all()
    serializer_class = InfoSerializer
    fields = ['id','title','description']
