import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gray-950 text-white">
      <div className="absolute inset-0">
        <img
          src="https://miro.medium.com/v2/resize:fit:1200/1*Cam6MuPPs5jMx3e2dgkWJw.jpeg"
          alt="Hero"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/70 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
        <div className="max-w-xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-300 mb-4 border border-gray-600 px-3 py-1 rounded-full">
            New Season Arrivals
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Designed for
            <br />
            <span className="text-gray-300">Modern Living</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Discover our curated collection of premium essentials — from everyday wear to home accents. Quality you can feel, style you can trust.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors"
            >
              Shop Now <ArrowRight size={16} />
            </Link>
            <Link
              href="/products?category=Electronics"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Explore Electronics
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { value: "500+", label: "Products" },
              { value: "50K+", label: "Happy Customers" },
              { value: "Free", label: "Returns" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
