import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Gallery from "./pages/gallery/gallery";
import BrandProducts from "./pages/brand-products/brand-products";
import Product from "./pages/product/product";
import AddCart from "./pages/AddCart/AddCart";
import CheckOut from "./pages/checkout/checkout";
import PaymentDetails from "./pages/paymentdetails/paymentdetails";
import ContactUs from "./pages/contactus/contactus";
import AboutUs from "./pages/aboutus/aboutus";
import Payments from "../src/pages/home/Payments"
import Faqs from "../src/pages/home/FAQs"
import Login from "./pages/login/login";
import OTP from "./pages/otp/otp";
import Page404 from "../src/pages/page404/Page404";
import ForgetPassword from "./pages/forget_password/forget_password";
import SignUp from "./pages/signup/signup";
import Branch from "./pages/branch/branch"
import Testing from "./pages/Testing";
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CoachHome from "./pages/instructor_panel/CoachHome"
import CoachChangePassword from "./pages/instructor_panel/CoachChangePassword"
import CoachProfile from "./pages/instructor_panel/CoachProfile"
import CoachAttendance from "./pages/instructor_panel/CoachAttendance"
import CoachFightResult from "./pages/instructor_panel/CoachFightResult"
import CoachApproval from "./pages/instructor_panel/CoachApproval"
import CoachDeletePlayerAccount from "./pages/instructor_panel/CoachDeletePlayerAccount"
import Kata from "./pages/instructor_panel/Kata"
import Kumite from "./pages/instructor_panel/Kumite"

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/brands-products/:product_id" element={<BrandProducts />}></Route>
        <Route path="/specific-brand-products/:productvarient_id" element={<BrandProducts />}></Route>
        <Route path="/product/:product_id" element={<Product />}></Route>
        <Route path="/cart" element={<AddCart />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/checkout/:voucher_code" element={<CheckOut />}></Route>
        <Route path="/paymentdetails" element={<PaymentDetails />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/payments" element={<Payments />}></Route>
        <Route path="/faqs" element={<Faqs />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword/>}></Route>
        <Route path="/otp" element={<OTP/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/branch" element={<Branch/>}></Route>
        <Route path="/testing" element={<Testing/>}></Route>
        <Route path="*" element={<Page404/>}></Route>
          
        <Route path="/coach" element={<CoachHome />}></Route>
        <Route path="/coach-change-password" element={<CoachChangePassword />}></Route>        
        <Route path="/coach-profile" element={<CoachProfile />}></Route>        
        <Route path="/coach-attendance" element={<CoachAttendance />}></Route>        
        <Route path="/coach-fight-result" element={<CoachFightResult />}></Route>        
        <Route path="/coach-approval" element={<CoachApproval />}></Route>        
        <Route path="/coach-delete-player-account" element={<CoachDeletePlayerAccount />}></Route>        
        <Route path="/coach-kumite" element={<Kumite />}></Route>        
        <Route path="/coach-kata" element={<Kata />}></Route>        

      </Routes>
      <ToastContainer /> 
    </BrowserRouter>
  );
};

export default connect()(App);
