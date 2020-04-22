from django.contrib import admin
from trips import models
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User


admin.site.register(models.Profile)
admin.site.register(models.Post)  
admin.site.register(models.Comment) 
@admin.register(models.Message)
class CommentAdmin(admin.ModelAdmin):
    list_display = ['id', 'sender', 'receiver', 'create_date','belong']     

# Register your models here.
