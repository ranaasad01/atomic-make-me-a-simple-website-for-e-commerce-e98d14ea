import { Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Leather Watch",
    price: 189,
    originalPrice: 249,
    description: "Elegant timepiece with genuine leather strap",
    longDescription:
      "Crafted with precision and style, this minimalist leather watch features a clean dial design, genuine Italian leather strap, and Swiss quartz movement. Water-resistant up to 30 meters. Perfect for both casual and formal occasions.",
    category: "Accessories",
    image: "https://www.peugeotwatches.com/cdn/shop/products/2059G-FV.jpg?v=1633106380&width=1500",
    images: [
      "https://www.peugeotwatches.com/cdn/shop/products/2059G-FV.jpg?v=1633106380&width=1500",
      "/images/leather-watch-detail.jpg",
      "/images/leather-watch-side.jpg",
    ],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    featured: true,
    tags: ["watch", "leather", "minimalist", "accessories"],
  },
  {
    id: "2",
    name: "Wireless Noise-Cancelling Headphones",
    price: 299,
    originalPrice: 399,
    description: "Premium audio with active noise cancellation",
    longDescription:
      "Experience studio-quality sound with these over-ear wireless headphones. Features 40-hour battery life, active noise cancellation, and foldable design for easy travel. Compatible with all Bluetooth devices.",
    category: "Electronics",
    image: "https://m.media-amazon.com/images/I/51f7KKP25PL._AC_UF894,1000_QL80_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/51f7KKP25PL._AC_UF894,1000_QL80_.jpg",
      "/images/headphones-side-view.jpg",
      "/images/headphones-folded.jpg",
    ],
    rating: 4.9,
    reviewCount: 312,
    inStock: true,
    featured: true,
    tags: ["headphones", "wireless", "audio", "electronics"],
  },
  {
    id: "3",
    name: "Linen Blend Oversized Tee",
    price: 45,
    description: "Breathable everyday essential in relaxed fit",
    longDescription:
      "Made from a premium linen-cotton blend, this oversized tee offers unmatched breathability and comfort. Pre-washed for a soft feel from day one. Available in multiple neutral tones.",
    category: "Clothing",
    image: "https://www.madewell.com/images/NR357_NA0054_m?wid=560&hei=712&fmt=jpeg&fit=crop&qlt=75",
    images: [
      "https://www.madewell.com/images/NR357_NA0054_m?wid=560&hei=712&fmt=jpeg&fit=crop&qlt=75",
      "/images/linen-tee-back.jpg",
    ],
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    featured: true,
    tags: ["tshirt", "linen", "casual", "clothing"],
  },
  {
    id: "4",
    name: "Ceramic Pour-Over Coffee Set",
    price: 78,
    originalPrice: 95,
    description: "Artisan brewing kit for the perfect cup",
    longDescription:
      "This handcrafted ceramic pour-over set includes a dripper, carafe, and two mugs. Each piece is kiln-fired for durability and features a matte glaze finish. Elevate your morning ritual.",
    category: "Home & Kitchen",
    image: "https://m.media-amazon.com/images/I/7159+ELcEOL._AC_UF894,1000_QL80_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/7159+ELcEOL._AC_UF894,1000_QL80_.jpg",
      "/images/coffee-set-detail.jpg",
    ],
    rating: 4.7,
    reviewCount: 56,
    inStock: true,
    featured: true,
    tags: ["coffee", "ceramic", "kitchen", "home"],
  },
  {
    id: "5",
    name: "Slim Fit Chino Trousers",
    price: 89,
    description: "Versatile trousers for work and weekend",
    longDescription:
      "Cut from stretch-cotton twill, these slim-fit chinos move with you all day. Features a mid-rise waist, tapered leg, and two front pockets. Machine washable and wrinkle-resistant.",
    category: "Clothing",
    image: "https://m.media-amazon.com/images/I/71hvGkBMFNL._AC_UF894,1000_QL80_.jpg",
    images: ["https://m.media-amazon.com/images/I/71hvGkBMFNL._AC_UF894,1000_QL80_.jpg"],
    rating: 4.5,
    reviewCount: 143,
    inStock: true,
    featured: false,
    tags: ["trousers", "chino", "slim", "clothing"],
  },
  {
    id: "6",
    name: "Portable Bluetooth Speaker",
    price: 129,
    originalPrice: 159,
    description: "360° sound in a compact waterproof design",
    longDescription:
      "Take your music anywhere with this IPX7 waterproof Bluetooth speaker. Delivers rich 360° sound with deep bass, 20-hour playtime, and a built-in microphone for hands-free calls.",
    category: "Electronics",
    image: "https://m.media-amazon.com/images/I/71hvGkBMFNL._AC_UF894,1000_QL80_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71hvGkBMFNL._AC_UF894,1000_QL80_.jpg",
      "/images/speaker-top-view.jpg",
    ],
    rating: 4.7,
    reviewCount: 201,
    inStock: true,
    featured: false,
    tags: ["speaker", "bluetooth", "portable", "electronics"],
  },
  {
    id: "7",
    name: "Genuine Leather Bifold Wallet",
    price: 65,
    description: "Slim profile with RFID blocking technology",
    longDescription:
      "Handstitched from full-grain leather, this bifold wallet features 6 card slots, a bill compartment, and RFID-blocking lining to protect your cards. Develops a beautiful patina over time.",
    category: "Accessories",
    image: "https://hilason.com/cdn/shop/files/147522-I.jpg?v=1762707190",
    images: [
      "https://hilason.com/cdn/shop/files/147522-I.jpg?v=1762707190",
      "/images/wallet-open-view.jpg",
    ],
    rating: 4.6,
    reviewCount: 78,
    inStock: true,
    featured: false,
    tags: ["wallet", "leather", "accessories", "rfid"],
  },
  {
    id: "8",
    name: "Scented Soy Candle Set",
    price: 42,
    description: "Hand-poured with natural essential oils",
    longDescription:
      "Set of three hand-poured soy wax candles in amber glass jars. Scents include Cedarwood & Vanilla, Sea Salt & Sage, and Lavender & Eucalyptus. Each candle burns for up to 50 hours.",
    category: "Home & Kitchen",
    image: "https://brooksbrothers.bynder.com/match/WebName/MS01285_BLACK/ULTIMATE_MERINO_WOOL_CREWNECK_SWEATER_BLACK",
    images: ["https://brooksbrothers.bynder.com/match/WebName/MS01285_BLACK/ULTIMATE_MERINO_WOOL_CREWNECK_SWEATER_BLACK"],
    rating: 4.9,
    reviewCount: 167,
    inStock: true,
    featured: false,
    tags: ["candle", "soy", "home", "scented"],
  },
  {
    id: "9",
    name: "Merino Wool Crew Neck Sweater",
    price: 135,
    originalPrice: 175,
    description: "Ultra-soft fine-knit for all-season wear",
    longDescription:
      "Knitted from 100% extra-fine merino wool, this crew neck sweater is naturally temperature-regulating, odor-resistant, and incredibly soft against the skin. A wardrobe staple in classic colors.",
    category: "Clothing",
    image: "https://i.rtings.com/assets/pages/ATQ9oxjh/best-tkl-keyboards-20250404-medium.jpg?format=auto",
    images: ["https://i.rtings.com/assets/pages/ATQ9oxjh/best-tkl-keyboards-20250404-medium.jpg?format=auto"],
    rating: 4.8,
    reviewCount: 95,
    inStock: true,
    featured: true,
    tags: ["sweater", "merino", "wool", "clothing"],
  },
  {
    id: "10",
    name: "Mechanical Keyboard TKL",
    price: 149,
    description: "Tenkeyless layout with tactile switches",
    longDescription:
      "A premium tenkeyless mechanical keyboard with Cherry MX Brown switches for satisfying tactile feedback. Features PBT double-shot keycaps, USB-C connectivity, and a compact aluminum frame.",
    category: "Electronics",
    image: "https://i.rtings.com/assets/pages/ATQ9oxjh/best-tkl-keyboards-20250404-medium.jpg?format=auto",
    images: [
      "https://i.rtings.com/assets/pages/ATQ9oxjh/best-tkl-keyboards-20250404-medium.jpg?format=auto",
      "/images/keyboard-side-profile.jpg",
    ],
    rating: 4.7,
    reviewCount: 234,
    inStock: true,
    featured: false,
    tags: ["keyboard", "mechanical", "electronics", "gaming"],
  },
  {
    id: "11",
    name: "Stainless Steel Water Bottle",
    price: 38,
    description: "Double-wall insulated, keeps drinks cold 24h",
    longDescription:
      "This 32oz stainless steel water bottle features vacuum insulation that keeps beverages cold for 24 hours or hot for 12 hours. BPA-free, leak-proof lid, and fits most car cup holders.",
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/517NxAIGK9L.jpg",
    images: ["https://m.media-amazon.com/images/I/517NxAIGK9L.jpg"],
    rating: 4.5,
    reviewCount: 312,
    inStock: true,
    featured: false,
    tags: ["bottle", "water", "insulated", "accessories"],
  },
  {
    id: "12",
    name: "Bamboo Cutting Board Set",
    price: 55,
    originalPrice: 70,
    description: "Eco-friendly kitchen essential, set of 3",
    longDescription:
      "This set of three bamboo cutting boards comes in small, medium, and large sizes. Naturally antimicrobial, knife-friendly, and sustainably sourced. Includes a juice groove on the large board.",
    category: "Home & Kitchen",
    image: "https://m.media-amazon.com/images/I/81RxQVl0guL.jpg",
    images: ["https://m.media-amazon.com/images/I/81RxQVl0guL.jpg"],
    rating: 4.6,
    reviewCount: 88,
    inStock: false,
    featured: false,
    tags: ["cutting board", "bamboo", "kitchen", "eco"],
  },
];

export const categories = ["All", "Electronics", "Clothing", "Accessories", "Home & Kitchen"];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}
