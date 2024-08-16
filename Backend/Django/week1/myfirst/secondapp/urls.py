from . import views
from django.urls import path

urlpatterns = [
    path('first-endpoint/', views.first),
    path('first-endpoint/<int:week>', views.third),
    path('first-endpoint/<int:week>/<str:days>', views.fourth),
    path('second-endpoint/', views.second),
]
    