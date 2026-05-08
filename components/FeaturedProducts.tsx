import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Handpicked for you</p>
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
        </div>
        <Link
          href="/products"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-black hover:gap-3 transition-all"
        >
          View all <ArrowRight size={15} />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-black border border-black px-6 py-2.5 rounded-full hover:bg-black hover:text-white transition-colors"
        >
          View all products <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
