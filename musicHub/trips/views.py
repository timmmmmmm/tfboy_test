from datetime import datetime, timedelta
from django.shortcuts import render,redirect,get_object_or_404  # 加入 redirect 套件
from django.contrib.auth import authenticate, login	,logout
from django.contrib import auth,messages
from django.http import HttpResponse,HttpResponseRedirect
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
from django.contrib.auth.decorators import login_required
from django.template.loader import get_template 
from .models import Profile,Post,Message
from django.dispatch import receiver
from django.urls import reverse
from django.contrib.auth.forms import UserChangeForm,PasswordResetForm
from .forms import ProfileForm,UserForm,PostForm,CommentForm
from django.db.models.signals import post_save
from trips import models
import math
def signin(request):
	if request.method == 'POST':
		account = request.POST.get('account')
		password = request.POST.get('password')
		if User.objects.filter(username=account).exists():
			user = authenticate(username=account, password=password)
			if user is not None:
				login(request,user)
				return redirect('/forum/')

			else:
				return HttpResponse("<script>alert('密碼錯誤!');window.location.replace(window.location.href);</script>")
		else:
			return HttpResponse("<script>alert('此帳號並不存在!);window.location.replace(window.location.href);</script>")
	return render(request,'login.html',locals())
def regist(request):
	if request.method == 'POST':
		account = request.POST.get('account')
		password = request.POST.get('password')
		password2 = request.POST.get('password2')
		email = request.POST.get('email')
		if password!=password2:
			return HttpResponse("<script>alert('確認密碼不一致!');window.location.replace(window.location.href);</script>")
		if User.objects.filter(username=account).exists() :
			return HttpResponse("<script>alert('The account already exists');window.location.replace(window.location.href);</script>")
		if User.objects.filter(email=email).exists() :	
			return HttpResponse("<script>alert('此Email已有人使用!');window.location.replace(window.location.href);</script>")
		else:
			User.objects.create_user(account,email,password2)
			return redirect('/login/')
	return render(request,'regist.html')






def forum(request):
	return render(request, 'forum.html')


def logout(request):
    auth.logout(request)
    return render(request, 'forum.html')

page1 = 1
def blog_opera(request, pageindex = None):
	global page1  #重複開啟本網頁時需保留 page1 的值
	pagesize = 6 #每頁顯示的資料筆數
	newsall = models.Post.objects.all().order_by('-id')  #讀取新聞資料表,依時間遞減排序
	datasize = len(newsall)  #新聞筆數
	totpage = math.ceil(datasize / pagesize)  #總頁數
	if pageindex==None:  #無參數
		page1 = 1
		newsunits = models.Post.objects.filter(category='opera').order_by('-id')[0:6]
	elif pageindex=='1':  #上一頁
		start = (page1-2)*pagesize  #該頁第1筆資料
		if start >= 0:  #有前頁資料就顯示
			newsunits = models.Post.objects.filter(category='opera').order_by('-id')[start:(start+pagesize)]
			page1 -= 1
	elif pageindex=='2':  #下一頁
		start = page1*pagesize  #該頁第1筆資料
		if start < datasize:  #有下頁資料就顯示
			newsunits = models.Post.objects.filter(category='opera').order_by('-id')[start:(start+pagesize)]
			page1 += 1
	elif pageindex=='3':  #由詳細頁面返回首頁
		start = (page1-1)*pagesize  #取得原有頁面第1筆資料 
		newsunits = models.Post.objects.filter(category='opera').order_by('-id')[start:(start+pagesize)]



	currentpage = page1  #將目頁前頁面以區域變數傳回html
	return render(request, "blog/blog_opera.html", locals())

