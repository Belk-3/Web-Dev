import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnChanges {
  @Input()  products: Product[]  = [];
  @Input()  categoryName: string = '';

  // Bubble events up to AppComponent
  @Output() toggleFavorite = new EventEmitter<number>();
  @Output() deleteProduct  = new EventEmitter<number>();

  displayedProducts: Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      // Sync displayed list with master (preserves isFavorite state)
      this.displayedProducts = [...this.products];
    }
  }

  onToggleFavorite(productId: number): void {
    this.toggleFavorite.emit(productId);
  }

  onDelete(productId: number): void {
    this.displayedProducts = this.displayedProducts.filter(p => p.id !== productId);
  }

  trackById(_index: number, product: Product): number {
    return product.id;
  }
}
