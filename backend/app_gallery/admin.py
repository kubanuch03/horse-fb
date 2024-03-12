from django.contrib import admin

from .models import Gallery

class GalleryAdmin(admin.ModelAdmin):
    list_display = ['images','created_at']
    list_filter = ['created_at']

admin.site.register(Gallery,GalleryAdmin)
