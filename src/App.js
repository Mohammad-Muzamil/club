import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Gallery from "./pages/gallery/gallery";
import ContactUs from "./pages/contactus/contactus";
import AboutUs from "./pages/aboutus/aboutus";
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
import ProtectedRoutes from "./ProtectedRoutes";

import CoachHome from "./pages/instructor_panel/CoachHome"
import CoachChangePassword from "./pages/instructor_panel/CoachChangePassword"
import CoachProfile from "./pages/instructor_panel/CoachProfile"
import CoachAttendance from "./pages/instructor_panel/CoachAttendance"
import CoachFightResult from "./pages/instructor_panel/CoachFightResult"
import CoachApproval from "./pages/instructor_panel/CoachApproval"
import CoachDeletePlayerAccount from "./pages/instructor_panel/CoachDeletePlayerAccount"
import Kata from "./pages/instructor_panel/Kata"
import Kumite from "./pages/instructor_panel/Kumite"

import AdminHome from "./pages/admin_panel/AdminHome"
import AdminProfile from "./pages/admin_panel/AdminProfile"
import AdminChangePassword from "./pages/admin_panel/AdminChangePassword"
import AdminBranches from "./pages/admin_panel/AdminBranches"
import AdminCoaches from "./pages/admin_panel/AdminCoaches";
import AdminKata from "./pages/admin_panel/Kata";
import AdminKumite from "./pages/admin_panel/Kumite";
import AdminDeletePlayerAccount from "./pages/admin_panel/AdminDeletePlayerAccount"
import AdminApproval from "./pages/admin_panel/AdminApproval"
import AdminAttendance from"./pages/admin_panel/AdminAttendance"
import AdminFight from"./pages/admin_panel/AdminFight"
import AdminGallery from"./pages/admin_panel/AdminGallery"
import AdminFees from"./pages/admin_panel/AdminFees"


const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/branch" element={<Branch />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="*" element={<Page404 />} />
        
        <Route path="/coach" element={<CoachHome />} />
        <Route path="/coach-change-password" element={<CoachChangePassword />} />
        <Route path="/coach-profile" element={<CoachProfile />} />
        <Route path="/coach-attendance" element={<CoachAttendance />} />
        <Route path="/coach-fight-result" element={<CoachFightResult />} />
        <Route path="/coach-approval" element={<CoachApproval />} />
        <Route path="/coach-delete-player-account" element={<CoachDeletePlayerAccount />}/>
        <Route path="/coach-kumite" element={<Kumite />} />
        <Route path="/coach-kata" element={<Kata />} />

        <Route path="/admin" element={<AdminHome/>}/>
        <Route path="/admin-profile" element={<AdminProfile/>}/>
        <Route path="/admin-change-password" element={<AdminChangePassword/>}/>
        <Route path="/admin-branches" element={<AdminBranches/>}/>
        <Route path="/admin-coaches" element={<AdminCoaches/>}/>
        <Route path="/admin-kata" element={<AdminKata/>}/>
        <Route path="/admin-kumite" element={<AdminKumite/>}/>
        <Route path="/admin-delete-account" element={<AdminDeletePlayerAccount />}/>
        <Route path="/admin-approval" element={<AdminApproval />}/>
        <Route path="/admin-attendance" element={<AdminAttendance />}/>
        <Route path="/admin-fight-result" element={<AdminFight />}/>
        <Route path="/admin-gallery" element={<AdminGallery />}/>
        <Route path="/admin-fees" element={<AdminFees />}/>


      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};
export default connect()(App);