"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight, Tag } from 'lucide-react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  const shipping = subtotal >= 75 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingCart size={32} className="text-gray-400" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h1>
        <p className="text-gray-500 mb-8">Looks like you haven&apos;t added anything yet.</p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors"
        >
          Start Shopping <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="flex gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <Link href={"/products/" + item.product.id} className="flex-shrink-0">
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-50">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                      {item.product.category}
                    </p>
                    <Link href={"/products/" + item.product.id}>
                      <h3 className="text-sm font-semibold text-gray-900 hover:text-black leading-snug">
                        {item.product.name}
                      </h3>
                    </Link>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="flex-shrink-0 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="px-3 py-1.5 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="px-3 py-1.5 text-sm font-semibold min-w-[2.5rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="px-3 py-1.5 text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-bold text-black">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    {item.quantity > 1 && (
                      <p className="text-xs text-gray-400">${item.product.price} each</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
            <h2 className="text-lg font-bold text-gray-900 mb-5">Order Summary</h2>

            {/* Promo code */}
            <div className="flex gap-2 mb-5">
              <div className="relative flex-1">
                <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Promo code"
                  className="w-full pl-8 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <button className="px-4 py-2.5 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors">
                Apply
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
                <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className={"font-medium " + (shipping === 0 ? "text-green-600" : "text-gray-900")}>
                  {shipping === 0 ? "Free" : "$" + shipping.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (8%)</span>
                <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
              </div>
              {subtotal < 75 && (
                <p className="text-xs text-gray-500 bg-gray-100 rounded-lg px-3 py-2">
                  Add ${(75 - subtotal).toFixed(2)} more for free shipping
                </p>
              )}
            </div>

            <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between items-center mb-5">
              <span className="font-bold text-gray-900">Total</span>
              <span className="text-xl font-bold text-black">${total.toFixed(2)}</span>
            </div>

            <Link
              href="/checkout"
              className="block w-full text-center bg-black text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors mb-3"
            >
              Proceed to Checkout
            </Link>
            <Link
              href="/products"
              className="block w-full text-center text-gray-600 py-3 text-sm font-medium hover:text-black transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
