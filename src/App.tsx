import React, { useEffect } from "react";
import { AppProvider, useApp } from "./contexts/AppContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function AppShell() {
  const { currentPage } = useApp();

  const noFooterPages = ["login", "signup", "checkout"];
  const noHeaderPages: string[] = [];
  const fullBleedPages = ["home"];

  const showHeader = !noHeaderPages.includes(currentPage);
  const showFooter = !noFooterPages.includes(currentPage);

  const pageComponents: Record<string, React.ReactNode> = {
    home: <HomePage />,
    shop: <ShopPage />,
    product: <ProductPage />,
    checkout: <CheckoutPage />,
    about: <AboutPage />,
    contact: <ContactPage />,
    login: <LoginPage />,
    signup: <SignupPage />,
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ background: "var(--bg)" }}
      dir="rtl"
    >
      {showHeader && <Header />}
      <main className="flex-1">
        {pageComponents[currentPage] ?? <HomePage />}
      </main>
      {showFooter && <Footer />}
      <CartDrawer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}
