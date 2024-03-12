from django.contrib import admin

from .models import Review
class ReviewAdmin(admin.ModelAdmin):
    list_display = ['id','user','text_review','created_at']
    list_filter = ['created_at']
    search_fields = ['id','user']

admin.site.register(Review,ReviewAdmin)