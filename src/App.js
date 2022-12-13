import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Brands from "./pages/brands/brands";
import BrandProducts from "./pages/brand-products/brand-products";
import Product from "./pages/product/product";
import AddCart from "./pages/AddCart/AddCart";
import CheckOut from "./pages/checkout/checkout";
import PaymentDetails from "./pages/paymentdetails/paymentdetails";
import ContactUs from "./pages/contactus/contactus";
import AboutUs from "./pages/aboutus/aboutus";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/brands" element={<Brands />}></Route>
        <Route path="/brands-products" element={<BrandProducts />}></Route>
        <Route path="/specific-brand-products" element={<BrandProducts />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/add-cart" element={<AddCart />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/paymentdetails" element={<PaymentDetails />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
