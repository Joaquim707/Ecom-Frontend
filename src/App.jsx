import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "../pages/Home";
import Search from "../pages/Search";
import CategoryProducts from "../pages/CategoryProducts";
import MainCategories from "../pages/MainCategoires";
import CouponDrawer from "./components/CouponDrawer";
import ProductPage from "../pages/ProductPage";
import Footer from "./components/Footer";
import WishlistPage from "../pages/WishlistPage";
import ScrollToTop from "./components/ScrollToTop";
import LoginPage from "../pages/LoginPage";
import BagPage from "../pages/BagPage";
import AddressPage from "../pages/AddressPage";
import PaymentPage from "../pages/PaymentPage";
import OrderConfirmationPage from "../pages/OrderConfirmationPage";
import ProfilePage from "../pages/ProfilePage";

const App = () => {
  const location = useLocation();

  const hideCoupon =
    location.pathname === "/cart" ||
    location.pathname === "/wishlist" ||
    location.pathname.includes("/product/");

  const hideFooter = location.pathname === "/login";

  return (
    <>
      <Navbar />

      {!hideCoupon && <CouponDrawer />}

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/category/:slug" element={<CategoryProducts />} />
        <Route path="/category/men" element={<MainCategories />} />
        <Route path="/category/women" element={<MainCategories />} />
        <Route path="/category/kids" element={<MainCategories />} />
        <Route path="/category/home" element={<MainCategories />} />
        <Route path="/category/beauty" element={<MainCategories />} />
        <Route path="/category/genz" element={<MainCategories />} />
        <Route path="/category/studio" element={<MainCategories />} />

        <Route path="/product/:slug" element={<ProductPage />} />

        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<BagPage />} />

        <Route
          path="/order-confirmation/:orderId"
          element={<OrderConfirmationPage />}
        />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
};

export default App;
