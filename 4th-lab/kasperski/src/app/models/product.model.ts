export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
  category?: string;
  reviewCount?: number;
  inStock?: boolean;
}

export enum ProductCategory {
  ELECTRONICS = 'Electronics',
  SMARTPHONES = 'Smartphones',
  LAPTOPS = 'Laptops',
  TABLETS = 'Tablets',
  ACCESSORIES = 'Accessories',
  HOME_APPLIANCES = 'Home Appliances',
  GAMING = 'Gaming'
}


export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 15 Pro Max 256GB',
    description: 'The most advanced iPhone ever with A17 Pro chip, titanium design, and a powerful 48MP camera system. Experience exceptional performance and stunning photography capabilities.',
    price: 849990,
    rating: 4.9,
    image: 'images/iphone15.jpg',
    images: [
      'images/iphone15.jpg',
      'images/iphone15_2.jpg',
      'images/iphone15_3.jpg',
      'images/iphone15_1.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-natural-titanium-113138363/',
    category: 'Smartphones',
    reviewCount: 2847,
    inStock: true
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra 256GB',
    description: 'The ultimate Galaxy experience with Galaxy AI, 200MP camera, and integrated S Pen. Revolutionary AI features help you communicate, create, and search like never before.',
    price: 637000,
    rating: 4.8,
    image: 'images/samsung.jpg',
    images: [
      'images/samsung.jpg',
      'images/samsung1.jpg',
      'images/samsung2.jpg',
      'images/samsung3.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000',
    category: 'Smartphones',
    reviewCount: 1523,
    inStock: true
  },
  {
    id: 3,
    name: 'MacBook Air 15" M3 8GB/256GB',
    description: 'Supercharged by the M3 chip, the 15-inch MacBook Air delivers incredible performance and up to 18 hours of battery life in a thin and light design. Perfect for work and creativity.',
    price: 611933,
    rating: 4.9,
    image: 'images/macbook.jpg',
    images: [
      'images/macbook.jpg',
      'images/macbook1.jpg',
      'images/macbook2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2024-15-3-8-gb-ssd-256-gb-macos-mryu3-118170044/?c=750000000',
    category: 'Laptops',
    reviewCount: 892,
    inStock: true
  },
  {
    id: 4,
    name: 'Sony PlayStation 5 Slim',
    description: 'Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with haptic feedback, and an all-new generation of incredible PlayStation games.',
    price: 302510,
    rating: 4.9,
    image: 'images/ps.jpg',
    images: [
      'images/ps.jpg',
      'images/ps1.jpg',
      'images/ps2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
    category: 'Gaming',
    reviewCount: 3421,
    inStock: true
  },
  {
    id: 5,
    name: 'Apple AirPods Pro 2nd Gen',
    description: 'AirPods Pro feature up to 2x more Active Noise Cancellation, plus Adaptive Audio and Personalized Spatial Audio with dynamic head tracking for immersive sound.',
    price: 103488,
    rating: 4.8,
    image: 'images/airpods.jpg',
    images: [
      'images/airpods.jpg',
      'images/airpods1.jpg',
      'images/airpods2.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
    category: 'Accessories',
    reviewCount: 4567,
    inStock: true
  },
  {
    id: 6,
    name: 'iPad Pro 12.9" M2 256GB Wi-Fi',
    description: 'The ultimate iPad experience with the M2 chip, 12.9-inch Liquid Retina XDR display, and superfast wireless connectivity. Perfect for creative professionals.',
    price: 499900,
    rating: 4.9,
    image: 'images/ipad.jpg',
    images: [
      'images/ipad.jpg',
      'images/ipad1.jpg',
      'images/ipad2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2022-wi-fi-11-djuim-8-gb-256-gb-seryi-107276752/?c=750000000',
    category: 'Tablets',
    reviewCount: 1234,
    inStock: true
  },
  {
    id: 7,
    name: 'Samsung Galaxy Watch 6 Classic 47mm',
    description: 'Meet the watch that knows you best. Advanced sleep coaching, body composition analysis, and rotating bezel for intuitive navigation. Your wellness journey starts here.',
    price: 159944,
    rating: 4.7,
    image: 'images/watch.jpg',
    images: [
      'images/watch.jpg',
      'images/watch1.jpg',
      'images/watch2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-8-classic-46-mm-serebristyi-chernyi-142950290/?c=750000000',
    category: 'Accessories',
    reviewCount: 876,
    inStock: true
  },
  {
    id: 8,
    name: 'Dyson V15 Detect Absolute',
    description: 'The most powerful, intelligent Dyson vacuum with laser illumination that reveals microscopic dust. Up to 60 minutes of fade-free power and advanced whole-machine filtration.',
    price: 338091,
    rating: 4.8,
    image: 'images/dyson.jpg',
    images: [
      'images/dyson.jpg',
      'images/dyson1.jpg',
      'images/dyson2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-serebristyi-102269286/?c=750000000',
    category: 'Home Appliances',
    reviewCount: 654,
    inStock: true
  },
  {
    id: 9,
    name: 'Xiaomi Redmi Note 13 Pro 8GB/256GB',
    description: 'Featuring a stunning 200MP main camera, 120Hz AMOLED display, and 67W turbo charging. Exceptional value with flagship-level features at an affordable price.',
    price: 150721,
    rating: 4.6,
    image: 'images/redmi.jpg',
    images: [
      'images/redmi.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-8-gb-256-gb-chernyi-122771656/?c=750000000',
    category: 'Smartphones',
    reviewCount: 2134,
    inStock: true
  },
  {
    id: 10,
    name: 'LG OLED C4 55" 4K Smart TV',
    description: 'Experience perfect black and infinite contrast with self-lit OLED pixels. α9 AI Processor 4K Gen7 delivers stunning picture quality and immersive sound.',
    price: 354990,
    rating: 4.9,
    image: 'images/lg.jpg',
    images: [
      'images/lg.jpg',
      'images/lg1.jpg',
      'images/lg2.jpg',
      'images/lg3 .jpg'
    ],
    link: 'https://kaspi.kz/shop/p/lg-55nano80a6b-140-sm-chernyi-138848836/?c=750000000',
    category: 'Home Appliances',
    reviewCount: 432,
    inStock: true
  },
  {
    id: 11,
    name: 'Canon EOS R6 Mark II Body',
    description: 'Professional full-frame mirrorless camera with 24.2MP sensor, 40fps continuous shooting, and advanced autofocus. Perfect for photography and video professionals.',
    price: 912373,
    rating: 4.9,
    image: 'images/canon.jpg',
    images: [
      'images/canon.jpg',
      'images/canon1.jpg',
      'images/canon2.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/canon-eos-r6-mark-ii-body-108430990/?c=750000000',
    category: 'Electronics',
    reviewCount: 198,
    inStock: true
  },
  {
    id: 12,
    name: 'Apple Watch Series 9 45mm',
    description: 'Smarter, brighter, and more powerful. The S9 SiP enables a magical new way to interact with your watch without touching the screen. Advanced health and fitness features.',
    price: 179305,
    rating: 4.8,
    image: 'images/apple.jpg',
    images: [
      'images/apple.jpg',
      'images/apple1.jpg',
      'images/apple2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000  ',
    category: 'Accessories',
    reviewCount: 1567,
    inStock: true
  }
];