def blog_symphony(request, pageindex = None):
	global page1  #重複開啟本網頁時需保留 page1 的值
	pagesize = 6 #每頁顯示的資料筆數
	newsall = models.Post.objects.all().order_by('-id')  #讀取新聞資料表,依時間遞減排序
	datasize = len(newsall)  #新聞筆數
	totpage = math.ceil(datasize / pagesize)  #總頁數
	if pageindex==None:  #無參數
		page1 = 1
		newsunits = models.Post.objects.filter(category='symphony').order_by('-id')[0:6]
	elif pageindex=='1':  #上一頁
		start = (page1-2)*pagesize  #該頁第1筆資料
		if start >= 0:  #有前頁資料就顯示
			newsunits = models.Post.objects.filter(category='symphony').order_by('-id')[start:(start+pagesize)]
			page1 -= 1
	elif pageindex=='2':  #下一頁
		start = page1*pagesize  #該頁第1筆資料
		if start < datasize:  #有下頁資料就顯示
			newsunits = models.Post.objects.filter(category='symphony').order_by('-id')[start:(start+pagesize)]
			page1 += 1
	elif pageindex=='3':  #由詳細頁面返回首頁
		start = (page1-1)*pagesize  #取得原有頁面第1筆資料
		newsunits = models.Post.objects.filter(category='symphony').order_by('-id')[start:(start+pagesize)]



	currentpage = page1  #將目頁前頁面以區域變數傳回html
	return render(request, "blog/blog_symphony.html", locals())

def blog_sonata(request, pageindex = None):
	global page1  #重複開啟本網頁時需保留 page1 的值
	pagesize = 6 #每頁顯示的資料筆數
	newsall = models.Post.objects.all().order_by('-id')  #讀取新聞資料表,依時間遞減排序
	datasize = len(newsall)  #新聞筆數
	totpage = math.ceil(datasize / pagesize)  #總頁數
	if pageindex==None:  #無參數
		page1 = 1
		newsunits = models.Post.objects.filter(category='sonata').order_by('-id')[0:6]
	elif pageindex=='1':  #上一頁
		start = (page1-2)*pagesize  #該頁第1筆資料
		if start >= 0:  #有前頁資料就顯示
			newsunits = models.Post.objects.filter(category='sonata').order_by('-id')[start:(start+pagesize)]
			page1 -= 1
	elif pageindex=='2':  #下一頁
		start = page1*pagesize  #該頁第1筆資料
		if start < datasize:  #有下頁資料就顯示
			newsunits = models.Post.objects.filter(category='sonata').order_by('-id')[start:(start+pagesize)]
			page1 += 1
	elif pageindex=='3':  #由詳細頁面返回首頁
		start = (page1-1)*pagesize  #取得原有頁面第1筆資料 
		newsunits = models.Post.objects.filter(category='sonata').order_by('-id')[start:(start+pagesize)]



	currentpage = page1  #將目頁前頁面以區域變數傳回html
	return render(request, "blog/blog_sonata.html", locals())

def blog_chorus(request, pageindex = None):
	global page1  #重複開啟本網頁時需保留 page1 的值
	pagesize = 6 #每頁顯示的資料筆數
	newsall = models.Post.objects.all().order_by('-id')  #讀取新聞資料表,依時間遞減排序
	datasize = len(newsall)  #新聞筆數
	totpage = math.ceil(datasize / pagesize)  #總頁數
	if pageindex==None:  #無參數
		page1 = 1
		newsunits = models.Post.objects.filter(category='chorus').order_by('-id')[0:6]
	elif pageindex=='1':  #上一頁
		start = (page1-2)*pagesize  #該頁第1筆資料
		if start >= 0:  #有前頁資料就顯示
			newsunits = models.Post.objects.filter(category='chorus').order_by('-id')[start:(start+pagesize)]
			page1 -= 1
	elif pageindex=='2':  #下一頁
		start = page1*pagesize  #該頁第1筆資料
		if start < datasize:  #有下頁資料就顯示
			newsunits = models.Post.objects.filter(category='chorus').order_by('-id')[start:(start+pagesize)]
			page1 += 1
	elif pageindex=='3':  #由詳細頁面返回首頁
		start = (page1-1)*pagesize  #取得原有頁面第1筆資料 
		newsunits = models.Post.objects.filter(category='chorus').order_by('-id')[start:(start+pagesize)]



	currentpage = page1  #將目頁前頁面以區域變數傳回html
	return render(request, "blog/blog_chorus.html", locals())

