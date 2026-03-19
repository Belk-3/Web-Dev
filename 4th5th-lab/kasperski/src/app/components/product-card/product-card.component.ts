import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  /** True when this card is rendered inside the Favorites panel */
  @Input() isFavoritesView: boolean = false;

  @Output() deleteProduct   = new EventEmitter<number>();
  @Output() toggleFavorite  = new EventEmitter<number>();

  currentImageIndex = 0;
  showGallery       = false;
  showShareOptions  = false;
  likeAnimating     = false;
  showDeleteConfirm = false;

  // ── Favorite ──────────────────────────────────────
  onToggleFavorite(): void {
    this.toggleFavorite.emit(this.product.id);
  }

  // ── Image gallery ─────────────────────────────────
  get currentImage(): string {
    return this.product.images[this.currentImageIndex] ?? this.product.image;
  }
  prevImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
  }
  nextImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.product.images.length;
  }
  selectImage(index: number): void { this.currentImageIndex = index; }
  openGallery(): void  { this.showGallery = true; }
  closeGallery(): void { this.showGallery = false; this.currentImageIndex = 0; }

  // ── Like ──────────────────────────────────────────
  onLike(): void {
    this.product.likes++;
    this.likeAnimating = true;
    setTimeout(() => (this.likeAnimating = false), 350);
  }

  // ── Delete ────────────────────────────────────────
  requestDelete(): void  { this.showDeleteConfirm = true; }
  cancelDelete(): void   { this.showDeleteConfirm = false; }
  confirmDelete(): void  { this.deleteProduct.emit(this.product.id); }

  // ── Share ─────────────────────────────────────────
  toggleShareOptions(): void  { this.showShareOptions = !this.showShareOptions; }
  closeShareOptions(): void   { this.showShareOptions = false; }

  shareViaWhatsApp(): void {
    const msg = `Check out this product: ${this.product.name} – ${this.product.link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
    this.showShareOptions = false;
  }
  shareViaTelegram(): void {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`,
      '_blank',
    );
    this.showShareOptions = false;
  }

  // ── Helpers ───────────────────────────────────────
  formatPrice(price: number): string {
    return price.toLocaleString('ru-KZ');
  }

  getStars(): number[] {
    const stars: number[] = [];
    const r = this.product.rating;
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(r)) stars.push(1);
      else if (i === Math.ceil(r) && r % 1 !== 0) stars.push(0.5);
      else stars.push(0);
    }
    return stars;
  }

  stop(e: Event): void { e.stopPropagation(); }
}
