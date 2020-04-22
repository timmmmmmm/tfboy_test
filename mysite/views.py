from django.shortcuts import render,redirect,render_to_response, get_object_or_404
from django.template.loader import get_template
from django.http import HttpResponse, HttpResponseRedirect
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.views import generic



def index(request):
	template = get_template('index.html')
	html = template.render(locals())
	return HttpResponse(html)

def produce(request):
	template = get_template('produce.html')
	html = template.render(locals())
	return HttpResponse(html)

def intro(request):
	template = get_template('intro.html')
	html = template.render(locals())
	return HttpResponse(html)





