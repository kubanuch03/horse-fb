from django.urls import path
from .views import *

urlpatterns = [
    path("list/gallerys/",ListGalleryApiView.as_view(),name='list-gallery'),
    path("detail/gallery/<int:pk>/",DetailGalleryApiView.as_view(),name='detail-gallery'),
    path("create/gallery/",CreateGalleryApiView.as_view(),name='create-gallery'),
    path("detail/rud/<int:pk>/",RUDGalleryApiView.as_view(),name='rud-gallery'),

]

