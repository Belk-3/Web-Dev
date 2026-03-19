# Online Store — Lab 5

Angular 17 online store extended with category hierarchy, component architecture, likes, and delete functionality.

## Tech Stack
- Angular 17 (standalone components)
- TypeScript
- CSS (no external UI library)

## Setup & Run

```bash
npm install
ng serve
```
Then open http://localhost:4200

## Build for Production

```bash
ng build
```

## Architecture

```
AppComponent
 └── ProductListComponent  (@Input products, categoryName)
      └── ProductItemComponent  (@Input product, @Output deleteProduct)
```

### Data Flow
- **Down**: `AppComponent` passes selected category's products → `ProductListComponent` → `ProductItemComponent`
- **Up**: `ProductItemComponent` emits `deleteProduct(id)` → `ProductListComponent` removes from list

## Features
- 4 categories × 5 products = 20 real Kaspi.kz products
- Category navigation with active highlight
- ❤ Like button with counter & pop animation per card
- 🗑 Delete button with confirmation dialog
- 📤 Share via WhatsApp / Telegram
- 🖼 Image gallery modal
- Responsive CSS Grid layout
- "No products" empty state after all items deleted

## Project Structure

```
src/app/
  models/
    category.model.ts      — Category interface
    product.model.ts       — Product interface + CATEGORIES + PRODUCTS data
  services/
    product.service.ts     — Provides categories and products by categoryId
  components/
    product-list/          — Receives products[], handles delete
    product-card/          — Single card with like, delete, share, gallery
  app.component.*          — Root: category nav + product-list host
```
