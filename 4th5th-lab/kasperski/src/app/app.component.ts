import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from './models/category.model';
import { Product, PRODUCTS, CATEGORIES } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // ── Master product list (source of truth) ─────────────────────────────
  allProducts: Product[] = PRODUCTS.map(p => ({ ...p }));

  // ── Categories ────────────────────────────────────────────────────────
  categories: Category[] = CATEGORIES;
  selectedCategory: Category | null = null;

  // ── Favorites ─────────────────────────────────────────────────────────
  favorites: Product[] = [];

  // ── Derived: products shown for selected category ─────────────────────
  get selectedProducts(): Product[] {
    if (!this.selectedCategory) return [];
    return this.allProducts.filter(p => p.categoryId === this.selectedCategory!.id);
  }

  // ── Category selection ────────────────────────────────────────────────
  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }

  isSelected(category: Category): boolean {
    return this.selectedCategory?.id === category.id;
  }

  // ── Toggle favorite — all logic lives here (per lab requirement) ───────
  toggleFavorite(productId: number): void {
    const product = this.allProducts.find(p => p.id === productId);
    if (!product) return;
    product.isFavorite = !product.isFavorite;
    this.favorites = this.allProducts.filter(p => p.isFavorite);
  }

  // ── Remove from favorites when card deleted from favorites panel ───────
  onDeleteFromFavorites(productId: number): void {
    const product = this.allProducts.find(p => p.id === productId);
    if (product) product.isFavorite = false;
    this.favorites = this.allProducts.filter(p => p.isFavorite);
  }

  trackById(_index: number, product: Product): number {
    return product.id;
  }
}
