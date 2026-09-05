import React, { useState } from "react";
import { Product, formatPrice } from "../data/products";
import { useApp } from "../contexts/AppContext";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export default function ProductCard({ product, featured }: ProductCardProps) {
  const { navigate } = useApp();
  const [hovered, setHovered] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const handleClick = () => navigate("product", product.id);

  const handleMouseEnter = () => {
    setHovered(true);
    if (product.images.length > 1) setImgIndex(1);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setImgIndex(0);
  };

  const discount =
    product.originalPrice
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100
        )
      : null;

  return (
    <div
      className={`card-product ${featured ? "featured" : ""} cursor-pointer`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image container */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "3/4", background: "var(--border)" }}
      >
        <img
          src={product.images[imgIndex] ?? product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
        />

        {/* Overlay gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 right-3">
            <span
              className={`badge badge-${product.badge}`}
              style={{ fontSize: "11px" }}
            >
              {product.badge === "new"
                ? "جدید"
                : product.badge === "sale"
                  ? `${discount}٪ تخفیف`
                  : "پرفروش"}
            </span>
          </div>
        )}

        {/* Quick add button */}
        <div
          className="absolute bottom-3 left-3 right-3"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            transition: "all 0.25s ease",
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate("product", product.id);
            }}
            className="w-full py-2.5 rounded-xl text-sm font-bold text-white"
            style={{
              background: "rgba(20,196,107,0.95)",
              fontWeight: 700,
              backdropFilter: "blur(4px)",
            }}
          >
            مشاهده محصول
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p
          className="text-xs mb-1.5 font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          {product.categoryLabel}
        </p>
        <h3
          className="font-bold text-sm mb-2 leading-snug"
          style={{
            color: "var(--text-primary)",
            fontWeight: 700,
            lineHeight: "1.4",
          }}
        >
          {product.name}
        </h3>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((s) => (
            <svg
              key={s}
              className={`w-3 h-3 ${s <= Math.round(product.rating) ? "star-filled" : "star-empty"}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span
            className="text-xs mr-0.5"
            style={{ color: "var(--text-muted)" }}
          >
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span
            className="font-black text-base"
            style={{ color: "#14C46B", fontWeight: 900 }}
          >
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span
              className="text-xs line-through"
              style={{ color: "var(--text-muted)" }}
            >
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
