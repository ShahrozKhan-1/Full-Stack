from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=50)
    price = models.IntegerField()
    total_price = models.DecimalField(max_digits=5, decimal_places=2)
    best_selling = models.BooleanField(default=False)
    release_date = models.DateTimeField(auto_now=True)
    description = models.TextField(default='description') 