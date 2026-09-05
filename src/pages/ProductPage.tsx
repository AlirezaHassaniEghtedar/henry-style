import React, { useState, useEffect } from "react";
import { products, formatPrice, reviews } from "../data/products";
import { useApp } from "../contexts/AppContext";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
  const { currentProductId, navigate, addToCart } = useApp();
  const product = products.find((p) => p.id === currentProductId) ?? products[0];
  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const otherRelated = products.filter((p) => p.id !== product.id).slice(0, 4 - related.length);
  const allRelated = [...related, ...otherRelated].slice(0, 4);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>("desc");
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    setSelectedImage(0);
    setSelectedSize(null);
    setSelectedColor(0);
    setQuantity(1);
    setAdded(false);
  }, [product.id]);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart({
      product,
      size: selectedSize,
      color: product.colors[selectedColor],
      colorLabel: product.colorLabels[selectedColor],
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordions = [
    {
      id: "desc",
      title: "توضیحات محصول",
      content: product.description,
    },
    {
      id: "size",
      title: "جدول سایزبندی",
      content: "S: سینه ۹۰-۹۵ سانتی‌متر | M: سینه ۹۵-۱۰۰ | L: سینه ۱۰۰-۱۰۵ | XL: سینه ۱۰۵-۱۱۰ | 2XL: سینه ۱۱۰-۱۱۸ | 3XL: سینه ۱۱۸-۱۲۶\n\nنکته: اگه بین دو سایز هستی، یه سایز بالاتر انتخاب کن.",
    },
    {
      id: "shipping",
      title: "ارسال و مرجوعی",
      content: "ارسال به سراسر ایران از طریق پست و تیپاکس. زمان ارسال ۲ تا ۵ روز کاری. ارسال رایگان برای سفارش‌های بالای ۵۰۰ هزار تومان.\n\nمرجوعی تا ۷ روز پس از دریافت، در صورتی که محصول استفاده نشده باشد.",
    },
  ];

  return (
    <div style={{ paddingTop: "64px", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
            <button onClick={() => navigate("home")} className="hover:text-green-500 transition-colors">خانه</button>
            <span>/</span>
            <button onClick={() => navigate("shop")} className="hover:text-green-500 transition-colors">فروشگاه</button>
            <span>/</span>
            <span style={{ color: "var(--text-primary)" }}>{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* ─── Gallery ─── */}
          <div className="lg:w-[52%] flex-shrink-0">
            {/* Main image */}
            <div
              className="relative overflow-hidden rounded-2xl mb-4 cursor-zoom-in"
              style={{
                background: "var(--border)",
                aspectRatio: "3/4",
              }}
              onClick={() => setZoom(!zoom)}
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{ transform: zoom ? "scale(1.4)" : "scale(1)" }}
              />
              {product.badge && (
                <div className="absolute top-4 right-4">
                  <span className={`badge badge-${product.badge}`}>
                    {product.badge === "new" ? "جدید" : product.badge === "sale" ? `${discount}٪ تخفیف` : "پرفروش"}
                  </span>
                </div>
              )}
              <div
                className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg text-xs font-medium"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  color: "#fff",
                  backdropFilter: "blur(4px)",
                }}
              >
                {zoom ? "× کلیک برای بستن" : "+ کلیک برای زوم"}
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className="overflow-hidden rounded-xl transition-all"
                    style={{
                      width: 80,
                      height: 96,
                      background: "var(--border)",
                      border: selectedImage === i ? "2px solid #14C46B" : "2px solid transparent",
                      opacity: selectedImage === i ? 1 : 0.6,
                    }}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ─── Details ─── */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold mb-2" style={{ color: "#14C46B", fontWeight: 700 }}>
              {product.categoryLabel}
            </p>
            <h1
              className="font-black text-2xl sm:text-3xl lg:text-4xl mb-3 leading-tight"
              style={{ color: "var(--text-primary)", fontWeight: 900, lineHeight: "1.15" }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className={`w-4 h-4 ${s <= Math.round(product.rating) ? "star-filled" : "star-empty"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{product.rating}</span>
              <span className="text-sm" style={{ color: "var(--text-muted)" }}>({product.reviewCount} نظر)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6 pb-6" style={{ borderBottom: "1px solid var(--border)" }}>
              <span className="font-black text-3xl" style={{ color: "#14C46B", fontWeight: 900 }}>
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-sm line-through" style={{ color: "var(--text-muted)" }}>
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="badge badge-sale">{discount}٪ تخفیف</span>
                </>
              )}
            </div>

            {/* Color */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-bold" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                  رنگ:
                </span>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {product.colorLabels[selectedColor]}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {product.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    title={product.colorLabels[i]}
                    className="w-8 h-8 rounded-full transition-all"
                    style={{
                      background: color,
                      border: selectedColor === i ? "3px solid #14C46B" : "2px solid var(--border)",
                      outline: selectedColor === i ? "3px solid rgba(20,196,107,0.2)" : "none",
                      transform: selectedColor === i ? "scale(1.1)" : "scale(1)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                  سایز:
                </span>
                <button className="text-xs" style={{ color: "#14C46B" }} onClick={() => setActiveAccordion("size")}>
                  راهنمای سایز
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className="px-4 py-2.5 rounded-xl text-sm font-bold transition-all"
                    style={{
                      background: selectedSize === size ? "#14C46B" : "var(--bg)",
                      color: selectedSize === size ? "#fff" : "var(--text-secondary)",
                      border: selectedSize === size ? "none" : "1px solid var(--border)",
                      fontWeight: 700,
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
                  لطفاً سایز مورد نظرت رو انتخاب کن
                </p>
              )}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-bold" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                تعداد:
              </span>
              <div className="flex items-center rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center font-bold text-lg transition-colors hover:text-green-500"
                  style={{ color: "var(--text-secondary)" }}
                >
                  −
                </button>
                <span className="w-10 text-center font-bold" style={{ color: "var(--text-primary)" }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center font-bold text-lg transition-colors hover:text-green-500"
                  style={{ color: "var(--text-secondary)" }}
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className="btn-primary w-full py-4 font-black text-base mb-3"
              style={{
                fontWeight: 900,
                borderRadius: "12px",
                border: "var(--special-border)",
                opacity: !selectedSize ? 0.5 : 1,
                cursor: !selectedSize ? "not-allowed" : "pointer",
              }}
            >
              {added ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  اضافه شد به سبد!
                </span>
              ) : (
                "افزودن به سبد خرید"
              )}
            </button>

            {/* Features */}
            <div className="mt-6 flex flex-col gap-2">
              {product.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: "#14C46B" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{feat}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 flex flex-col gap-1">
              {accordions.map((acc) => (
                <div
                  key={acc.id}
                  className="rounded-xl overflow-hidden"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between px-5 py-4 font-bold text-sm"
                    style={{ color: "var(--text-primary)", fontWeight: 700, background: "transparent" }}
                  >
                    {acc.title}
                    <svg
                      className="w-4 h-4 transition-transform"
                      style={{ transform: activeAccordion === acc.id ? "rotate(180deg)" : "rotate(0deg)", color: "var(--text-muted)" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeAccordion === acc.id && (
                    <div
                      className="px-5 pb-5 text-sm leading-7"
                      style={{ color: "var(--text-secondary)", lineHeight: "1.8", whiteSpace: "pre-line" }}
                    >
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-16">
          <h2 className="font-black text-2xl mb-6" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
            نظرات مشتریان
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reviews.slice(0, 4).map((review) => (
              <div
                key={review.id}
                className="p-5 rounded-2xl"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className={`w-4 h-4 ${s <= review.rating ? "star-filled" : "star-empty"}`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm mb-4" style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                  "{review.text}"
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-sm" style={{ color: "var(--text-primary)", fontWeight: 700 }}>{review.name}</p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{review.product}</p>
                  </div>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        <div className="mt-16">
          <h2 className="font-black text-2xl mb-8" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
            محصولات مرتبط
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {allRelated.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
