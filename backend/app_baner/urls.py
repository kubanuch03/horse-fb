from django.urls import path

from .views import BanerDetailApiView

urlpatterns = [
    path('detail/baner/<int:pk>/',BanerDetailApiView.as_view())
]
