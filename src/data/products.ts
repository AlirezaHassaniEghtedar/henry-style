export interface Product {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  image: string;
  images: string[];
  sizes: string[];
  colors: string[];
  colorLabels: string[];
  badge?: "new" | "sale" | "bestseller";
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

const B = "https://images.unsplash.com";

export const products: Product[] = [
  {
    id: "behrooz",
    name: "تی‌شرت بهروز وثوقی",
    category: "cinema",
    categoryLabel: "نوستالژی سینما",
    price: 385000,
    description:
      "طرح اختصاصی از چهره ماندگار سینمای ایران — بهروز وثوقی، افسانه‌ای که هیچ‌وقت فراموش نمی‌شه. گرافیک هنری روی پارچه ۱۰۰٪ پنبه پرمیوم با چاپ DTF ماندگار.",
    features: [
      "۱۰۰٪ پنبه رینگ‌اسپان ۲۴۰ گرم",
      "چاپ DTF ماندگار و واشر‌پذیر",
      "یقه گرد مقاوم با تیپ‌بند",
      "دوخت دوزیگزاگ دوجداره",
    ],
    image: "/images/behrooz.webp",
    images: [
      "/images/behrooz.webp",
      "/images/behrooz.webp",
      "/images/behrooz.webp",
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["#1a1a1a", "#f5f5f0", "#1d3a24"],
    colorLabels: ["مشکی", "سفید", "سبز جنگلی"],
    badge: "bestseller",
    inStock: true,
    rating: 4.9,
    reviewCount: 127,
  },
  {
    id: "mahasti",
    name: "تی‌شرت ماهستی",
    category: "music",
    categoryLabel: "نوستالژی موسیقی",
    price: 350000,
    originalPrice: 420000,
    description:
      "صدای طلایی موسیقی ایران روی یه تی‌شرت بی‌نظیر. طرح گرافیکی هنری با الهام از دوران طلایی موسیقی پاپ ایران — یه قطعه از تاریخ روی پوشاک.",
    features: [
      "۱۰۰٪ پنبه رینگ‌اسپان ۲۴۰ گرم",
      "چاپ DTF ماندگار و واشر‌پذیر",
      "یقه گرد مقاوم با تیپ‌بند",
      "دوخت دوزیگزاگ دوجداره",
    ],
    image: "/images/mahasti.webp",
    images: [
      "/images/mahasti.webp",
      "/images/mahasti.webp",
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["#1a1a1a", "#f5f5f0"],
    colorLabels: ["مشکی", "سفید"],
    badge: "sale",
    inStock: true,
    rating: 4.7,
    reviewCount: 89,
  },
  {
    id: "faravahar",
    name: "تی‌شرت فروهر",
    category: "national",
    categoryLabel: "هویت ملی",
    price: 395000,
    description:
      "نماد باستانی ایران در قالب گرافیک مدرن. فروهر، نشانه‌ای که هویت ما رو به گذشته‌مون وصل می‌کنه. برای کسی که به ریشه‌هاش افتخار می‌کنه.",
    features: [
      "۱۰۰٪ پنبه رینگ‌اسپان ۲۴۰ گرم",
      "چاپ DTF ماندگار و واشر‌پذیر",
      "یقه گرد مقاوم با تیپ‌بند",
      "دوخت دوزیگزاگ دوجداره",
    ],
    image: "/images/farvehar.webp",
    images: [
      "/images/farvehar.webp",
      "/images/farvehar.webp",
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["#1a1a1a", "#6b3a1a", "#f5f5f0"],
    colorLabels: ["مشکی", "قهوه‌ای شاهی", "سفید"],
    badge: "new",
    inStock: true,
    rating: 4.8,
    reviewCount: 64,
  },
  {
    id: "peykan",
    name: "تی‌شرت پیکان",
    category: "car",
    categoryLabel: "رترو خودرو",
    price: 360000,
    description:
      "ماشین ملی ایران، افسانه‌ای که تو دل همه ایرانی‌هاست. گرافیک رترو پیکان روی یه تی‌شرت که داستان می‌گه — خاطره، هویت، و سبک.",
    features: [
      "۱۰۰٪ پنبه رینگ‌اسپان ۲۴۰ گرم",
      "چاپ DTF ماندگار و واشر‌پذیر",
      "یقه گرد مقاوم با تیپ‌بند",
      "دوخت دوزیگزاگ دوجداره",
    ],
    image: "/images/peykan.webp",
    images: [
      "/images/peykan.webp",
      "/images/peykan.webp",
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["#1a1a1a", "#f5f5f0", "#1a2e4a"],
    colorLabels: ["مشکی", "سفید", "سرمه‌ای"],
    badge: "new",
    inStock: true,
    rating: 4.9,
    reviewCount: 203,
  },
  {
    id: "pioneer",
    name: "تی‌شرت Pioneer کاست",
    category: "retro",
    categoryLabel: "رترو تک",
    price: 340000,
    description:
      "نوستالژی موسیقی آنالوگ. Pioneer و کاست‌های قدیمی — خاطره‌ای که هیچ‌وقت از مد نمی‌افته. برای کسی که موسیقی رو با تمام وجودش حس می‌کنه.",
    features: [
      "۱۰۰٪ پنبه رینگ‌اسپان ۲۴۰ گرم",
      "چاپ DTF ماندگار و واشر‌پذیر",
      "یقه گرد مقاوم با تیپ‌بند",
      "دوخت دوزیگزاگ دوجداره",
    ],
    image: "/images/pioneer.webp",
    images: [
      "/images/pioneer.webp",
      "/images/pioneer.webp",
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["#1a1a1a", "#f5f5f0"],
    colorLabels: ["مشکی", "سفید"],
    inStock: true,
    rating: 4.6,
    reviewCount: 78,
  },
  {
    id: "dragon",
    name: "تی‌شرت اژدها",
    category: "street",
    categoryLabel: "استریت/اسپرت",
    price: 370000,
    description:
      "طرح اژدهای خشمگین برای کسی که می‌خواد تو جمع دیده بشه. استریت‌ویر اصیل برای روح‌های آزاد — بولد، شجاع، بی‌پروا.",
    features: [
      "۱۰۰٪ پنبه رینگ‌اسپان ۲۴۰ گرم",
      "چاپ DTF ماندگار و واشر‌پذیر",
      "یقه گرد مقاوم با تیپ‌بند",
      "دوخت دوزیگزاگ دوجداره",
    ],
    image: "/images/dragon.webp",
    images: [
      "/images/dragon.webp",
      "/images/dragon.webp",
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["#1a1a1a", "#7a0000"],
    colorLabels: ["مشکی", "قرمز تیره"],
    badge: "new",
    inStock: true,
    rating: 4.8,
    reviewCount: 156,
  },
  {
    id: "football",
    name: "تی‌شرت فوتبال نظامی‌استایل",
    category: "street",
    categoryLabel: "استریت/اسپرت",
    price: 355000,
    description:
      "ترکیب روح ورزش و استایل نظامی — یه طرح بی‌نظیر که انرژی و قدرت رو نشون می‌ده. برای کسی که هم به فوتبال عشق داره، هم به استایل.",
    features: [
      "۱۰۰٪ پنبه رینگ‌اسپان ۲۴۰ گرم",
      "چاپ DTF ماندگار و واشر‌پذیر",
      "یقه گرد مقاوم با تیپ‌بند",
      "دوخت دوزیگزاگ دوجداره",
    ],
    image: "/images/soldier.webp",
    images: [
      "/images/soldier.webp",
      "/images/soldier.webp",
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["#1a1a1a", "#2d4a1a", "#f5f5f0"],
    colorLabels: ["مشکی", "سبز نظامی", "سفید"],
    inStock: true,
    rating: 4.5,
    reviewCount: 93,
  },
  {
    id: "tatlises",
    name: "تی‌شرت ابراهیم تاتلیس",
    category: "music",
    categoryLabel: "نوستالژی موسیقی",
    price: 360000,
    originalPrice: 400000,
    description:
      "ابراهیم تاتلیس، صدایی که مرز نمی‌شناسه. این طرح به همه‌ی خاطرات موسیقی مشترک ما تقدیم می‌شه — برای کسی که عاشق موسیقی اصیل‌ه.",
    features: [
      "۱۰۰٪ پنبه رینگ‌اسپان ۲۴۰ گرم",
      "چاپ DTF ماندگار و واشر‌پذیر",
      "یقه گرد مقاوم با تیپ‌بند",
      "دوخت دوزیگزاگ دوجداره",
    ],
    image: "/images/ibram.webp",
    images: [
      "/images/ibram.webp",
      "/images/ibram.webp",
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["#1a1a1a", "#f5f5f0"],
    colorLabels: ["مشکی", "سفید"],
    badge: "sale",
    inStock: true,
    rating: 4.7,
    reviewCount: 112,
  },
];

export const categories = [
  {
    id: "cinema",
    label: "نوستالژی سینما",
    emoji: "🎬",
    image: "/images/behrooz.webp",
  },
  {
    id: "car",
    label: "رترو خودرو",
    emoji: "🚗",
    image: "/images/peykan.webp",
  },
  {
    id: "national",
    label: "فروهر و هویت ملی",
    emoji: "🦅",
    image: "/images/farvehar.webp",
  },
  {
    id: "street",
    label: "استریت و اسپرت",
    emoji: "🔥",
    image: "/images/soldier.webp",
  },
];

export const reviews = [
  {
    id: 1,
    name: "علی رضایی",
    rating: 5,
    text: "واقعاً کیفیت پارچه عالیه. تی‌شرت بهروز وثوقی رو گرفتم، خیلی خوشم اومد. چاپ واضح و ماندگاریه.",
    product: "تی‌شرت بهروز وثوقی",
    date: "۱۴۰۳/۰۶/۱۲",
  },
  {
    id: 2,
    name: "سارا محمدی",
    rating: 5,
    text: "دیزاین‌ها واقعاً خلاقانه‌ان. کلی از دوستام پرسیدن از کجا گرفتم. ارسال هم سریع بود.",
    product: "تی‌شرت فروهر",
    date: "۱۴۰۳/۰۶/۰۸",
  },
  {
    id: 3,
    name: "محمد کریمی",
    rating: 5,
    text: "تی‌شرت پیکان رو برای یه هدیه گرفتم. دوستم عاشقش شد! بسته‌بندی هم شیک بود.",
    product: "تی‌شرت پیکان",
    date: "۱۴۰۳/۰۵/۲۹",
  },
  {
    id: 4,
    name: "نیلوفر احمدی",
    rating: 4,
    text: "خیلی راضیم. سایزبندی دقیقه. فقط آرزو می‌کنم رنگ‌های بیشتری داشته باشه.",
    product: "تی‌شرت ماهستی",
    date: "۱۴۰۳/۰۵/۱۷",
  },
];

export function formatPrice(price: number): string {
  return price.toLocaleString("fa-IR") + " تومان";
}
