import React, { useState } from "react";
import { useApp } from "../contexts/AppContext";

export default function Footer() {
  const { navigate } = useApp();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer style={{ background: "#0d0f0d", color: "#F5F6F3" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-sm"
                style={{ background: "#14C46B" }}
              >
                HS
              </div>
              <span className="font-black text-xl" style={{ fontWeight: 900 }}>
                Henry Style
              </span>
            </div>
            <p
              className="text-sm leading-7 mb-6"
              style={{ color: "#A3A7A0", lineHeight: "1.9" }}
            >
              لباس‌هایی که شبیه بقیه نیستن. طرح‌های گرافیکی با هویت ایرانی —
              نوستالژی، هنر، و سبک در یک قطعه.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "#1e201e" }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.7}
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "#1e201e" }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.2 13.9l-2.94-.918c-.64-.203-.652-.64.136-.954l11.498-4.432c.534-.194 1.001.13.83.954z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links - Shop */}
          <div>
            <h4
              className="font-bold mb-5 text-sm"
              style={{ fontWeight: 800, color: "#F5F6F3" }}
            >
              فروشگاه
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "همه محصولات", page: "shop" as const },
                { label: "دراپ‌های جدید", page: "shop" as const },
                { label: "پرفروش‌ترین‌ها", page: "shop" as const },
                { label: "تخفیف‌ها", page: "shop" as const },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => navigate(item.page)}
                    className="text-sm transition-colors duration-200 hover:text-green-500"
                    style={{ color: "#A3A7A0" }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Info */}
          <div>
            <h4
              className="font-bold mb-5 text-sm"
              style={{ fontWeight: 800, color: "#F5F6F3" }}
            >
              اطلاعات
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "درباره ما", page: "about" as const },
                { label: "تماس با ما", page: "contact" as const },
                { label: "سوالات متداول", page: "contact" as const },
                { label: "شرایط مرجوعی", page: "contact" as const },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => navigate(item.page)}
                    className="text-sm transition-colors duration-200 hover:text-green-500"
                    style={{ color: "#A3A7A0" }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              className="font-bold mb-3 text-sm"
              style={{ fontWeight: 800, color: "#F5F6F3" }}
            >
              خبرنامه
            </h4>
            <p className="text-sm mb-4" style={{ color: "#A3A7A0" }}>
              اولین نفری باش که از دراپ‌های جدید باخبر میشه.
            </p>
            {subscribed ? (
              <div
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium"
                style={{ background: "rgba(20,196,107,0.15)", color: "#14C46B" }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                ثبت شدی! ممنون 🙏
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ایمیل شما"
                  className="flex-1 text-sm"
                  style={{
                    background: "#1e201e",
                    border: "1px solid #2A2D28",
                    color: "#F5F6F3",
                    padding: "10px 14px",
                  }}
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-lg font-bold text-white text-sm transition-all hover:scale-105"
                  style={{ background: "#14C46B", fontWeight: 700, borderRadius: "8px" }}
                >
                  ثبت
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid #1e201e" }}
        >
          <p className="text-xs" style={{ color: "#6E716B" }}>
            © ۱۴۰۳ Henry Style — تمام حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs" style={{ color: "#6E716B" }}>
              ارسال به سراسر ایران
            </span>
            <span style={{ color: "#2A2D28" }}>•</span>
            <span className="text-xs" style={{ color: "#6E716B" }}>
              پشتیبانی ۷ روز هفته
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
