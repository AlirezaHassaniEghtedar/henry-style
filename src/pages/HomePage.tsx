import React, { useEffect, useRef } from "react";
import { useApp } from "../contexts/AppContext";
import { products, categories, reviews, formatPrice } from "../data/products";
import ProductCard from "../components/ProductCard";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function HomePage() {
  const { navigate } = useApp();
  useScrollReveal();

  const newArrivals = products.filter(
    (p) => p.badge === "new" || p.badge === "bestseller",
  );
  const allProducts = products.slice(0, 8);

  return (
    <div>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: "100vh",
          background: "#0d0f0d",
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027244db?w=1400&h=900&fit=crop&auto=format&q=80"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.35 }}
        />

        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(20,196,107,0.12) 0%, transparent 50%, rgba(232,93,61,0.08) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0d0f0d 0%, transparent 40%, transparent 70%, #0d0f0d 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="animate-fade-in">
            <span
              className="badge badge-new inline-flex mb-6"
              style={{ fontSize: "12px" }}
            >
              🔥 دراپ جدید بهار ۱۴۰۳
            </span>
          </div>

          <h1
            className="animate-fade-in delay-100 text-5xl sm:text-6xl lg:text-8xl mb-6 leading-none"
            style={{
              fontWeight: 900,
              color: "#F5F6F3",
              lineHeight: "0.95",
              letterSpacing: "-0.03em",
            }}
          >
            لباس‌هایی
            <br />
            <span style={{ color: "#14C46B" }}>که شبیه</span>
            <br />
            بقیه نیستن
          </h1>

          <p
            className="animate-fade-in delay-200 text-base sm:text-lg mb-10 max-w-lg mx-auto"
            style={{
              color: "rgba(245,246,243,0.65)",
              lineHeight: "1.8",
            }}
          >
            طرح‌های گرافیکی اختصاصی با هویت ایرانی — نوستالژی سینما، موسیقی، و
            فرهنگ رترو روی تی‌شرت پرمیوم.
          </p>

          <div className="animate-fade-in delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("shop")}
              className="btn-primary px-8 py-4 font-black text-base"
              style={{
                fontWeight: 900,
                borderRadius: "10px",
                fontSize: "16px",
                border: "var(--special-border)",
              }}
            >
              مشاهده فروشگاه ←
            </button>
            <button
              onClick={() => navigate("about")}
              className="btn-secondary px-8 py-4 font-bold text-base"
              style={{
                borderRadius: "10px",
                fontSize: "16px",
                color: "rgba(245,246,243,0.8)",
                borderColor: "rgba(245,246,243,0.2)",
              }}
            >
              داستان برند
            </button>
          </div>

          {/* Stats */}
          <div className="animate-fade-in delay-500 flex items-center justify-center gap-8 sm:gap-16 mt-16">
            {[
              { num: "+۵۰", label: "طرح اختصاصی" },
              { num: "+۲هزار", label: "مشتری راضی" },
              { num: "۴.۸", label: "امتیاز میانگین" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="font-black text-xl sm:text-2xl"
                  style={{ color: "#14C46B", fontWeight: 900 }}
                >
                  {stat.num}
                </p>
                <p
                  className="text-xs sm:text-sm mt-1"
                  style={{ color: "rgba(245,246,243,0.5)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-600">
          <div
            className="flex flex-col items-center gap-2"
            style={{ color: "rgba(245,246,243,0.4)" }}
          >
            <span className="text-xs">اسکرول کن</span>
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TRUST BAR
      ═══════════════════════════════════════ */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 py-5">
            {[
              { icon: "🚚", text: "ارسال به سراسر ایران" },
              { icon: "⭐", text: "فروش تک و عمده" },
              { icon: "✏️", text: "طراحی سفارشی" },
              { icon: "🛡️", text: "ضمانت کیفیت" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center justify-center gap-2 text-white text-sm font-bold px-3 py-5 rounded"
                style={{ fontWeight: 700, background: "#14C46B" }}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          NEW ARRIVALS
      ═══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal flex items-end justify-between mb-8 sm:mb-10">
          <div>
            <p
              className="text-sm font-bold mb-2"
              style={{ color: "#14C46B", fontWeight: 700 }}
            >
              جدیدترین‌ها
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black"
              style={{ color: "var(--text-primary)", fontWeight: 900 }}
            >
              دراپ‌های جدید
            </h2>
          </div>
          <button
            onClick={() => navigate("shop")}
            className="text-sm font-bold hidden sm:flex items-center gap-1 transition-colors hover:text-green-600"
            style={{ color: "#14C46B", fontWeight: 700 }}
          >
            همه محصولات ←
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {allProducts.slice(0, 4).map((product, i) => (
            <div key={product.id} className={`reveal delay-${(i + 1) * 100}`}>
              <ProductCard
                product={product}
                featured={product.badge === "bestseller"}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CATEGORIES
      ═══════════════════════════════════════ */}
      <section style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-10">
            <p
              className="text-sm font-bold mb-2"
              style={{ color: "#14C46B", fontWeight: 700 }}
            >
              دسته‌بندی
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black"
              style={{ color: "var(--text-primary)", fontWeight: 900 }}
            >
              سبک خودت رو پیدا کن
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => navigate("shop")}
                className={`reveal delay-${(i + 1) * 100} relative overflow-hidden group`}
                style={{
                  aspectRatio: "4/5",
                  borderRadius: "16px",
                  cursor: "pointer",
                  background: "var(--border)",
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-0 right-0 left-0 p-5 text-right">
                  <p className="text-2xl mb-1">{cat.emoji}</p>
                  <p
                    className="font-black text-white text-base"
                    style={{ fontWeight: 900 }}
                  >
                    {cat.label}
                  </p>
                  <p
                    className="text-xs mt-1 transition-all duration-300 group-hover:text-green-400"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    مشاهده ←
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MORE PRODUCTS
      ═══════════════════════════════════════ */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal flex items-end justify-between mb-8 sm:mb-10">
            <div>
              <p
                className="text-sm font-bold mb-2"
                style={{ color: "#14C46B", fontWeight: 700 }}
              >
                همه طرح‌ها
              </p>
              <h2
                className="text-3xl sm:text-4xl font-black"
                style={{ color: "var(--text-primary)", fontWeight: 900 }}
              >
                کلکسیون کامل
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {allProducts.slice(4).map((product, i) => (
              <div
                key={product.id}
                className={`reveal delay-${((i % 4) + 1) * 100}`}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CUSTOMIZER TEASER
      ═══════════════════════════════════════ */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="reveal relative overflow-hidden rounded-2xl"
            style={{
              background: "#0d1a11",
              border: "var(--special-border)",
            }}
          >
            {/* BG pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, #14C46B 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
              style={{
                background: "#14C46B",
                filter: "blur(80px)",
                transform: "translate(30%, -30%)",
              }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 p-8 sm:p-12">
              {/* T-shirt placeholder */}
              <div
                className="flex-shrink-0 w-40 h-48 sm:w-52 sm:h-64 rounded-2xl flex flex-col items-center justify-center gap-3"
                style={{
                  background: "rgba(20,196,107,0.08)",
                  border: "2px dashed rgba(20,196,107,0.3)",
                }}
              >
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20"
                  viewBox="0 0 64 64"
                  fill="none"
                  style={{ color: "rgba(20,196,107,0.5)" }}
                >
                  <path
                    d="M16 8L8 18v8h8v28h32V26h8v-8L48 8l-8 8H24L16 8z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="rgba(20,196,107,0.1)"
                  />
                </svg>
                <span
                  className="text-xs font-medium text-center px-2"
                  style={{ color: "rgba(20,196,107,0.6)" }}
                >
                  پیش‌نمایش سه‌بعدی
                  <br />
                  به‌زودی
                </span>
              </div>

              {/* Content */}
              <div className="text-center lg:text-right flex-1">
                <span
                  className="badge badge-new inline-flex mb-4"
                  style={{ fontSize: "11px" }}
                >
                  به‌زودی
                </span>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4"
                  style={{
                    color: "#F5F6F3",
                    fontWeight: 900,
                    lineHeight: "1.1",
                  }}
                >
                  طرح خودت رو
                  <br />
                  <span style={{ color: "#14C46B" }}>روی تی‌شرت پیاده کن</span>
                </h2>
                <p
                  className="text-sm sm:text-base mb-8 max-w-md mx-auto lg:mx-0"
                  style={{
                    color: "rgba(245,246,243,0.55)",
                    lineHeight: "1.8",
                  }}
                >
                  بزودی می‌تونی طرح دلخواهت رو آپلود کنی و روی تی‌شرت به‌صورت
                  سه‌بعدی ببینی — کاملاً سفارشی، کاملاً Henry Style.
                </p>

                {/* Tool preview */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
                  {[
                    { label: "آپلود طرح", disabled: true },
                    { label: "انتخاب رنگ", disabled: true },
                    { label: "متن دلخواه", disabled: true },
                  ].map((btn) => (
                    <button
                      key={btn.label}
                      disabled
                      className="px-4 py-2.5 rounded-xl text-sm font-medium"
                      style={{
                        background: "rgba(245,246,243,0.06)",
                        color: "rgba(245,246,243,0.3)",
                        border: "1px solid rgba(245,246,243,0.1)",
                        cursor: "not-allowed",
                      }}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>

                <button
                  disabled
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm"
                  style={{
                    background: "rgba(20,196,107,0.15)",
                    color: "rgba(20,196,107,0.5)",
                    border: "1px solid rgba(20,196,107,0.2)",
                    cursor: "not-allowed",
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  اطلاع‌رسانی هنگام راه‌اندازی
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
      ═══════════════════════════════════════ */}
      <section style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-10">
            <p
              className="text-sm font-bold mb-2"
              style={{ color: "#14C46B", fontWeight: 700 }}
            >
              نظرات مشتریان
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black"
              style={{ color: "var(--text-primary)", fontWeight: 900 }}
            >
              چی می‌گن؟
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((review, i) => (
              <div
                key={review.id}
                className={`reveal delay-${(i + 1) * 100} p-6 rounded-2xl`}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      className={`w-4 h-4 ${s <= review.rating ? "star-filled" : "star-empty"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p
                  className="text-sm leading-7 mb-5"
                  style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}
                >
                  "{review.text}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="font-bold text-sm"
                      style={{
                        color: "var(--text-primary)",
                        fontWeight: 700,
                      }}
                    >
                      {review.name}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {review.product}
                    </p>
                  </div>
                  <span
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {review.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════ */}
      <section>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="reveal">
            <h2
              className="text-4xl sm:text-5xl font-black mb-6"
              style={{
                color: "var(--text-primary)",
                fontWeight: 900,
                lineHeight: "1.1",
              }}
            >
              خاص باش، <span style={{ color: "#14C46B" }}>معمولی نباش</span>
            </h2>
            <p
              className="text-base sm:text-lg mb-8"
              style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}
            >
              بیش از ۵۰ طرح اختصاصی منتظرته. یه لباس انتخاب کن که داستانت رو
              بگه.
            </p>
            <button
              onClick={() => navigate("shop")}
              className="btn-primary px-10 py-4 font-black text-base"
              style={{ fontWeight: 900, borderRadius: "12px" }}
            >
              کشف فروشگاه ←
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
