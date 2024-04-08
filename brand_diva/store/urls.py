from django.urls import path
from . import views

urlpatterns = [
    path('', views.store, name='store'),
    path('cart/', views.cart, name='cart'),
    path('about-us/', views.about_us, name='about_us'),
    path('main/', views.main, name='main'),
]