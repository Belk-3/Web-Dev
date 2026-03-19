import { Injectable } from '@angular/core';
import { Product, PRODUCTS, CATEGORIES } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

  getCategories(): Category[] {
    return CATEGORIES;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return PRODUCTS
      .filter(p => p.categoryId === categoryId)
      .map(p => ({ ...p }));   // return fresh copies so mutation is isolated
  }
}
