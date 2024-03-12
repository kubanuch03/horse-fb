from django.contrib import admin

from .models import Info

class InfoAdmin(admin.ModelAdmin):
    list_display = ['id','title']

admin.site.register(Info, InfoAdmin)