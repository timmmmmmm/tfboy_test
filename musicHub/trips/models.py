from django.db import models
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.models import AbstractUser,BaseUserManager
from django.conf import settings
from django.db.models.signals import post_save
from django.contrib.auth.models import UserManager
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.core.validators import MinLengthValidator

class Post(models.Model):
    author = models.ForeignKey(User,on_delete=models.CASCADE,default=1) 
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=100,null=True,blank=True)
    content = models.TextField(validators=[MinLengthValidator(50)])
    category = models.CharField(max_length=16) 
    created_at = models.DateTimeField(auto_now_add=True)
    document = models.FileField(upload_to='midi',null=True,blank=True)
    post_pic = models.ImageField(upload_to='post_pic',null=True,blank=True)

class Profile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    nickname = models.CharField(('暱稱'), max_length=30, blank=True)
    signature = models.CharField(max_length=50, blank=True, null=True, verbose_name="簽名")
    avatar = models.ImageField(upload_to='avatar',null=True,default='default.jpg',)
    def __unicode__(self):
        return self.user.username

class Comment(models.Model):
    post = models.ForeignKey('trips.Post', on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User,on_delete=models.CASCADE,default=1) 
    text = models.TextField()
    created_date =models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text

class Message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sender_message', verbose_name='發送者')
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='receiver_message', verbose_name='接收者')
    create_date = models.DateTimeField('創建時間', auto_now_add = True)
    belong = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name='comment_messages', verbose_name='所屬評論')
    is_read = models.BooleanField('是否已读', default = False)


    class Meta:
        verbose_name = '消息通知'
        verbose_name_plural = verbose_name
        ordering = ['-create_date']

    def mark_read(self):
        self.is_read = True
        self.save(update_fields=['is_read'])

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
 
@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
