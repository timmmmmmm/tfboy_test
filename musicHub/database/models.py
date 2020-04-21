from django.db import models
from django.conf import settings

# Create your models here.
class MusicFile(models.Model):
	title= models.IntegerField(default=0)
	file = models.FileField(upload_to='music', null=True)

class Generate(models.Model):
	musicfile = models.FileField(upload_to='storage', null=True)


