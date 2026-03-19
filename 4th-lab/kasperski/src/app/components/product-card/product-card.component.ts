import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  currentImageIndex: number = 0;
  showGallery: boolean = false;
  showShareOptions: boolean = false;

  get currentImage(): string {
    return this.product.images[this.currentImageIndex] || this.product.image;
  }

  previousImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

  selectImage(index: number): void {
    this.currentImageIndex = index;
  }

  toggleGallery(): void {
    this.showGallery = !this.showGallery;
    if (this.showGallery) {
      this.currentImageIndex = 0;
    }
  }

  closeGallery(): void {
    this.showGallery = false;
    this.currentImageIndex = 0;
  }

  toggleShareOptions(): void {
    this.showShareOptions = !this.showShareOptions;
  }

  closeShareOptions(): void {
    this.showShareOptions = false;
  }

  getWhatsAppShareUrl(): string {
    const message = `Check out this product: ${this.product.name} - ${this.product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }

  getTelegramShareUrl(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
  }

  shareViaWhatsApp(): void {
    window.open(this.getWhatsAppShareUrl(), '_blank');
    this.showShareOptions = false;
  }

  shareViaTelegram(): void {
    window.open(this.getTelegramShareUrl(), '_blank');
    this.showShareOptions = false;
  }

  openProductLink(): void {
    window.open(this.product.link, '_blank');
  }

  getStarArray(): number[] {
    const stars: number[] = [];
    const rating = this.product.rating;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(1);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(0.5);
      } else {
        stars.push(0);
      }
    }
    
    return stars;
  }

  formatPrice(price: number): string {
    return price.toLocaleString('ru-KZ');
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