def blog_concerto(request, pageindex = None):
	global page1  #重複開啟本網頁時需保留 page1 的值
	pagesize = 6 #每頁顯示的資料筆數
	newsall = models.Post.objects.all().order_by('-id')  #讀取新聞資料表,依時間遞減排序
	datasize = len(newsall)  #新聞筆數
	totpage = math.ceil(datasize / pagesize)  #總頁數
	if pageindex==None:  #無參數
		page1 = 1
		newsunits = models.Post.objects.filter(category='concerto').order_by('-id')[0:6]
	elif pageindex=='1':  #上一頁
		start = (page1-2)*pagesize  #該頁第1筆資料
		if start >= 0:  #有前頁資料就顯示
			newsunits = models.Post.objects.filter(category='concerto').order_by('-id')[start:(start+pagesize)]
			page1 -= 1
	elif pageindex=='2':  #下一頁
		start = page1*pagesize  #該頁第1筆資料
		if start < datasize:  #有下頁資料就顯示
			newsunits = models.Post.objects.filter(category='concerto').order_by('-id')[start:(start+pagesize)]
			page1 += 1
	elif pageindex=='3':  #由詳細頁面返回首頁
		start = (page1-1)*pagesize  #取得原有頁面第1筆資料 
		newsunits = models.Post.objects.filter(category='concerto').order_by('-id')[start:(start+pagesize)]



	currentpage = page1  #將目頁前頁面以區域變數傳回html
	return render(request, "blog/blog_concerto.html", locals())

def blog_modern(request, pageindex = None):
	global page1  #重複開啟本網頁時需保留 page1 的值
	pagesize = 6 #每頁顯示的資料筆數
	newsall = models.Post.objects.all().order_by('-id')  #讀取新聞資料表,依時間遞減排序
	datasize = len(newsall)  #新聞筆數
	totpage = math.ceil(datasize / pagesize)  #總頁數
	if pageindex==None:  #無參數
		page1 = 1
		newsunits = models.Post.objects.filter(category='modern').order_by('-id')[0:6]
	elif pageindex=='1':  #上一頁
		start = (page1-2)*pagesize  #該頁第1筆資料
		if start >= 0:  #有前頁資料就顯示
			newsunits = models.Post.objects.filter(category='modern').order_by('-id')[start:(start+pagesize)]
			page1 -= 1
	elif pageindex=='2':  #下一頁
		start = page1*pagesize  #該頁第1筆資料
		if start < datasize:  #有下頁資料就顯示
			newsunits = models.Post.objects.filter(category='modern').order_by('-id')[start:(start+pagesize)]
			page1 += 1
	elif pageindex=='3':  #由詳細頁面返回首頁
		start = (page1-1)*pagesize  #取得原有頁面第1筆資料 
		newsunits = models.Post.objects.filter(category='modern').order_by('-id')[start:(start+pagesize)]



	currentpage = page1  #將目頁前頁面以區域變數傳回html
	return render(request, "blog/blog_modern.html", locals())

def blog_trade(request, pageindex = None):
	global page1  #重複開啟本網頁時需保留 page1 的值
	pagesize = 6 #每頁顯示的資料筆數
	newsall = models.Post.objects.all().order_by('-id')  #讀取新聞資料表,依時間遞減排序
	datasize = len(newsall)  #新聞筆數
	totpage = math.ceil(datasize / pagesize)  #總頁數
	if pageindex==None:  #無參數
		page1 = 1
		newsunits = models.Post.objects.filter(category='trade').order_by('-id')[0:6]
	elif pageindex=='1':  #上一頁
		start = (page1-2)*pagesize  #該頁第1筆資料
		if start >= 0:  #有前頁資料就顯示
			newsunits = models.Post.objects.filter(category='trade').order_by('-id')[start:(start+pagesize)]
			page1 -= 1
	elif pageindex=='2':  #下一頁
		start = page1*pagesize  #該頁第1筆資料
		if start < datasize:  #有下頁資料就顯示
			newsunits = models.Post.objects.filter(category='trade').order_by('-id')[start:(start+pagesize)]
			page1 += 1
	elif pageindex=='3':  #由詳細頁面返回首頁
		start = (page1-1)*pagesize  #取得原有頁面第1筆資料 
		newsunits = models.Post.objects.filter(category='trade').order_by('-id')[start:(start+pagesize)]



	currentpage = page1  #將目頁前頁面以區域變數傳回html
	return render(request, "blog/blog_trade.html", locals())

