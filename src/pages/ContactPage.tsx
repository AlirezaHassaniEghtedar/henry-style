import React, { useState } from "react";

const faqs = [
  {
    q: "زمان ارسال چقدره؟",
    a: "سفارش‌ها معمولاً ۲ تا ۵ روز کاری بعد از تأیید پرداخت ارسال میشن. برای تهران ۲-۳ روز، برای شهرهای دیگه ۳-۵ روز.",
  },
  {
    q: "آیا مرجوعی امکان‌پذیره؟",
    a: "بله! تا ۷ روز پس از دریافت محصول، در صورتی که استفاده نشده و برچسب‌ها سالم باشن، امکان مرجوعی وجود داره. هزینه ارسال برگشت با مشتریه.",
  },
  {
    q: "آیا سفارش عمده هم می‌پذیرید؟",
    a: "بله، سفارش‌های بالای ۱۰ عدد با تخفیف ویژه و هماهنگی مستقیم انجام میشه. با ما از طریق اینستاگرام یا شماره تماس در ارتباط باشید.",
  },
  {
    q: "طراحی سفارشی چطوره؟",
    a: "برای طرح‌های سفارشی روی تی‌شرت، با ما تماس بگیرید. حداقل سفارش ۵ عدد، قیمت بسته به طرح متفاوته. زمان تولید ۷ تا ۱۴ روز کاری.",
  },
  {
    q: "سایزبندی‌ها دقیق هستن؟",
    a: "بله، راهنمای سایز دقیق در صفحه هر محصول موجوده. اگه بین دو سایز هستید، یه سایز بالاتر رو انتخاب کنید.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.contact && form.message) setSent(true);
  };

  return (
    <div style={{ paddingTop: "64px", minHeight: "100vh" }}>
      {/* Header */}
      <section
        className="text-center"
        style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)", paddingTop: "60px", paddingBottom: "60px" }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-sm font-bold mb-3 animate-fade-in-up" style={{ color: "#14C46B", fontWeight: 700 }}>
            ما اینجاییم
          </p>
          <h1 className="font-black text-4xl sm:text-5xl mb-4 animate-fade-in-up delay-100" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
            تماس با ما
          </h1>
          <p className="text-base animate-fade-in-up delay-200" style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
            سوال داری، نظر میخوای بدی، یا سفارش عمده دارید؟ هر راهی که راحتتری.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact form */}
            <div>
              <h2 className="font-black text-2xl mb-6" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
                پیام بفرست
              </h2>

              {sent ? (
                <div
                  className="flex flex-col items-center text-center py-12 rounded-2xl animate-fade-in"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div className="text-5xl mb-4">✉️</div>
                  <h3 className="font-black text-xl mb-2" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
                    پیامت رسید!
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    تا ۲۴ ساعت جواب می‌دیم.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                      نام و نام خانوادگی *
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="اسمت چیه؟"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                      ایمیل یا شماره تماس *
                    </label>
                    <input
                      value={form.contact}
                      onChange={(e) => update("contact", e.target.value)}
                      placeholder="۰۹۱۲... یا example@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                      پیام *
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="پیامت رو بنویس..."
                      rows={5}
                      required
                      style={{ resize: "none" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary py-4 font-black text-base"
                    style={{ fontWeight: 900, borderRadius: "12px" }}
                  >
                    ارسال پیام ←
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div>
              <h2 className="font-black text-2xl mb-6" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
                راه‌های ارتباطی
              </h2>

              <div className="flex flex-col gap-4 mb-10">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    ),
                    label: "اینستاگرام",
                    value: "@henrystyle.ir",
                    sub: "جواب DM رو سریع می‌دیم",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: "شماره تماس",
                    value: "۰۲۱-۱۲۳۴-۵۶۷۸",
                    sub: "شنبه تا چهارشنبه ۹ تا ۱۸",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: "آدرس",
                    value: "تهران، منطقه ۶",
                    sub: "کارگاه تولید — بازدید با هماهنگی",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-5 rounded-2xl"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(20,196,107,0.1)", color: "#14C46B" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>{item.label}</p>
                      <p className="font-bold text-sm" style={{ color: "var(--text-primary)", fontWeight: 700 }}>{item.value}</p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div
                className="rounded-2xl overflow-hidden flex items-center justify-center"
                style={{
                  height: 200,
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="text-center">
                  <svg className="w-8 h-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: "var(--text-muted)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>تهران، منطقه ۶</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--surface)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-sm font-bold mb-2" style={{ color: "#14C46B", fontWeight: 700 }}>سوال داری؟</p>
            <h2 className="font-black text-3xl" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
              سوالات متداول
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid var(--border)", background: "var(--bg)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-right"
                >
                  <span className="font-bold text-sm" style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                    {faq.q}
                  </span>
                  <svg
                    className="w-4 h-4 flex-shrink-0 mr-3 transition-transform"
                    style={{
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      color: "var(--text-muted)",
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 animate-fade-in">
                    <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: "1.85" }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
