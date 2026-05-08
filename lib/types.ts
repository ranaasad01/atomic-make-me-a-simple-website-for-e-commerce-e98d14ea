export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured: boolean;
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type SortOption = "featured" | "price-asc" | "price-desc" | "name-asc" | "rating";
