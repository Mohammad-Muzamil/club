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
import Drawzinglogin from "./pages/drawzing/drawzinglogin";
import RegisterTeam from "./pages/drawzing/RegisterTeam";
import Drawzing from "./pages/drawzing/drawzing";
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from "./ProtectedRoutes";

import CoachHome from "./pages/instructor_panel/CoachHome"
import CoachChangePassword from "./pages/instructor_panel/CoachChangePassword"
import CoachProfile from "./pages/instructor_panel/CoachProfile"
import CoachPlayersProfiles from "./pages/instructor_panel/CoachPlayersProfiles"
import CoachAttendance from "./pages/instructor_panel/CoachAttendance"
import CoachFightResult from "./pages/instructor_panel/CoachFightResult"
import CoachApproval from "./pages/instructor_panel/CoachApproval"
import CoachDeletePlayerAccount from "./pages/instructor_panel/CoachDeletePlayerAccount"
import Kata from "./pages/instructor_panel/Kata"
import Kumite from "./pages/instructor_panel/Kumite"
import CoachSendEmailAttendance from"./pages/instructor_panel/CoachSendEmailAttendance"


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
import CoachFees from"./pages/instructor_panel/CoachFees"
import AdminEvents from"./pages/admin_panel/AdminEvents"
import AdminCompetition from"./pages/admin_panel/AdminCompetition"
import AdminSendAttendance from"./pages/admin_panel/AdminSendAttendance"

import StudentHome from "./pages/student_panel/StudentHome"
import StudentProfile from "./pages/student_panel/StudentProfile"
import StudentChangePassword from "./pages/student_panel/StudentChangePassword"
import StudentKata from "./pages/student_panel/Kata"
import Studentkumite from "./pages/student_panel/Kumite"
import StudentAttendance from "./pages/student_panel/StudentAttendance";
import StudentFight from "./pages/student_panel/StudentFight";

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
        <Route path="/drawzinglogin" element={<Drawzinglogin />} />
        <Route path="/drawzing" element={<Drawzing />} />
        <Route path="/teamregistration" element={<RegisterTeam />} />
  
      
        
        <Route path="/coach" element={<CoachHome />} />
        <Route path="/coach-change-password" element={<CoachChangePassword />} />
        <Route path="/coach-profile" element={<CoachProfile />} />
        <Route path="/coach-players-profiles" element={<CoachPlayersProfiles />} />
        <Route path="/coach-attendance" element={<CoachAttendance />} />
        <Route path="/coach-fight-result" element={<CoachFightResult />} />
        <Route path="/coach-fees" element={<CoachFees />}/>

        <Route path="/coach-approval" element={<CoachApproval />} />
        <Route path="/coach-delete-player-account" element={<CoachDeletePlayerAccount />}/>
        <Route path="/coach-kumite" element={<Kumite />} />
        <Route path="/coach-kata" element={<Kata />} />
        <Route path="/coach-send-attendance" element={<CoachSendEmailAttendance />} />

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
        <Route path="/admin-events" element={<AdminEvents />}/>
        <Route path="/admin-competition" element={<AdminCompetition />}/>
        <Route path="/admin-send-attendance" element={<AdminSendAttendance />}/>

        <Route path="/student" element={<StudentHome/>}/>
        <Route path="/student-profile" element={<StudentProfile/>}/>
        <Route path="/student-change-password" element={<StudentChangePassword/>}/>
        <Route path="/student-kata" element={<StudentKata/>}/>
        <Route path="/student-kumite" element={<Studentkumite/>}/>
        <Route path="/student-attendance" element={<StudentAttendance/>}/>
        <Route path="/student-fight-result" element={<StudentFight/>}/>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};
export default connect()(App);