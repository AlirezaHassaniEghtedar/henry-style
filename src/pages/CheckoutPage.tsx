import React, { useState } from "react";
import { useApp } from "../contexts/AppContext";
import { formatPrice } from "../data/products";

type Step = "info" | "shipping" | "payment" | "done";

export default function CheckoutPage() {
  const { cartItems, cartTotal, navigate } = useApp();
  const [step, setStep] = useState<Step>("info");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
    shipping: "tipax",
    payment: "online",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const shippingCost = cartTotal >= 500000 ? 0 : 49000;
  const total = cartTotal + shippingCost;

  if (step === "done") {
    return (
      <div
        style={{ paddingTop: "64px", minHeight: "100vh", background: "var(--bg)" }}
        className="flex items-center justify-center"
      >
        <div className="text-center max-w-md mx-auto px-4 py-16 animate-fade-in-up">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(20,196,107,0.1)" }}
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#14C46B" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1
            className="font-black text-3xl mb-4"
            style={{ color: "var(--text-primary)", fontWeight: 900 }}
          >
            سفارش ثبت شد! 🎉
          </h1>
          <p className="text-base mb-2" style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
            سفارشت با موفقیت ثبت شد. کد پیگیری رو از طریق پیامک دریافت می‌کنی.
          </p>
          <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            کد پیگیری: <span className="font-black" style={{ color: "#14C46B" }}>HS-۱۴۰۳-{Math.floor(Math.random() * 9000 + 1000)}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("home")}
              className="btn-primary px-8 py-3.5 font-black"
              style={{ fontWeight: 900 }}
            >
              بازگشت به خانه
            </button>
            <button
              onClick={() => navigate("shop")}
              className="btn-secondary px-8 py-3.5 font-bold"
              style={{ fontWeight: 700 }}
            >
              ادامه خرید
            </button>
          </div>
        </div>
      </div>
    );
  }

  const steps = [
    { id: "info", label: "اطلاعات" },
    { id: "shipping", label: "ارسال" },
    { id: "payment", label: "پرداخت" },
  ] as const;

  const stepIndex = steps.findIndex((s) => s.id === step);

  return (
    <div style={{ paddingTop: "64px", minHeight: "100vh", background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Steps indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {steps.map((s, i) => (
            <React.Fragment key={s.id}>
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-black text-sm transition-all"
                  style={{
                    background: i <= stepIndex ? "#14C46B" : "var(--border)",
                    color: i <= stepIndex ? "#fff" : "var(--text-muted)",
                    fontWeight: 900,
                  }}
                >
                  {i < stepIndex ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <span
                  className="text-sm font-bold hidden sm:block"
                  style={{
                    color: i <= stepIndex ? "var(--text-primary)" : "var(--text-muted)",
                    fontWeight: 700,
                  }}
                >
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className="w-8 h-0.5 rounded"
                  style={{ background: i < stepIndex ? "#14C46B" : "var(--border)" }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form area */}
          <div className="flex-1 min-w-0">
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              {step === "info" && (
                <div className="animate-fade-in">
                  <h2 className="font-black text-xl mb-6" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
                    اطلاعات گیرنده
                  </h2>
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold mb-2" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                          نام و نام خانوادگی *
                        </label>
                        <input
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          placeholder="علی محمدی"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                          شماره تماس *
                        </label>
                        <input
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                          type="tel"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                        آدرس کامل *
                      </label>
                      <textarea
                        value={form.address}
                        onChange={(e) => update("address", e.target.value)}
                        placeholder="تهران، خیابان..."
                        rows={3}
                        style={{ resize: "none" }}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold mb-2" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                          شهر *
                        </label>
                        <input
                          value={form.city}
                          onChange={(e) => update("city", e.target.value)}
                          placeholder="تهران"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                          کد پستی *
                        </label>
                        <input
                          value={form.postal}
                          onChange={(e) => update("postal", e.target.value)}
                          placeholder="۱۲۳۴۵۶۷۸۹۰"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setStep("shipping")}
                    disabled={!form.name || !form.phone || !form.address || !form.city || !form.postal}
                    className="btn-primary w-full py-4 font-black mt-6"
                    style={{
                      fontWeight: 900,
                      borderRadius: "12px",
                      opacity: (!form.name || !form.phone || !form.address || !form.city || !form.postal) ? 0.5 : 1,
                    }}
                  >
                    ادامه — انتخاب روش ارسال ←
                  </button>
                </div>
              )}

              {step === "shipping" && (
                <div className="animate-fade-in">
                  <h2 className="font-black text-xl mb-6" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
                    روش ارسال
                  </h2>
                  <div className="flex flex-col gap-3">
                    {[
                      { id: "tipax", label: "تیپاکس", desc: "۲ تا ۵ روز کاری", price: 49000 },
                      { id: "post", label: "پست پیشتاز", desc: "۳ تا ۷ روز کاری", price: 29000 },
                      { id: "express", label: "پیک اکسپرس (تهران)", desc: "فردا در درب خانه", price: 79000 },
                    ].map((opt) => (
                      <label
                        key={opt.id}
                        className="flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all"
                        style={{
                          border: form.shipping === opt.id ? "2px solid #14C46B" : "1px solid var(--border)",
                          background: form.shipping === opt.id ? "rgba(20,196,107,0.05)" : "transparent",
                        }}
                      >
                        <input
                          type="radio"
                          name="shipping"
                          value={opt.id}
                          checked={form.shipping === opt.id}
                          onChange={() => update("shipping", opt.id)}
                          className="sr-only"
                        />
                        <div
                          className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                          style={{ borderColor: form.shipping === opt.id ? "#14C46B" : "var(--border)" }}
                        >
                          {form.shipping === opt.id && (
                            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#14C46B" }} />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-sm" style={{ color: "var(--text-primary)", fontWeight: 700 }}>{opt.label}</p>
                          <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{opt.desc}</p>
                        </div>
                        <span className="font-bold text-sm" style={{ color: "#14C46B", fontWeight: 700 }}>
                          {cartTotal >= 500000 ? "رایگان" : formatPrice(opt.price)}
                        </span>
                      </label>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button onClick={() => setStep("info")} className="btn-secondary min-w-0 flex-1 py-4 font-bold" style={{ fontWeight: 700 }}>
                      ← برگشت
                    </button>
                    <button onClick={() => setStep("payment")} className="btn-primary flex-1 min-w-0 py-4 font-black" style={{ fontWeight: 900, borderRadius: "12px" }}>
                      ادامه — پرداخت ←
                    </button>
                  </div>
                </div>
              )}

              {step === "payment" && (
                <div className="animate-fade-in">
                  <h2 className="font-black text-xl mb-6" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
                    روش پرداخت
                  </h2>
                  <div className="flex flex-col gap-3 mb-6">
                    {[
                      { id: "online", label: "پرداخت آنلاین (درگاه بانکی)", icon: "💳" },
                      { id: "card", label: "کارت به کارت", icon: "🏦" },
                    ].map((opt) => (
                      <label
                        key={opt.id}
                        className="flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all"
                        style={{
                          border: form.payment === opt.id ? "2px solid #14C46B" : "1px solid var(--border)",
                          background: form.payment === opt.id ? "rgba(20,196,107,0.05)" : "transparent",
                        }}
                      >
                        <input type="radio" name="payment" value={opt.id} checked={form.payment === opt.id} onChange={() => update("payment", opt.id)} className="sr-only" />
                        <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0" style={{ borderColor: form.payment === opt.id ? "#14C46B" : "var(--border)" }}>
                          {form.payment === opt.id && <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#14C46B" }} />}
                        </div>
                        <span className="text-xl">{opt.icon}</span>
                        <p className="font-bold text-sm" style={{ color: "var(--text-primary)", fontWeight: 700 }}>{opt.label}</p>
                      </label>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button onClick={() => setStep("shipping")} className="btn-secondary flex-1 min-w-0 py-4 font-bold" style={{ fontWeight: 700 }}>
                      ← برگشت
                    </button>
                    <button
                      onClick={() => setStep("done")}
                      className="btn-primary flex-1 min-w-0 py-4 font-black"
                      style={{ fontWeight: 900, borderRadius: "12px", border: "var(--special-border)" }}
                    >
                      پرداخت و ثبت سفارش ←
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:w-80 flex-shrink-0">
            <div
              className="rounded-2xl p-6 lg:sticky lg:top-24"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <h3 className="font-black text-lg mb-5" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
                خلاصه سفارش
              </h3>

              {cartItems.length === 0 ? (
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>سبد خالی است</p>
              ) : (
                <div className="flex flex-col gap-4 mb-5" style={{ borderBottom: "1px solid var(--border)", paddingBottom: "20px" }}>
                  {cartItems.map((item) => (
                    <div key={`${item.product.id}-${item.size}`} className="flex gap-3">
                      <div className="w-14 h-16 rounded-xl overflow-hidden flex-shrink-0" style={{ background: "var(--border)" }}>
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold leading-tight mb-1" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                          {item.product.name}
                        </p>
                        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                          {item.size} / {item.colorLabel} × {item.quantity}
                        </p>
                        <p className="text-xs font-black mt-1" style={{ color: "#14C46B", fontWeight: 900 }}>
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-sm">
                  <span style={{ color: "var(--text-secondary)" }}>جمع محصولات</span>
                  <span style={{ color: "var(--text-primary)" }}>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span style={{ color: "var(--text-secondary)" }}>هزینه ارسال</span>
                  <span style={{ color: shippingCost === 0 ? "#14C46B" : "var(--text-primary)" }}>
                    {shippingCost === 0 ? "رایگان" : formatPrice(shippingCost)}
                  </span>
                </div>
                <div
                  className="flex justify-between font-black text-base pt-3"
                  style={{ color: "var(--text-primary)", borderTop: "1px solid var(--border)", fontWeight: 900 }}
                >
                  <span>جمع کل</span>
                  <span style={{ color: "#14C46B" }}>{formatPrice(total)}</span>
                </div>
              </div>

              <div
                className="mt-4 p-3 rounded-xl text-xs"
                style={{ background: "rgba(20,196,107,0.08)", color: "#14C46B" }}
              >
                🛡️ پرداخت امن با درگاه بانکی معتبر
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
