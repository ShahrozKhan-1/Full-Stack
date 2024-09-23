from django.db import models


class Todo(models.Model):
    title = models.CharField(max_length=150)
    text = models.CharField(max_length=255)
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

# Create your models here.
