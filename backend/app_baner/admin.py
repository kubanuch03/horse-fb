from django.contrib import admin

from .models import Baner

class BanerAdmin(admin.ModelAdmin):
    list_display = ['id','image']

admin.site.register(Baner,BanerAdmin)