def blog_chat(request, pageindex = None):
	global page1  #重複開啟本網頁時需保留 page1 的值
	pagesize = 6 #每頁顯示的資料筆數
	newsall = models.Post.objects.all().order_by('-id')  #讀取新聞資料表,依時間遞減排序
	datasize = len(newsall)  #新聞筆數
	totpage = math.ceil(datasize / pagesize)  #總頁數
	if pageindex==None:  #無參數
		page1 = 1
		newsunits = models.Post.objects.filter(category='chat').order_by('-id')[0:6]
	elif pageindex=='1':  #上一頁
		start = (page1-2)*pagesize  #該頁第1筆資料
		if start >= 0:  #有前頁資料就顯示
			newsunits = models.Post.objects.filter(category='chat').order_by('-id')[start:(start+pagesize)]
			page1 -= 1
	elif pageindex=='2':  #下一頁
		start = page1*pagesize  #該頁第1筆資料
		if start < datasize:  #有下頁資料就顯示
			newsunits = models.Post.objects.filter(category='chat').order_by('-id')[start:(start+pagesize)]
			page1 += 1
	elif pageindex=='3':  #由詳細頁面返回首頁
		start = (page1-1)*pagesize  #取得原有頁面第1筆資料 
		newsunits = models.Post.objects.filter(category='chat').order_by('-id')[start:(start+pagesize)]



	currentpage = page1  #將目頁前頁面以區域變數傳回html
	return render(request, "blog/blog_chat.html", locals())

def blog_others(request, pageindex = None):
	global page1  #重複開啟本網頁時需保留 page1 的值
	pagesize = 6 #每頁顯示的資料筆數
	newsall = models.Post.objects.all().order_by('-id')  #讀取新聞資料表,依時間遞減排序
	datasize = len(newsall)  #新聞筆數
	totpage = math.ceil(datasize / pagesize)  #總頁數
	if pageindex==None:  #無參數
		page1 = 1
		newsunits = models.Post.objects.filter(category='others').order_by('-id')[0:6]
	elif pageindex=='1':  #上一頁
		start = (page1-2)*pagesize  #該頁第1筆資料
		if start >= 0:  #有前頁資料就顯示
			newsunits = models.Post.objects.filter(category='others').order_by('-id')[start:(start+pagesize)]
			page1 -= 1
	elif pageindex=='2':  #下一頁
		start = page1*pagesize  #該頁第1筆資料
		if start < datasize:  #有下頁資料就顯示
			newsunits = models.Post.objects.filter(category='others').order_by('-id')[start:(start+pagesize)]
			page1 += 1
	elif pageindex=='3':  #由詳細頁面返回首頁
		start = (page1-1)*pagesize  #取得原有頁面第1筆資料 
		newsunits = models.Post.objects.filter(category='others').order_by('-id')[start:(start+pagesize)]



	currentpage = page1  #將目頁前頁面以區域變數傳回html
	return render(request, "blog/blog_others.html", locals())


def search(request):
	if request.method == 'POST':
		search = request.POST.get("search")
		if models.Post.objects.filter(title__icontains=search):
			searchresult = Post.objects.filter(title__icontains=search)
			return render(request, 'blog/blog_search.html', locals())
		else:
			return render(request, 'forum.html', locals())

def search2(request):
	if request.method == 'POST':
		search = request.POST.get("search")
		if models.Post.objects.filter(title__icontains=search):
			searchresult = Post.objects.filter(title__icontains=search)
			return render(request, 'blog/blog_search.html', locals())
		else:
			return HttpResponse("<script>alert('沒有關連性文章!);window.location.replace(window.location.href);</script>")

