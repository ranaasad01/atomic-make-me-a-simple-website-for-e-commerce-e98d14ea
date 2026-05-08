"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { getProductById, getRelatedProducts } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { ShoppingCart, Star, Check, ArrowLeft, Minus, Plus, Truck, RotateCcw, Shield } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : params.id?.[0] ?? "";
  const product = getProductById(id);

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-black transition-colors">Products</Link>
        <span>/</span>
        <Link href={"/products?category=" + encodeURIComponent(product.category)} className="hover:text-black transition-colors">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium truncate max-w-[200px]">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Images */}
        <div className="space-y-3">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50">
            <img
              src={product.images[selectedImage] || product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={"w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors " +
                    (selectedImage === i ? "border-black" : "border-transparent hover:border-gray-300")}
                >
                  <img src={img} alt={"View " + (i + 1)} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <div className="mb-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mt-3 mb-3">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  size={15}
                  className={i < Math.floor(product.rating) ? "fill-black text-black" : "fill-gray-200 text-gray-200"}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
            <span className="text-sm text-gray-400">({product.reviewCount} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-bold text-black">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
            )}
            {discount && (
              <span className="bg-black text-white text-xs font-bold px-2.5 py-1 rounded-full">
                Save {discount}%
              </span>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">{product.longDescription}</p>

          {/* Stock status */}
          <div className="flex items-center gap-2 mb-6">
            <div className={"w-2 h-2 rounded-full " + (product.inStock ? "bg-green-500" : "bg-red-400")} />
            <span className={"text-sm font-medium " + (product.inStock ? "text-green-700" : "text-red-600")}>
              {product.inStock ? "In Stock — Ready to ship" : "Out of Stock"}
            </span>
          </div>

          {/* Quantity + Add to cart */}
          {product.inStock && (
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 py-3 text-sm font-semibold min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={"flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all " +
                  (added
                    ? "bg-green-500 text-white"
                    : "bg-black text-white hover:bg-gray-800")}
              >
                {added ? (
                  <><Check size={16} /> Added to Cart</>
                ) : (
                  <><ShoppingCart size={16} /> Add to Cart</>
                )}
              </button>
            </div>
          )}

          <Link
            href="/cart"
            className="block w-full text-center py-3.5 border-2 border-black text-black font-semibold text-sm rounded-xl hover:bg-black hover:text-white transition-colors mb-8"
          >
            View Cart
          </Link>

          {/* Perks */}
          <div className="border-t border-gray-100 pt-6 space-y-3">
            {[
              { icon: Truck, text: "Free shipping on orders over $75" },
              { icon: RotateCcw, text: "Free 30-day returns" },
              { icon: Shield, text: "Secure, encrypted checkout" },
            ].map((perk) => (
              <div key={perk.text} className="flex items-center gap-3 text-sm text-gray-600">
                <perk.icon size={16} className="text-gray-400 flex-shrink-0" />
                {perk.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="border-t border-gray-100 pt-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
