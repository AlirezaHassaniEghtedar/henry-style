import React, { useState } from "react";
import { useApp } from "../contexts/AppContext";

export default function LoginPage() {
  const { navigate } = useApp();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("home");
    }, 1200);
  };

  return (
    <div
      className="min-h-screen flex"
      style={{ background: "var(--bg)", paddingTop: "64px" }}
    >
      {/* Left panel - decorative (desktop) */}
      <div
        className="hidden lg:flex flex-1 flex-col items-center justify-center relative overflow-hidden"
        style={{ background: "#0d1a11" }}
      >
        <img
          src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop&auto=format"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(20,196,107,0.15), transparent)" }} />
        <div className="relative z-10 text-center px-12">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-white text-xl mx-auto mb-6" style={{ background: "#14C46B" }}>
            HS
          </div>
          <h2 className="font-black text-4xl text-white mb-4" style={{ fontWeight: 900 }}>
            خوش برگشتی!
          </h2>
          <p className="text-base" style={{ color: "rgba(245,246,243,0.6)", lineHeight: "1.85" }}>
            وارد حسابت بشو و از تازه‌ترین دراپ‌های Henry Style باخبر باش.
          </p>
        </div>
      </div>

      {/* Right panel - form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-8 lg:hidden">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-sm" style={{ background: "#14C46B" }}>HS</div>
            <span className="font-black text-xl" style={{ color: "var(--text-primary)", fontWeight: 900 }}>Henry Style</span>
          </div>

          <div className="animate-fade-in-up">
            <h1 className="font-black text-3xl mb-2" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
              ورود به حساب
            </h1>
            <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
              هنوز حساب نداری؟{" "}
              <button onClick={() => navigate("signup")} className="font-bold transition-colors hover:text-green-600" style={{ color: "#14C46B", fontWeight: 700 }}>
                ثبت‌نام کن
              </button>
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                  شماره موبایل یا ایمیل
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="۰۹۱۲... یا email@example.com"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                    رمز عبور
                  </label>
                  <button
                    type="button"
                    className="text-xs font-medium transition-colors hover:text-green-600"
                    style={{ color: "#14C46B" }}
                  >
                    فراموشی رمز
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="رمز عبور"
                    required
                    style={{ paddingLeft: "44px" }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute top-1/2 -translate-y-1/2 left-3 transition-colors"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {showPass ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary py-4 font-black text-base"
                style={{ fontWeight: 900, borderRadius: "12px" }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    در حال ورود...
                  </span>
                ) : (
                  "ورود به حساب"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>یا</span>
              <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
            </div>

            {/* Social login */}
            <button
              className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-[1.01]"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                fontWeight: 700,
                background: "var(--surface)",
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              ورود با گوگل
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
