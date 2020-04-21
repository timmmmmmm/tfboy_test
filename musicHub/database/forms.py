from django import forms
from .models import Generate

class GenerateForm(forms.ModelForm):
	class Meta:
		model = Generate
		fields = [
		'musicfile'
		]
			


