import React from "react";
import { useApp } from "../contexts/AppContext";

const stats = [
  { num: "+۵۰", label: "طرح اختصاصی" },
  { num: "+۲۰۰۰", label: "مشتری راضی" },
  { num: "۴.۸", label: "امتیاز میانگین" },
  { num: "۳", label: "سال تجربه" },
];

const process = [
  {
    step: "۱",
    title: "ایده و الهام",
    desc: "همه چیز از یه ایده شروع میشه. فرهنگ، تاریخ، موسیقی، سینما — هر چیزی که حسِ ایرانی‌بودن رو به یاد میاره.",
    icon: "💡",
  },
  {
    step: "۲",
    title: "طراحی گرافیکی",
    desc: "طراحان ما ایده رو به یه اثر هنری تبدیل می‌کنن — دقیق، بولد، و ماندگار.",
    icon: "✏️",
  },
  {
    step: "۳",
    title: "چاپ DTF پرمیوم",
    desc: "با پیشرفته‌ترین تکنولوژی چاپ DTF، طرح با کیفیت عالی روی پارچه منتقل میشه.",
    icon: "🖨️",
  },
  {
    step: "۴",
    title: "کنترل کیفیت",
    desc: "هر محصول قبل از ارسال بررسی میشه. اگه کامل نباشه، ارسال نمیشه.",
    icon: "✅",
  },
];

export default function AboutPage() {
  const { navigate } = useApp();

  return (
    <div style={{ paddingTop: "64px", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "60vh", background: "#0d1a11", paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1529139574466-a303027244db?w=1200&h=700&fit=crop&auto=format)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to left, #0d1a11 40%, transparent 100%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold mb-3 animate-fade-in-up" style={{ color: "#14C46B", fontWeight: 700 }}>
              داستان ما
            </p>
            <h1
              className="font-black text-4xl sm:text-5xl lg:text-6xl mb-6 animate-fade-in-up delay-100"
              style={{ color: "#F5F6F3", fontWeight: 900, lineHeight: "1.05" }}
            >
              خاص باش،
              <br />
              <span style={{ color: "#14C46B" }}>معمولی نباش</span>
            </h1>
            <p
              className="text-base sm:text-lg animate-fade-in-up delay-200"
              style={{ color: "rgba(245,246,243,0.7)", lineHeight: "1.85" }}
            >
              Henry Style از یه باور ساده شروع شد: لباس نباید فقط یه چیزی برای پوشیدن باشه. باید داستان داشته باشه.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div style={{ background: "#14C46B" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-black text-3xl sm:text-4xl mb-1 text-white" style={{ fontWeight: 900 }}>
                  {stat.num}
                </p>
                <p className="text-sm text-white" style={{ opacity: 0.8 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-bold mb-3" style={{ color: "#14C46B", fontWeight: 700 }}>
                چرا Henry Style؟
              </p>
              <h2 className="font-black text-3xl sm:text-4xl mb-6" style={{ color: "var(--text-primary)", fontWeight: 900, lineHeight: "1.2" }}>
                از یه ایده ساده
                <br />
                تا یه برند اصیل
              </h2>
              <div className="flex flex-col gap-5" style={{ color: "var(--text-secondary)", lineHeight: "1.85" }}>
                <p className="text-sm sm:text-base">
                  Henry Style در سال ۱۴۰۰ توسط یه گروه از طراحان جوان ایرانی پایه‌گذاری شد. ما دیدیم که بازار پر از لباس‌های تکراری‌ه که هیچ ریشه‌ای ندارن.
                </p>
                <p className="text-sm sm:text-base">
                  ما باور داریم که هر ایرانی به گذشته‌اش افتخار می‌کنه. پیکان، بهروز وثوقی، فروهر، ماهستی — اینا فقط نوستالژی نیستن. اینا هویت ما هستن.
                </p>
                <p className="text-sm sm:text-base">
                  هر طرحی که تولید می‌کنیم یه داستان پشتشه. یه خاطره، یه حس، یه افتخار. ما لباس‌هایی می‌سازیم که وقتی می‌پوشیشون، بخشی از اون داستان می‌شی.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate("shop")}
                  className="btn-primary px-8 py-3.5 font-black"
                  style={{ fontWeight: 900 }}
                >
                  کشف فروشگاه ←
                </button>
                <button
                  onClick={() => navigate("contact")}
                  className="btn-secondary px-8 py-3.5 font-bold"
                  style={{ fontWeight: 700 }}
                >
                  تماس با ما
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ aspectRatio: "4/5", background: "var(--border)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1556821840-3a63f8a79c65?w=700&h=900&fit=crop&auto=format"
                  alt="تیم Henry Style"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute bottom-6 right-6 left-6 p-5 rounded-xl"
                  style={{
                    background: "rgba(13,26,17,0.9)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(20,196,107,0.2)",
                  }}
                >
                  <p className="font-bold text-sm text-white mb-1" style={{ fontWeight: 700 }}>
                    "لباس‌هایی که شبیه بقیه نیستن"
                  </p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                    — Henry, بنیان‌گذار برند
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold mb-2" style={{ color: "#14C46B", fontWeight: 700 }}>
              فرآیند ما
            </p>
            <h2 className="font-black text-3xl sm:text-4xl" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
              از ایده تا تی‌شرت
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl relative"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="text-3xl mb-4">{step.icon}</div>
                <div
                  className="absolute top-5 left-5 w-7 h-7 rounded-full flex items-center justify-center font-black text-xs text-white"
                  style={{ background: "#14C46B", fontWeight: 900 }}
                >
                  {step.step}
                </div>
                <h3 className="font-black text-base mb-3" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
                  {step.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-bold mb-3" style={{ color: "#14C46B", fontWeight: 700 }}>
            ارزش‌های ما
          </p>
          <h2 className="font-black text-3xl sm:text-4xl mb-6" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
            اون چیزی که ما رو Henry Style می‌کنه
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
            {[
              { emoji: "🇮🇷", title: "هویت ایرانی", desc: "همه طرح‌ها از فرهنگ، تاریخ، و هنر ایران الهام می‌گیرن." },
              { emoji: "⭐", title: "کیفیت بالا", desc: "پارچه پرمیوم، چاپ ماندگار، دوخت حرفه‌ای — هیچ توضیحی لازم نداره." },
              { emoji: "🎨", title: "طراحی اختصاصی", desc: "هر طرح توسط طراحان ایرانی ساخته میشه. اینجا کپی نیست." },
            ].map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl text-center"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div className="text-4xl mb-4">{val.emoji}</div>
                <h3 className="font-black text-base mb-2" style={{ color: "var(--text-primary)", fontWeight: 900 }}>
                  {val.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
