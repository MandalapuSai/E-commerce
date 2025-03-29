import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";
import OurProductsAndOffer from "./components/OurProductsAndOffer/OurProductsAndOffer";
import HomeFeaturedProducts from "./components/HomeFeaturedProducts/HomeFeaturedProducts";
import SummerDiscount from "./components/SummerDiscount/SummerDiscount";
import SpecialSale from "./components/SpecialSale/SpecialSale";
import About from "./components/About/About";
import ProductList from "./components/ProductList/ProductList";
import CategoryProducts from "./components/CategoryProducts/CategoryProducts";
import Blog from "./components/Blog/Blog";
import Faqs from "./components/Faqs/Faqs";
import ContactUs from "./components/ContactUs/ContactUs";
import Cart from "./components/Cart/Cart";
import UserProfile from "./components/UserProfile/UserProfile";
import UserOrders from "./components/UserOrders/UserOrders";


import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

import AdminSignIn from "./components/AdminSignIn/AdminSignIn";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import PaymentGateway from "./components/PaymentGateway/PaymentGateway";

function Layout({ children }) {
  const location = useLocation();

  // List the paths where header and footer should be hidden
  const hideHeaderFooterPaths = ["/signin", "/signup", "/forgot-password", "/admin-signin", "/admin-dashboard"];
  const shouldHideHeaderFooter = hideHeaderFooterPaths.includes(
    location.pathname
  );

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <ToastContainer autoClose={1000} />
      {children}
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <OurProductsAndOffer />
                <HomeFeaturedProducts />
                <SummerDiscount />
                <SpecialSale />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/productList" element={<ProductList />} />
          <Route
            path="/category/:categoryName"
            element={<CategoryProducts />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/paymentgateway" element={<PaymentGateway />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/user-orders" element={<UserOrders />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/admin-signin" element={<AdminSignIn />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
