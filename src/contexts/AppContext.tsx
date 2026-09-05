import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Product } from "../data/products";

export type Page =
  | "home"
  | "shop"
  | "product"
  | "checkout"
  | "about"
  | "contact"
  | "login"
  | "signup";

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  colorLabel: string;
  quantity: number;
}

interface AppContextType {
  currentPage: Page;
  currentProductId: string | null;
  navigate: (page: Page, productId?: string) => void;
  isDark: boolean;
  toggleDark: () => void;
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateQuantity: (
    productId: string,
    size: string,
    color: string,
    delta: number
  ) => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [currentProductId, setCurrentProductId] = useState<string | null>(null);
  const [isDark, setIsDark] = useState<boolean>(() => {
  const saved = localStorage.getItem("theme");
  if (saved) return saved === "dark";
  return true;
});
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("theme", isDark ? "dark" : "light");
}, [isDark]);

  const navigate = (page: Page, productId?: string) => {
    setCurrentPage(page);
    setCurrentProductId(productId ?? null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleDark = () => setIsDark((d) => !d);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (i) =>
          i.product.id === item.product.id &&
          i.size === item.size &&
          i.color === item.color
      );
      if (existing) {
        return prev.map((i) =>
          i.product.id === item.product.id &&
          i.size === item.size &&
          i.color === item.color
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, size: string, color: string) => {
    setCartItems((prev) =>
      prev.filter(
        (i) =>
          !(
            i.product.id === productId &&
            i.size === size &&
            i.color === color
          )
      )
    );
  };

  const updateQuantity = (
    productId: string,
    size: string,
    color: string,
    delta: number
  ) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.product.id === productId && i.size === size && i.color === color
            ? { ...i, quantity: Math.max(0, i.quantity + delta) }
            : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = cartItems.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  return (
    <AppContext.Provider
      value={{
        currentPage,
        currentProductId,
        navigate,
        isDark,
        toggleDark,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
