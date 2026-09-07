import React, { useState } from "react";
import { useApp } from "../contexts/AppContext";

export default function SignupPage() {
  const { navigate } = useApp();
  const [form, setForm] = useState({ name: "", phone: "", password: "", confirm: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const passwordsMatch = form.password === form.confirm || form.confirm === "";
  const canSubmit = form.name && form.phone && form.password && form.confirm && form.password === form.confirm && agree;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("home");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex" style={{ background: "var(--bg)", paddingTop: "64px" }}>
      {/* Left decorative */}
      <div className="hidden lg:flex flex-1 flex-col items-center justify-center relative overflow-hidden" style={{ background: "#0d1a11" }}>
        <img
          src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop&auto=format"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(20,196,107,0.15), transparent)" }} />
        <div className="relative z-10 text-center px-12">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-white text-xl mx-auto mb-6" style={{ background: "#14C46B" }}>
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <h2 className="font-black text-4xl text-white mb-4" style={{ fontWeight: 900 }}>
            بپیوند به ما
          </h2>
          <p className="text-base" style={{ color: "rgba(245,246,243,0.6)", lineHeight: "1.85" }}>
            اول باش. اولین نفری که از دراپ‌های جدید Henry Style باخبر می‌شه.
          </p>

          {/* Perks */}
          <div className="mt-8 flex flex-col gap-3 text-right">
            {[
              "🔔 اطلاع‌رسانی دراپ‌های جدید",
              "💰 تخفیف ۱۰٪ برای خرید اول",
              "⭐ دسترسی به فروش‌های اختصاصی",
              "🎁 جوایز برای مشتریان وفادار",
            ].map((perk) => (
              <div key={perk} className="flex items-center gap-2 text-sm" style={{ color: "rgba(245,246,243,0.7)" }}>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="#14C46B" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {perk}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-8 lg:hidden ">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-sm" style={{ background: "#14C46B" }}><img src="/images/logo.svg" alt="logo" /></div>
            <span className="font-black text-xl" style={{ color: "var(--text-primary)", fontWeight: 900 }}>Henry Style</span>
          </div>

          <div className="animate-fade-in-up">
            <h1 className="font-black text-3xl mb-2" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
              ساخت حساب جدید
            </h1>
            <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
              قبلاً حساب داری؟{" "}
              <button onClick={() => navigate("login")} className="font-bold transition-colors hover:text-green-600" style={{ color: "#14C46B", fontWeight: 700 }}>
                وارد شو
              </button>
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                  نام و نام خانوادگی *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="اسمت رو بنویس"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                  شماره موبایل *
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                  رمز عبور *
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    value={form.password}
                    onChange={(e) => update("password", e.target.value)}
                    placeholder="حداقل ۸ کاراکتر"
                    required
                    style={{ paddingLeft: "44px" }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute top-1/2 -translate-y-1/2 left-3"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      {showPass ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      ) : (
                        <>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                  تکرار رمز عبور *
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  value={form.confirm}
                  onChange={(e) => update("confirm", e.target.value)}
                  placeholder="رمز رو دوباره بنویس"
                  required
                  style={{
                    borderColor: !passwordsMatch ? "#E5484D" : undefined,
                  }}
                />
                {!passwordsMatch && (
                  <p className="text-xs mt-1.5" style={{ color: "#E5484D" }}>رمزها با هم مطابقت ندارن</p>
                )}
              </div>

              {/* Password strength */}
              {form.password && (
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-1 flex-1 rounded"
                        style={{
                          background:
                            form.password.length >= i * 3
                              ? i <= 1 ? "#E85D3D" : i <= 2 ? "#F5A623" : i <= 3 ? "#2FC77E" : "#14C46B"
                              : "var(--border)",
                          transition: "background 0.3s",
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    قدرت رمز:{" "}
                    {form.password.length < 4 ? "خیلی ضعیف" : form.password.length < 7 ? "ضعیف" : form.password.length < 10 ? "متوسط" : "قوی"}
                  </p>
                </div>
              )}

              {/* Terms */}
              <label className="flex items-start gap-3 cursor-pointer">
                <div
                  className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-all"
                  onClick={() => setAgree(!agree)}
                  style={{
                    background: agree ? "#14C46B" : "transparent",
                    border: agree ? "none" : "1.5px solid var(--border)",
                    cursor: "pointer",
                  }}
                >
                  {agree && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  با{" "}
                  <span className="font-bold" style={{ color: "#14C46B" }}>شرایط و ضوابط</span>
                  {" "}و{" "}
                  <span className="font-bold" style={{ color: "#14C46B" }}>سیاست حریم خصوصی</span>
                  {" "}Henry Style موافقم.
                </span>
              </label>

              <button
                type="submit"
                disabled={!canSubmit || loading}
                className="btn-primary py-4 font-black text-base"
                style={{
                  fontWeight: 900,
                  borderRadius: "12px",
                  opacity: !canSubmit ? 0.5 : 1,
                  cursor: !canSubmit ? "not-allowed" : "pointer",
                }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    در حال ثبت‌نام...
                  </span>
                ) : (
                  "ساخت حساب رایگان ←"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
