from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from trips.models import Profile,Post,Comment





class UserForm(UserChangeForm):
    

    class Meta:
        model = User
        fields = (
            'email',
            'username'
        )


class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ('nickname', 'signature', 'avatar')


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content', 'category' , 'post_pic' , 'document' , 'subtitle']

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('text',)