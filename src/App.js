import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sliders from "./components/Sliders/Sliders";
import OurProducts from "./components/OurProducts/OurProducts";
import HomeWeeklyOffer from "./components/HomeWeeklyOffer/HomeWeeklyOffer";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import SummerDiscount from "./components/SummerDiscount/SummerDiscount";
import SpecialSale from "./components/SpecialSale/SpecialSale";
import RecentlyViewedProducts from "./components/RecentlyViewedProducts/RecentlyViewedProducts";
import ContactUs from "./components/ContactUs/ContactUs";
import Cart from "./components/Cart/Cart";
import PaymentGateway from "./components/PaymentGateway/PaymentGateway";
import FAQs from "./components/FAQs/FAQs";
import UserProfile from "./components/UserProfile/UserProfile";
import ProductDetailPopup from "./components/ProductDetailPopup/ProductDetailPopup";
import ProductList from "./components/ProductList/ProductList";
import CategoryProducts from "./components/CategoryProducts/CategoryProducts";
import AboutUs from "./components/AboutUs/AboutUs";
import Blog from "./components/Blog/Blog";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import AdminDashboard from "./components/Admin Dashboard/AdminDashboard";
import AdminSignIn from "./components/AdminSignIn/AdminSignIn";
import UserOrders from "./components/UserOrders/UserOrders";

function Layout() {
  const location = useLocation();
  const hideHeaderFooter = ["/signin", "/signup", "/forgot", "/admin-dashboard", "/admin-signin"].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="*" element={<ScrollToTop />} />
        <Route
          path="/"
          element={
            <>
              <Sliders />
              <OurProducts />
              <HomeWeeklyOffer />
              <FeaturedProducts />
              <SummerDiscount />
              <SpecialSale />
              <RecentlyViewedProducts />
            </>
          }
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/paymentgateway" element={<PaymentGateway />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/category/:categoryName" element={<CategoryProducts />} />
        <Route path="/productdetail" element={<ProductDetailPopup />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-signin" element={<AdminSignIn />} />
        <Route path="/user-order" element={<UserOrders/>} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
