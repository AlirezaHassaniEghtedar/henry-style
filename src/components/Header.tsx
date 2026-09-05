import React, { useState, useEffect } from "react";
import { useApp } from "../contexts/AppContext";

export default function Header() {
  const { navigate, isDark, toggleDark, cartCount, openCart, currentPage } =
    useApp();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "فروشگاه", page: "shop" as const },
    { label: "دراپ‌های جدید", page: "shop" as const },
    { label: "درباره ما", page: "about" as const },
    { label: "تماس با ما", page: "contact" as const },
  ];

  const isHomePage = currentPage === "home";

  return (
    <>
      <header
        style={{
          background: scrolled || !isHomePage ? "var(--surface)" : "transparent",
          borderBottom:
            scrolled || !isHomePage
              ? "1px solid var(--border)"
              : "1px solid transparent",
          boxShadow: scrolled ? "var(--shadow-sm)" : "none",
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => navigate("home")}
              className="flex items-end gap-2.5 group cursor-pointer"
            >
              <div
                className="size-9 rounded-lg flex items-center justify-center font-black text-white text-xs tracking-tight"
                style={{ background: "#14C46B" }}
              >
                <img src="../public/images/logo.svg" alt="logo" />
              </div>
              <span
                className="font-black text-lg hidden sm:block"
                style={{
                  color:
                    !scrolled && isHomePage ? "#ffffff" : "var(--text-primary)",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                }}
              >
                Henry Style
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigate(item.page)}
                  className="text-sm font-medium transition-colors duration-200 hover:text-green-500 cursor-pointer"
                  style={{
                    color:
                      !scrolled && isHomePage
                        ? "rgba(255,255,255,0.8)"
                        : "var(--text-secondary)",
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1">
              {/* Search icon */}
              <button
                className="p-2 rounded-lg transition-colors duration-200 cursor-pointer"
                style={{
                  color:
                    !scrolled && isHomePage
                      ? "rgba(255,255,255,0.8)"
                      : "var(--text-secondary)",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Dark mode */}
              <button
                onClick={toggleDark}
                className="p-2 rounded-lg transition-colors duration-200 cursor-pointer"
                style={{
                  color:
                    !scrolled && isHomePage
                      ? "rgba(255,255,255,0.8)"
                      : "var(--text-secondary)",
                }}
                title={isDark ? "حالت روشن" : "حالت تاریک"}
              >
                {isDark ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>

              {/* Cart */}
              <button
                onClick={openCart}
                className="relative p-2 rounded-lg transition-colors duration-200 cursor-pointer"
                style={{
                  color:
                    !scrolled && isHomePage
                      ? "rgba(255,255,255,0.8)"
                      : "var(--text-secondary)",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {cartCount > 0 && (
                  <span
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center rounded-full text-white font-black"
                    style={{ background: "#14C46B", fontSize: "10px" }}
                  >
                    {cartCount > 9 ? "۹+" : cartCount}
                  </span>
                )}
              </button>

              {/* Login button - desktop */}
              <button
                onClick={() => navigate("login")}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold text-white mr-1 transition-all duration-200 hover:scale-105 cursor-pointer"
                style={{
                  background: "#14C46B",
                  fontWeight: 700,
                  boxShadow: "0 2px 8px rgba(20,196,107,0.3)",
                }}
              >
                ورود
              </button>

              {/* Mobile menu */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg transition-colors"
                style={{
                  color:
                    !scrolled && isHomePage
                      ? "rgba(255,255,255,0.8)"
                      : "var(--text-secondary)",
                }}
              >
                {menuOpen ? (
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
                ) : (
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div
            className="lg:hidden border-t animate-fade-in"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    navigate(item.page);
                    setMenuOpen(false);
                  }}
                  className="text-right px-4 py-3 rounded-xl font-medium transition-colors hover:text-green-500"
                  style={{ color: "var(--text-primary)", fontWeight: 500 }}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex gap-2 mt-2 pt-2" style={{ borderTop: "1px solid var(--border)" }}>
                <button
                  onClick={() => {
                    navigate("login");
                    setMenuOpen(false);
                  }}
                  className="flex-1 py-3 rounded-xl font-bold text-white text-center"
                  style={{ background: "#14C46B", fontWeight: 700 }}
                >
                  ورود
                </button>
                <button
                  onClick={() => {
                    navigate("signup");
                    setMenuOpen(false);
                  }}
                  className="flex-1 py-3 rounded-xl font-bold text-center"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                >
                  ثبت‌نام
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
