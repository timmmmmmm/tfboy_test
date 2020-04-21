"""musicHub URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.urls import path
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.conf.urls.static import static
from django.conf import settings
from mysite.views import *
from trips import views 
from database import views as db
from mysite import views as my


import mysite.views

urlpatterns = [

    path(r'', mysite.views.index, name="index"),
    path(r'admin/', admin.site.urls),


    path(r'produce/', mysite.views.produce, name="produce"),
    path(r'intro/', mysite.views.intro, name="intro"),

    path('database/', db.database, name="database"),    
    path('generate/', db.generate, name="generate"),

    path('forum/', views.forum, name='forum'),
    path('regist/', views.regist, name='regist'),
    path('login/',views.signin, name='login'),
    path('search/',views.search, name='search'),
    path('post_list/',views.post_list, name='post_list'),
    path('userinfo/',views.userinfo, name='userinfo'),
    path('update_profile/',views.update_profile, name='update_profile'),
    path('logout/',views.logout, name='logout'),
    path('message/all',views.msg_all_view, name='msg_all_view'),  # 所有消息
    path('post_create/',views.post_create, name='post_create'),
    path('post/<int:id>/', views.blog_detail, name='blog_detail'),
    path('post/<int:id>/edit/', views.post_edit, name='post_edit'),
    path('post/<int:id>/del/', views.del_post, name='del_post'),
    path('blog/blog_symphony/',views.blog_symphony, name='blog_symphony'),
    path('blog/blog_sonata/',views.blog_sonata, name='blog_sonata'),
    path('blog/blog_chorus/',views.blog_chorus, name='blog_chorus'),
    path('blog/blog_opera/',views.blog_opera, name='blog_opera'),
    path('blog/blog_concerto/',views.blog_concerto, name='blog_concerto'),
    path('blog/blog_modern/',views.blog_modern, name='blog_modern'),
    path('blog/blog_chat/',views.blog_chat, name='blog_chat'),
    path('blog/blog_trade/',views.blog_trade, name='blog_trade'),
    path('blog/blog_others/',views.blog_others, name='blog_others'),
    url(r'^post_list/(\d+)/$',views.post_list,name='post_list'),
    url(r'^blog/blog_symphony/(\d+)/$',views.blog_symphony,name='blog_Symphony'),
    url(r'^blog/blog_sonata/(\d+)/$',views.blog_sonata,name='blog_sonata'),
    url(r'^blog/blog_chorus/(\d+)/$',views.blog_chorus,name='blog_chorus'),
    url(r'^blog/blog_opera/(\d+)/$',views.blog_opera,name='blog_opera'),
    url(r'^blog/blog_concerto/(\d+)/$',views.blog_concerto,name='blog_concerto'),
    url(r'^blog/blog_modern/(\d+)/$',views.blog_modern,name='blog_modern'),
    url(r'^blog/blog_chat/(\d+)/$',views.blog_chat,name='blog_chat'),
    url(r'^blog/blog_trade/(\d+)/$',views.blog_trade,name='blog_trade'),
    url(r'^blog/blog_others/(\d+)/$',views.blog_others,name='blog_others'),
    path('password_change/done/', auth_views.PasswordChangeDoneView.as_view(template_name='password_change_done.html'), 
        name='password_change_done'),

    path('password_change/', auth_views.PasswordChangeView.as_view(template_name='password_change.html'), 
        name='password_change'),

    path('password_reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='password_reset_done.html'),
     name='password_reset_done'),

    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name='password_reset_confirm.html'), name='password_reset_confirm'),
    path('password_reset/', auth_views.PasswordResetView.as_view(template_name='password_reset_form.html'), name='password_reset'),
    
    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='password_reset_complete.html'),
     name='password_reset_complete'),
    ]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
