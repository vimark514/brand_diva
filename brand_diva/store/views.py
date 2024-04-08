from django.shortcuts import render

# Create your views here.
def store(request):
    context = {}
    return render(request, 'store/index.html', context) 

def cart(request):
    context = {}
    return render(request, 'store/cart.html', context)

def about_us(request):
    context = {}
    return render(request, 'store/about.html', context)

def main(request):
    context = {}
    return render(request, 'store/main.html', context)