from django.shortcuts import render,redirect,render_to_response, get_object_or_404
from django.template.loader import get_template
from django.http import HttpResponse, HttpResponseRedirect
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.views import generic

from database import models

from .models import MusicFile, Generate
from .forms import GenerateForm




MUSIC_FILE_TYPES = ['mid', 'mp3']


def database(request):
	MusicFile = models.MusicFile.objects.all()
	#return render(request, 'test.html', locals())
	return render(request, 'database.html', locals())


def generate(request):
	MusicFile = models.Generate.objects.all().order_by('-id')[0:1]

	if request.method == 'POST':
			form = GenerateForm(request.POST,request.FILES)
			if form.is_valid():
				form.save()
	else:
				form = GenerateForm()
	return render(request, 'generate.html', locals())

def search3(request):
	if request.method == 'POST':
		search = request.POST.get("searchdata")
		if models.MusicFile.objects.filter(file__icontains=search):
			searchresult = MusicFile.objects.filter(file__icontains=search)
			return render(request, 'database.html', locals())
		else:
			return render(request, 'database.html', locals())			

	
			 



	