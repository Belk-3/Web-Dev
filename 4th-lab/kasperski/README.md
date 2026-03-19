# Online Store - Angular Application

A modern Angular application that displays a catalog of real products from [Kaspi.kz](https://kaspi.kz), Kazakhstan's largest e-commerce platform.

![Angular Version](https://img.shields.io/badge/Angular-17+-red.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## Features

- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🔍 **Search & Filter** - Search products by name, description, or category
- 📂 **Category Filtering** - Filter products by categories (Smartphones, Laptops, Gaming, etc.)
- 📊 **Sorting Options** - Sort by price, rating, or name
- ⭐ **Rating Display** - Visual star ratings with decimal support
- 🖼️ **Image Gallery** - Interactive gallery with thumbnail navigation for each product
- 📤 **Share Functionality** - Share products via WhatsApp or Telegram
- 🎨 **Modern UI** - Clean, polished design with smooth animations
- 🔄 **Grid/List View** - Toggle between grid and list layouts

## Product Catalog

The application includes **12 real products** from Kaspi.kz:

1. Apple iPhone 15 Pro Max 256GB - 699,890 ₸
2. Samsung Galaxy S24 Ultra 256GB - 599,990 ₸
3. MacBook Air 15" M3 8GB/256GB - 749,990 ₸
4. Sony PlayStation 5 Slim - 299,990 ₸
5. Apple AirPods Pro 2nd Gen - 129,990 ₸
6. iPad Pro 12.9" M2 256GB Wi-Fi - 699,990 ₸
7. Samsung Galaxy Watch 6 Classic 47mm - 149,990 ₸
8. Dyson V15 Detect Absolute - 449,990 ₸
9. Xiaomi Redmi Note 13 Pro 8GB/256GB - 129,990 ₸
10. LG OLED C4 55" 4K Smart TV - 899,990 ₸
11. Canon EOS R6 Mark II Body - 1,299,990 ₸
12. Apple Watch Series 9 45mm - 229,990 ₸

## Project Structure

```
online-store/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── product-card/          # Product card component
│   │   │   │   ├── product-card.component.ts
│   │   │   │   ├── product-card.component.html
│   │   │   │   └── product-card.component.css
│   │   │   └── product-list/          # Product list component
│   │   │       ├── product-list.component.ts
│   │   │       ├── product-list.component.html
│   │   │       └── product-list.component.css
│   │   ├── models/
│   │   │   └── product.model.ts       # Product interface & data
│   │   ├── app.component.ts           # Root component
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   └── app.routes.ts              # Routing configuration
│   ├── assets/
│   │   └── images/                    # Local images (if any)
│   ├── index.html
│   ├── main.ts                        # Application bootstrap
│   └── styles.css                     # Global styles
├── angular.json                       # Angular CLI configuration
├── package.json                       # Dependencies
├── tsconfig.json                      # TypeScript configuration
└── README.md                          # This file
```

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Angular CLI** (optional, but recommended)

```bash
# Install Angular CLI globally (optional)
npm install -g @angular/cli
```

## Installation & Setup

1. **Clone or download the project:**
   ```bash
   cd online-store
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   ng serve
   ```
   Or if you don't have Angular CLI installed globally:
   ```bash
   npx ng serve
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:4200
   ```

## Build for Production

To build the application for production:

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/online-store/` directory.

## Key Features Explained

### Product Interface

Each product follows the `Product` interface with these properties:

```typescript
interface Product {
  id: number;              // Unique identifier
  name: string;            // Product name
  description: string;     // Short description (2-3 sentences)
  price: number;           // Price in KZT
  rating: number;          // Rating from 1 to 5
  image: string;           // Main product image URL
  images: string[];        // Array of image URLs (min 3)
  link: string;            // Kaspi.kz product URL
  category?: string;       // Product category
  reviewCount?: number;    // Number of reviews
  inStock?: boolean;       // Availability status
}
```

### Share Functionality

Products can be shared via:

- **WhatsApp**: `https://wa.me/?text={encoded_message}`
- **Telegram**: `https://t.me/share/url?url={encoded_url}&text={product_name}`

### Image Gallery

Each product card features an interactive image gallery:
- Click on the product image to open the gallery
- Navigate through images using arrow buttons or thumbnails
- Image counter shows current position
- Click outside or press × to close

### Responsive Design

The application uses CSS Grid and Flexbox for responsive layouts:
- **Desktop**: 3-4 columns grid
- **Tablet**: 2 columns grid
- **Mobile**: Single column

## Technologies Used

- **Angular 17+** - Modern web framework with standalone components
- **TypeScript 5.2** - Strongly typed JavaScript
- **RxJS** - Reactive programming library
- **CSS3** - Modern styling with Grid, Flexbox, and animations
- **Angular Router** - Client-side routing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Guidelines

### Code Quality

- ✅ Strong TypeScript typing (no `any` types)
- ✅ Standalone components (Angular 17+ style)
- ✅ Proper use of Angular directives (`*ngFor`, `*ngIf`)
- ✅ Property binding `[property]` and event binding `(event)`
- ✅ Interpolation `{{ }}` for data display
- ✅ Scoped component styles

### Angular Style Guide Followed

- Component selectors use `app-` prefix
- File naming: `feature.type.ts` (e.g., `product-card.component.ts`)
- One component per file
- Small, focused components with single responsibilities

## Troubleshooting

### Common Issues

1. **Port 4200 is already in use:**
   ```bash
   ng serve --port 4201
   ```

2. **Node modules issues:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript compilation errors:**
   Make sure you're using TypeScript 5.2 or compatible version

## License

This project is for educational purposes. Product images and data are sourced from [Kaspi.kz](https://kaspi.kz).

## Author

Created as part of Angular development coursework.

## Acknowledgments

- Product data and images courtesy of [Kaspi.kz](https://kaspi.kz)
- Icons and UI inspiration from modern e-commerce platforms
- Built with the Angular framework

---

**Happy Shopping! 🛍️**
