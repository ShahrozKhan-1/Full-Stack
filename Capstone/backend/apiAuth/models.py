from django.db import models
from django.contrib.auth.models import User


class TodoList(models.Model):
    
    title = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField(auto_now_add=True)
    createdAt = models.DateTimeField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
# Create your models here.
