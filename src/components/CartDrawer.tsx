import React from "react";
import { useApp } from "../contexts/AppContext";
import { formatPrice } from "../data/products";

export default function CartDrawer() {
  const {
    isCartOpen,
    closeCart,
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
    navigate,
  } = useApp();

  const handleCheckout = () => {
    closeCart();
    navigate("checkout");
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="overlay animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 left-0 bottom-0 z-50 flex flex-col animate-slide-in-left"
        style={{
          width: "min(420px, 100vw)",
          background: "var(--surface)",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-2">
            <h2
              className="font-black text-lg"
              style={{ color: "var(--text-primary)", fontWeight: 900 }}
            >
              سبد خرید
            </h2>
            {cartCount > 0 && (
              <span
                className="w-6 h-6 flex items-center justify-center rounded-full text-white text-xs font-bold"
                style={{ background: "#14C46B" }}
              >
                {cartCount}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-xl transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 px-8 text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "var(--bg)" }}
              >
                <svg
                  className="w-9 h-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.4}
                  style={{ color: "var(--text-muted)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <div>
                <p
                  className="font-bold mb-2"
                  style={{ color: "var(--text-primary)", fontWeight: 700 }}
                >
                  سبد خرید خالیه
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  هنوز محصولی اضافه نکردی
                </p>
              </div>
              <button
                onClick={() => {
                  closeCart();
                  navigate("shop");
                }}
                className="btn-primary px-6 py-3 text-sm font-bold"
                style={{ borderRadius: "10px", fontWeight: 700 }}
              >
                رفتن به فروشگاه
              </button>
            </div>
          ) : (
            <div className="px-6 py-4 flex flex-col gap-4">
              {cartItems.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}-${item.color}`}
                  className="flex gap-4 py-4"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  {/* Product image */}
                  <div
                    className="rounded-xl overflow-hidden flex-shrink-0"
                    style={{
                      width: 80,
                      height: 96,
                      background: "var(--border)",
                    }}
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4
                      className="font-bold text-sm mb-1 leading-snug"
                      style={{
                        color: "var(--text-primary)",
                        fontWeight: 700,
                      }}
                    >
                      {item.product.name}
                    </h4>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-xs px-2 py-0.5 rounded-md"
                        style={{
                          background: "var(--bg)",
                          color: "var(--text-secondary)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {item.size}
                      </span>
                      <span
                        className="w-4 h-4 rounded-full border-2 inline-block"
                        style={{
                          background: item.color,
                          borderColor: "var(--border)",
                        }}
                      />
                    </div>

                    {/* Quantity + price row */}
                    <div className="flex items-center justify-between">
                      <div
                        className="flex items-center gap-1 rounded-lg"
                        style={{ border: "1px solid var(--border)" }}
                      >
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.color,
                              -1
                            )
                          }
                          className="w-8 h-8 flex items-center justify-center font-bold transition-colors hover:text-green-500"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          −
                        </button>
                        <span
                          className="w-6 text-center text-sm font-bold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.color,
                              1
                            )
                          }
                          className="w-8 h-8 flex items-center justify-center font-bold transition-colors hover:text-green-500"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          +
                        </button>
                      </div>

                      <span
                        className="font-black text-sm"
                        style={{ color: "#14C46B", fontWeight: 900 }}
                      >
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() =>
                      removeFromCart(item.product.id, item.size, item.color)
                    }
                    className="self-start p-1 rounded-lg transition-colors hover:text-accent-500"
                    style={{ color: "red" }}
                  >
                    <svg
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div
            className="px-6 py-6"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {/* Shipping note */}
            <div
              className="flex items-center gap-2 px-4 py-3 rounded-xl mb-4 text-sm"
              style={{ background: "rgba(20,196,107,0.08)", color: "#14C46B" }}
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-medium">
                {cartTotal >= 500000
                  ? "ارسال رایگان برای شما فعاله!"
                  : `${formatPrice(500000 - cartTotal)} تا ارسال رایگان`}
              </span>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between mb-5">
              <span
                className="font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                جمع کل
              </span>
              <span
                className="font-black text-xl"
                style={{ color: "var(--text-primary)", fontWeight: 900 }}
              >
                {formatPrice(cartTotal)}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="btn-primary w-full py-4 font-black text-base"
              style={{ fontWeight: 900, borderRadius: "12px" }}
            >
              تسویه حساب ←
            </button>
          </div>
        )}
      </div>
    </>
  );
}