def post_list(request, pageindex = None):
	global page1  #重複開啟本網頁時需保留 page1 的值
	pagesize = 6 #每頁顯示的資料筆數
	post = models.Post.objects.filter(author=request.user).order_by('-id')#讀取新聞資料表,依時間遞減排序
	datasize = len(post)  #新聞筆數
	totpage = math.ceil(datasize / pagesize)  #總頁數
	if pageindex==None:  #無參數
		page1 = 1
		newsunits = models.Post.objects.filter(author=request.user).order_by('-id')[0:6]
	elif pageindex=='1':  #上一頁
		start = (page1-2)*pagesize  #該頁第1筆資料
		if start >= 0:  #有前頁資料就顯示
			newsunits = models.Post.objects.filter(author=request.user).order_by('-id')[start:(start+pagesize)]
			page1 -= 1
	elif pageindex=='2':  #下一頁
		start = page1*pagesize  #該頁第1筆資料
		if start < datasize:  #有下頁資料就顯示
			newsunits = models.Post.objects.filter(author=request.user).order_by('-id')[start:(start+pagesize)]
			page1 += 1
	elif pageindex=='3':  #由詳細頁面返回首頁
		start = (page1-1)*pagesize  #取得原有頁面第1筆資料 
		newsunits = models.Post.objects.filter(author=request.user).order_by('-id')[start:(start+pagesize)]
	currentpage = page1
	
	  #將目頁前頁面以區域變數傳回html
	return render(request, 'post_list.html',locals())



    
@login_required(login_url='/login/') 
def userinfo(request):
	if request.user.is_authenticated:
		username = request.user.username
		try:
			userinfo = models.Profile.objects.get(user=user)
		except:	
			pass
	return render(request, 'userinfo.html')



def update_profile(request):
    if request.method == 'POST':
        user_form = UserForm(request.POST, instance=request.user)
        profile_form = ProfileForm(request.POST, request.FILES,instance=request.user.profile) 
        if user_form.is_valid() and profile_form.is_valid():
            user_form.save()
            profile_form.save(commit=False)
            return redirect('/userinfo/')
        
    else:
        user_form = UserForm(instance=request.user)
        profile_form = ProfileForm(instance=request.user.profile)
    return render(request, 'edit_profile.html', {
        'user_form': user_form,
        'profile_form': profile_form
    })

@login_required(login_url='/login/') 
def post_create(request):
	if request.method == 'POST':
		post_form=PostForm(request.POST,request.FILES)
		if post_form.is_valid():
			instance = post_form.save()
			instance.author = request.user
			instance.save()
			return redirect('/forum/')

	else:
		post_form = PostForm(instance=request.user)

		return render(request, 'post_form.html',{"post_form":post_form,})


def post_edit(request, pk):
        instance = get_object_or_404(Post, pk=pk)
        if request.method == "POST":
            form = PostForm(request.POST,request.FILES,instance=instance)
            if form.is_valid():
                instance = form.save(commit=False)
                instance.author=request.user
                instance.save()
                return redirect('blog_detail', pk=instance.pk)
        else:
        	form = PostForm(instance=instance)
       
        return render(request, 'post_edit.html',{"form":form,"instance":instance})

def del_post(request, pk):
	instance = get_object_or_404(Post, pk=pk)
	instance.delete()
	return redirect('/forum/')


def blog_detail(request, pk):
	post = get_object_or_404(Post, pk=pk)
	if request.method == "POST":
		form = CommentForm(request.POST)
		if form.is_valid():
			comment = form.save(commit=False)
			comment.post = post
			comment.author = request.user
			comment.save()
			return redirect('blog_detail', pk=post.pk)
	else:
		form = CommentForm()
	if request.method == 'POST':
		search = request.POST.get("search")
		if models.Post.objects.filter(title__icontains=search):
			searchresult = Post.objects.filter(title__icontains=search)
			return render(request, 'blog/blog_search.html', locals())
		else:
			return render(request, 'forum.html', locals())
	return render(request, 'blog/blog_detail.html', {'form': form,'post': post})



def msg_all_view(request):
    msg_list = Message.objects.filter(receiver = request.user).order_by('-id')
    return render(request, 'user_notify.html',{'msg_list':msg_list})


def msg_unread_view(request):
    msg_list = Message.objects.filter(receiver = request.user)
    msg_list2 = []
    for msg in msg_list:    
        if msg.is_read == False:
            msg_list2.append(msg)

    return render(request, 'user_notify.html',{'msg_list':msg_list2})

@receiver(post_save, sender=models.Comment) #只接收comment发来的post_save消息
def create_msg_handler(sender, instance, **kwargs):
    article = instance.post   # instance 就是发信号的对象，这里是个评论
    sender = instance.author     # 获取评论者，即消息发送者
    receiver = article.author   # 通知文章作者
    msg = Message(sender=sender, receiver=receiver, belong=instance)  # 新建消息保存
    msg.save()


    


	