from django.contrib import admin
from database import models
# Register your models here.

#class TestAdmin(admin.ModelAdmin):
#	fields =('a', 'b')

admin.site.register(models.MusicFile)
admin.site.register(models.Generate)
