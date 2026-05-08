"use client";

import Link from "next/link";
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock) return;
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const btnClass = added
    ? "bg-green-500 text-white scale-110"
    : product.inStock
    ? "bg-white text-black hover:bg-black hover:text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
    : "bg-gray-200 text-gray-400 cursor-not-allowed opacity-0 group-hover:opacity-100";

  return (
    <Link href={"/products/" + product.id} className="group block">
      <div className="relative overflow-hidden rounded-xl bg-gray-50 aspect-square mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {discount && (
          <span className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={"absolute bottom-3 right-3 p-2.5 rounded-full shadow-lg transition-all duration-200 " + btnClass}
          aria-label="Add to cart"
        >
          <ShoppingCart size={16} />
        </button>
      </div>

      <div>
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">{product.category}</p>
        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-black leading-snug mb-1.5 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex items-center gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                size={11}
                className={i < Math.floor(product.rating) ? "fill-black text-black" : "fill-gray-200 text-gray-200"}
              />
            ))}
          </div>
          <span className="text-xs text-gray-400">({product.reviewCount})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-black">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
