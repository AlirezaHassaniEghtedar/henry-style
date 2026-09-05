import React, { useState, useMemo } from "react";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useApp } from "../contexts/AppContext";

const sortOptions = [
  { value: "newest", label: "جدیدترین" },
  { value: "bestseller", label: "پرفروش‌ترین" },
  { value: "price-asc", label: "ارزان‌ترین" },
  { value: "price-desc", label: "گران‌ترین" },
];

const allSizes = ["S", "M", "L", "XL", "2XL", "3XL"];

export default function ShopPage() {
  const { navigate } = useApp();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
  const [sort, setSort] = useState("newest");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        selectedSizes.some((s) => p.sizes.includes(s))
      );
    }
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sort === "bestseller")
      result.sort((a, b) => b.reviewCount - a.reviewCount);
    return result;
  }, [selectedCategories, selectedSizes, priceRange, sort]);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setPriceRange([0, 500000]);
  };

  const hasFilters =
    selectedCategories.length > 0 ||
    selectedSizes.length > 0 ||
    priceRange[0] > 0 ||
    priceRange[1] < 500000;

  const FilterPanel = () => (
    <div className="flex flex-col gap-6">
      {/* Categories */}
      <div>
        <h3
          className="font-black text-sm mb-3"
          style={{ color: "var(--text-primary)", fontWeight: 900 }}
        >
          دسته‌بندی
        </h3>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="sr-only"
              />
              <div
                className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all"
                style={{
                  background: selectedCategories.includes(cat.id)
                    ? "#14C46B"
                    : "transparent",
                  border: selectedCategories.includes(cat.id)
                    ? "none"
                    : "1.5px solid var(--border)",
                }}
              >
                {selectedCategories.includes(cat.id) && (
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span
                className="text-sm transition-colors group-hover:text-green-500"
                style={{ color: "var(--text-secondary)" }}
              >
                {cat.emoji} {cat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3
          className="font-black text-sm mb-3"
          style={{ color: "var(--text-primary)", fontWeight: 900 }}
        >
          سایز
        </h3>
        <div className="flex flex-wrap gap-2">
          {allSizes.map((size) => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
              style={{
                background: selectedSizes.includes(size)
                  ? "#14C46B"
                  : "var(--bg)",
                color: selectedSizes.includes(size)
                  ? "#fff"
                  : "var(--text-secondary)",
                border: selectedSizes.includes(size)
                  ? "none"
                  : "1px solid var(--border)",
                fontWeight: 700,
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div>
        <h3
          className="font-black text-sm mb-3"
          style={{ color: "var(--text-primary)", fontWeight: 900 }}
        >
          محدوده قیمت
        </h3>
        <input
          type="range"
          min={0}
          max={500000}
          step={10000}
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
          className="w-full"
          style={{ accentColor: "#14C46B" }}
        />
        <div
          className="flex items-center justify-between mt-2 text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          <span>۰ تومان</span>
          <span>{priceRange[1].toLocaleString("fa-IR")} تومان</span>
        </div>
      </div>

      {/* Sort - mobile only in sidebar */}
      <div>
        <h3
          className="font-black text-sm mb-3"
          style={{ color: "var(--text-primary)", fontWeight: 900 }}
        >
          مرتب‌سازی
        </h3>
        <div className="flex flex-col gap-2">
          {sortOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setSort(opt.value)}
              className="text-sm text-right px-3 py-2 rounded-lg transition-all"
              style={{
                background: sort === opt.value ? "rgba(20,196,107,0.1)" : "transparent",
                color: sort === opt.value ? "#14C46B" : "var(--text-secondary)",
                fontWeight: sort === opt.value ? 700 : 400,
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-sm font-bold text-center py-2 rounded-lg transition-colors"
          style={{
            color: "#E85D3D",
            border: "1px solid rgba(232,93,61,0.3)",
            background: "rgba(232,93,61,0.05)",
          }}
        >
          حذف فیلترها
        </button>
      )}
    </div>
  );

  return (
    <div style={{ paddingTop: "64px", minHeight: "100vh" }}>
      {/* Breadcrumb + header */}
      <div style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-2 text-xs mb-3" style={{ color: "var(--text-muted)" }}>
            <button onClick={() => navigate("home")} className="hover:text-green-500 transition-colors">خانه</button>
            <span>/</span>
            <span style={{ color: "var(--text-primary)" }}>فروشگاه</span>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h1 className="font-black text-2xl sm:text-3xl" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
                همه محصولات
              </h1>
              <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                {filtered.length} محصول
              </p>
            </div>

            {/* Sort select - desktop */}
            <div className="flex items-center gap-3">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="hidden sm:block text-sm"
                style={{
                  padding: "8px 14px",
                  minWidth: "160px",
                }}
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              {/* Mobile filter button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                  fontWeight: 700,
                }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                فیلتر
                {hasFilters && (
                  <span className="w-5 h-5 rounded-full text-white text-xs flex items-center justify-center" style={{ background: "#14C46B" }}>
                    {selectedCategories.length + selectedSizes.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar - desktop */}
          <aside
            className="hidden lg:block w-56 flex-shrink-0"
          >
            <div
              className="sticky top-24 p-5 rounded-2xl"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <FilterPanel />
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
                <div className="text-5xl">🔍</div>
                <h3 className="font-black text-xl" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
                  محصولی پیدا نشد
                </h3>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  فیلترها رو تغییر بده تا محصولات بیشتری ببینی
                </p>
                <button onClick={clearFilters} className="btn-primary px-6 py-3 text-sm font-bold" style={{ fontWeight: 700 }}>
                  حذف فیلترها
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <>
          <div className="overlay animate-fade-in" onClick={() => setSidebarOpen(false)} />
          <div
            className="fixed top-0 right-0 bottom-0 z-50 overflow-y-auto animate-slide-in-right"
            style={{
              width: "min(320px, 90vw)",
              background: "var(--surface)",
              padding: "24px",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-black text-lg" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
                فیلتر محصولات
              </h2>
              <button onClick={() => setSidebarOpen(false)} style={{ color: "var(--text-muted)" }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <FilterPanel />
            <button
              onClick={() => setSidebarOpen(false)}
              className="btn-primary w-full py-4 font-black mt-6"
              style={{ fontWeight: 900, borderRadius: "12px" }}
            >
              نمایش {filtered.length} محصول
            </button>
          </div>
        </>
      )}
    </div>
  );
}
