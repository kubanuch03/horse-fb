from django.urls import path
from .views import *

urlpatterns = [
    path('list/info/', InfoListApiViews.as_view()),
    path('list/info/<int:pk>/',InfoDetailApiViews.as_view())
]