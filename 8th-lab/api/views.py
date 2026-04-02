from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from .models import Product, Category

# 1. Список всех товаров: /api/products/
def product_list(request):
    products = Product.objects.all()
    data = []
    for p in products:
        data.append({
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active
        })
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})

# 2. Один товар по ID: /api/products/<id>/
def product_detail(request, id):
    try:
        p = Product.objects.get(id=id)
        return JsonResponse({
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description
        }, json_dumps_params={'ensure_ascii': False})
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

# 3. Список всех категорий: /api/categories/
def category_list(request):
    categories = Category.objects.all()
    data = [{'id': c.id, 'name': c.name} for c in categories]
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})

# 4. Одна категория по ID: /api/categories/<id>/
def category_detail(request, id):
    try:
        c = Category.objects.get(id=id)
        return JsonResponse({'id': c.id, 'name': c.name}, json_dumps_params={'ensure_ascii': False})
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

# 5. Список товаров в категории: /api/categories/<id>/products/
def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
        products = category.products.all() # Используем related_name из модели
        data = [{'id': p.id, 'name': p.name, 'price': p.price} for p in products]
        return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)