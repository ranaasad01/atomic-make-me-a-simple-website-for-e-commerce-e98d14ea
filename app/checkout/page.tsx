"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Check, ArrowLeft, Lock, CreditCard, Truck } from 'lucide-react';

type Step = "shipping" | "payment" | "confirmed";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<Step>("shipping");
  const [shippingData, setShippingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });
  const [paymentData, setPaymentData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const shipping = subtotal >= 75 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("confirmed");
    clearCart();
  };

  const updateShipping = (field: string, value: string) => {
    setShippingData((prev) => ({ ...prev, [field]: value }));
  };

  const updatePayment = (field: string, value: string) => {
    setPaymentData((prev) => ({ ...prev, [field]: value }));
  };

  if (step === "confirmed") {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={36} className="text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Order Confirmed!</h1>
        <p className="text-gray-500 mb-2">
          Thank you, {shippingData.firstName}! Your order has been placed successfully.
        </p>
        <p className="text-gray-500 mb-8">
          A confirmation email has been sent to <strong>{shippingData.email}</strong>.
        </p>
        <div className="bg-gray-50 rounded-2xl p-5 mb-8 text-left">
          <h3 className="font-semibold text-gray-900 mb-3">Order Details</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Order number</span>
              <span className="font-semibold text-gray-900">#MDN-{Math.floor(Math.random() * 90000) + 10000}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated delivery</span>
              <span className="font-semibold text-gray-900">3–5 business days</span>
            </div>
            <div className="flex justify-between">
              <span>Total charged</span>
              <span className="font-semibold text-gray-900">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white";
  const labelClass = "block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link href="/cart" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors mb-8">
        <ArrowLeft size={15} /> Back to Cart
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Form */}
        <div className="lg:col-span-2">
          {/* Steps */}
          <div className="flex items-center gap-3 mb-8">
            {[
              { key: "shipping", label: "Shipping", icon: Truck },
              { key: "payment", label: "Payment", icon: CreditCard },
            ].map((s, i) => (
              <div key={s.key} className="flex items-center gap-3">
                {i > 0 && <div className={"h-px w-8 " + (step === "payment" ? "bg-black" : "bg-gray-200")} />}
                <div className={"flex items-center gap-2 " + (step === s.key ? "text-black" : step === "payment" && s.key === "shipping" ? "text-green-600" : "text-gray-400")}>
                  <div className={"w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold " +
                    (step === s.key ? "bg-black text-white" : step === "payment" && s.key === "shipping" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400")}>
                    {step === "payment" && s.key === "shipping" ? <Check size={14} /> : i + 1}
                  </div>
                  <span className="text-sm font-semibold hidden sm:block">{s.label}</span>
                </div>
              </div>
            ))}
          </div>

          {step === "shipping" && (
            <form onSubmit={handleShippingSubmit} className="space-y-5">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Shipping Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input required type="text" value={shippingData.firstName} onChange={(e) => updateShipping("firstName", e.target.value)} className={inputClass} placeholder="John" />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input required type="text" value={shippingData.lastName} onChange={(e) => updateShipping("lastName", e.target.value)} className={inputClass} placeholder="Doe" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input required type="email" value={shippingData.email} onChange={(e) => updateShipping("email", e.target.value)} className={inputClass} placeholder="john@example.com" />
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input type="tel" value={shippingData.phone} onChange={(e) => updateShipping("phone", e.target.value)} className={inputClass} placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div>
                <label className={labelClass}>Street Address</label>
                <input required type="text" value={shippingData.address} onChange={(e) => updateShipping("address", e.target.value)} className={inputClass} placeholder="123 Main Street, Apt 4B" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label className={labelClass}>City</label>
                  <input required type="text" value={shippingData.city} onChange={(e) => updateShipping("city", e.target.value)} className={inputClass} placeholder="New York" />
                </div>
                <div>
                  <label className={labelClass}>State</label>
                  <input required type="text" value={shippingData.state} onChange={(e) => updateShipping("state", e.target.value)} className={inputClass} placeholder="NY" />
                </div>
                <div>
                  <label className={labelClass}>ZIP Code</label>
                  <input required type="text" value={shippingData.zip} onChange={(e) => updateShipping("zip", e.target.value)} className={inputClass} placeholder="10001" />
                </div>
              </div>
              <div>
                <label className={labelClass}>Country</label>
                <select value={shippingData.country} onChange={(e) => updateShipping("country", e.target.value)} className={inputClass}>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>Germany</option>
                  <option>France</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-black text-white py-4 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors mt-2">
                Continue to Payment
              </button>
            </form>
          )}

          {step === "payment" && (
            <form onSubmit={handlePlaceOrder} className="space-y-5">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Payment Details</h2>
              <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 flex items-center gap-2 text-sm text-blue-700">
                <Lock size={14} />
                Your payment information is encrypted and secure.
              </div>
              <div>
                <label className={labelClass}>Name on Card</label>
                <input required type="text" value={paymentData.cardName} onChange={(e) => updatePayment("cardName", e.target.value)} className={inputClass} placeholder="John Doe" />
              </div>
              <div>
                <label className={labelClass}>Card Number</label>
                <input required type="text" value={paymentData.cardNumber} onChange={(e) => updatePayment("cardNumber", e.target.value)} className={inputClass} placeholder="1234 5678 9012 3456" maxLength={19} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Expiry Date</label>
                  <input required type="text" value={paymentData.expiry} onChange={(e) => updatePayment("expiry", e.target.value)} className={inputClass} placeholder="MM / YY" maxLength={7} />
                </div>
                <div>
                  <label className={labelClass}>CVV</label>
                  <input required type="text" value={paymentData.cvv} onChange={(e) => updatePayment("cvv", e.target.value)} className={inputClass} placeholder="123" maxLength={4} />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setStep("shipping")} className="flex-1 border-2 border-gray-200 text-gray-700 py-4 rounded-xl font-semibold text-sm hover:border-gray-400 transition-colors">
                  Back
                </button>
                <button type="submit" className="flex-1 bg-black text-white py-4 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  <Lock size={14} /> Place Order — ${total.toFixed(2)}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
            <h2 className="text-base font-bold text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3 items-center">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-xs font-bold rounded-full w-4.5 h-4.5 w-5 h-5 flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-900 truncate">{item.product.name}</p>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 flex-shrink-0">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className={shipping === 0 ? "text-green-600" : ""}>{shipping === 0 ? "Free" : "$" + shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-gray-900 text-base pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
