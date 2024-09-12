from django.urls import path
from . import views

urlpatterns = [
    path('book/<int:book_id>/', views.book_detail),
    
    path('categories/', views.category_list),
    
    path('category/<int:category_id>/', views.category_books),
    
    path('register/', views.register),
    
    path('cart/', views.cart),
    
    path('checkout/', views.checkout),
]