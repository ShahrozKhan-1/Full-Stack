from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from .models import Book



# Create your views here.
@require_http_methods(["GET","POST"])
@csrf_exempt
def books(request):
    if request.method == 'GET':
        book_details = Book.objects.order_by('-price')
        return HttpResponse(book_details)
    
    if request.method == 'POST':
        return HttpResponse("this is POST method")