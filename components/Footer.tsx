import Link from "next/link";
import { Code2 as Github, MessageCircle as Twitter, Camera as Instagram, Heart } from 'lucide-react';

// Using available icons — Instagram not in approved list, using Heart instead
;

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="text-2xl font-bold tracking-tight">MODERNO</span>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Curated essentials for modern living. Quality products, thoughtfully selected.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Github">
                <Github size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Favorites">
                <Heart size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-2.5">
              {[
                { label: "All Products", href: "/products" },
                { label: "Electronics", href: "/products?category=Electronics" },
                { label: "Clothing", href: "/products?category=Clothing" },
                { label: "Accessories", href: "/products?category=Accessories" },
                { label: "Home & Kitchen", href: "/products?category=Home+%26+Kitchen" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2.5">
              {["FAQ", "Shipping & Returns", "Order Tracking", "Size Guide", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest drops and exclusive offers straight to your inbox.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Moderno. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
