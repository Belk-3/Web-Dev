import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, PRODUCTS } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating-desc' | 'name-asc';
type CategoryFilter = 'all' | string;

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  allProducts: Product[] = PRODUCTS;
  filteredProducts: Product[] = [];
  currentSort: SortOption = 'default';
  currentCategory: CategoryFilter = 'all';
  searchQuery: string = '';
  categories: string[] = [];
  isLoading: boolean = true;
  viewMode: 'grid' | 'list' = 'grid';
  
  ngOnInit(): void {
    setTimeout(() => {
      this.filteredProducts = [...this.allProducts];
      this.extractCategories();
      this.isLoading = false;
    }, 500);
  }

  private extractCategories(): void {
    const categorySet = new Set<string>();
    this.allProducts.forEach(product => {
      if (product.category) {
        categorySet.add(product.category);
      }
    });
    this.categories = Array.from(categorySet).sort();
  }

  private applyFilters(): void {
    let result = [...this.allProducts];

    if (this.currentCategory !== 'all') {
      result = result.filter(p => p.category === this.currentCategory);
    }

    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        (p.category && p.category.toLowerCase().includes(query))
      );
    }

    switch (this.currentSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    this.filteredProducts = result;
  }

  onSortChange(sortValue: string): void {
    this.currentSort = sortValue as SortOption;
    this.applyFilters();
  }

  onCategoryChange(category: string): void {
    this.currentCategory = category;
    this.applyFilters();
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;
    this.applyFilters();
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.applyFilters();
  }

  toggleViewMode(): void {
    this.viewMode = this.viewMode === 'grid' ? 'list' : 'grid';
  }

  resetFilters(): void {
    this.currentSort = 'default';
    this.currentCategory = 'all';
    this.searchQuery = '';
    this.applyFilters();
  }

  getCategoryCount(category: string): number {
    return this.allProducts.filter(p => p.category === category).length;
  }

  get totalProducts(): number {
    return this.allProducts.length;
  }

  get filteredCount(): number {
    return this.filteredProducts.length;
  }

  get hasActiveFilters(): boolean {
    return this.currentCategory !== 'all' || 
           this.searchQuery.trim() !== '' || 
           this.currentSort !== 'default';
  }

  get averageRating(): number {
    if (this.allProducts.length === 0) return 0;
    const sum = this.allProducts.reduce((acc, p) => acc + p.rating, 0);
    return Math.round((sum / this.allProducts.length) * 10) / 10;
  }

  get priceRange(): { min: number; max: number } {
    if (this.allProducts.length === 0) return { min: 0, max: 0 };
    const prices = this.allProducts.map(p => p.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  }

  getSortLabel(sortValue: string): string {
    const labels: Record<string, string> = {
      'default': 'По умолчанию',
      'price-asc': 'Цена: по возрастанию',
      'price-desc': 'Цена: по убыванию',
      'rating-desc': 'Рейтинг: высокий → низкий',
      'name-asc': 'Название: А → Я'
    };
    return labels[sortValue] || sortValue;
  }
}
