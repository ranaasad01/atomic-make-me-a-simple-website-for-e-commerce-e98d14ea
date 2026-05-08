"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { SortOption } from "@/lib/types";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialSearch = searchParams.get("search") || "";

  const [search, setSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sort, setSort] = useState<SortOption>("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [search, selectedCategory, sort]);

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: "featured", label: "Featured" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "name-asc", label: "Name: A–Z" },
    { value: "rating", label: "Top Rated" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">All Products</h1>
        <p className="text-gray-500 text-sm">{filtered.length} products found</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="sm:hidden flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-gray-50"
        >
          <SlidersHorizontal size={15} /> Filters
        </button>

        <div className="relative hidden sm:block">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="appearance-none pl-4 pr-9 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={14}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>
      </div>

      <div className="flex gap-8">
        <aside className={"flex-shrink-0 w-52 " + (showFilters ? "block" : "hidden sm:block")}>
          <div className="sticky top-24">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Category</h3>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className={
                      "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors " +
                      (selectedCategory === cat
                        ? "bg-black text-white font-semibold"
                        : "text-gray-600 hover:bg-gray-100")
                    }
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 sm:hidden">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Sort By</h3>
              <ul className="space-y-1">
                {sortOptions.map((o) => (
                  <li key={o.value}>
                    <button
                      onClick={() => setSort(o.value)}
                      className={
                        "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors " +
                        (sort === o.value
                          ? "bg-black text-white font-semibold"
                          : "text-gray-600 hover:bg-gray-100")
                      }
                    >
                      {o.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <div className="flex-1 min-w-0">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500 text-sm mb-6">Try adjusting your search or filter criteria.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                }}
                className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-2" />
          <div className="h-4 bg-gray-100 rounded w-32 mb-8" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[...Array(8)].map((_, i) => (
              <div key={i}>
                <div className="aspect-square bg-gray-200 rounded-xl mb-3" />
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
