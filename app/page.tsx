export const dynamic = "force-dynamic";
import HeroBanner from "@/components/HeroBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import Link from "next/link";
import { ArrowRight, Truck, RotateCcw, Shield, Star } from 'lucide-react';

export default function HomePage() {
  const categories = [
    { name: "Electronics", slug: "Electronics", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Arduino_ftdi_chip-1.jpg", count: 3 },
    { name: "Clothing", slug: "Clothing", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Arduino_ftdi_chip-1.jpg", count: 3 },
    { name: "Accessories", slug: "Accessories", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Arduino_ftdi_chip-1.jpg", count: 3 },
    { name: "Home & Kitchen", slug: "Home+%26+Kitchen", image: "https://www.have-clothes-will-travel.com/wp-content/uploads/2019/05/qtq80-7bsDUb.jpeg", count: 3 },
  ];

  const perks = [
    { icon: Truck, title: "Free Shipping", desc: "On all orders over $75" },
    { icon: RotateCcw, title: "Easy Returns", desc: "30-day hassle-free returns" },
    { icon: Shield, title: "Secure Checkout", desc: "Your data is always protected" },
    { icon: Star, title: "Top Rated", desc: "Loved by 50,000+ customers" },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Verified Buyer",
      text: "The quality of everything I've ordered has been exceptional. Fast shipping and beautiful packaging too.",
      rating: 5,
    },
    {
      name: "James T.",
      role: "Verified Buyer",
      text: "I bought the leather watch and it's even better in person. Exactly what I was looking for — minimal and elegant.",
      rating: 5,
    },
    {
      name: "Priya K.",
      role: "Verified Buyer",
      text: "Great selection of products. The merino sweater is incredibly soft and the sizing was perfect.",
      rating: 5,
    },
  ];

  return (
    <>
      <HeroBanner />

      {/* Perks bar */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk) => (
              <div key={perk.title} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                  <perk.icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{perk.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Browse by category</p>
          <h2 className="text-3xl font-bold text-gray-900">Shop the Collection</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={"/products?category=" + cat.slug}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-100"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-base">{cat.name}</h3>
                <p className="text-gray-300 text-xs mt-0.5">{cat.count} products</p>
              </div>
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={14} className="text-white" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">What customers say</p>
            <h2 className="text-3xl font-bold">Loved by Thousands</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-900 rounded-2xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={14} className="fill-white text-white" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-black rounded-3xl px-8 py-14 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Limited time offer</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get 20% Off Your First Order</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Sign up for our newsletter and receive an exclusive discount code for your first purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white transition-colors"
              />
              <button className="px-7 py-3 bg-white text-black font-semibold text-sm rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap">
                Claim Discount
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
