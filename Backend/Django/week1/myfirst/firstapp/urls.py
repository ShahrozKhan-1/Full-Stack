from . import views
from django.urls import path

urlpatterns = [
    path('first-endpoint/', views.thirdLogic),
    path('first-endpoint/<month>', views.firstLogic),
    path('first-endpoint/<month>/<int:week>', views.fourthLogic),
    path('second-endpoint/', views.secondLogic),
]
