from django.contrib import admin
from django.contrib.auth.models import  Group

from app_users.models import CustomUser


class CustomAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "username",
        "email",
        "created_at",
    )
    search_fields = ("username", "email", "created_at","token_auth")
    list_filter = ("is_staff", "created_at")

    fieldsets = (
        (None, {"fields": ("email", "password")}),
        (
            "Personal info",
            {
                "fields": (
                    "username",
                    "token_auth"
                )
            },
        ),
        
       
        (
            "Permissions",
            {"fields": ("is_staff", "is_active", "created_at")},
        ),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "email",
                    "password1",
                    "password2",
                    "full_name",
                    "phone_number",
                ),
            },
        ),
    )
    readonly_fields = ("created_at",)


admin.site.register(CustomUser, CustomAdmin)
admin.site.unregister(Group) 

