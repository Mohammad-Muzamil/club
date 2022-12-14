
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home"
import Payments from "../src/pages/home/Payments"
import Faqs from "../src/pages/home/FAQs"
import PrivacyPolicy from "../src/pages/home/PrivacyPolicy"
import ReturnPolicy from "../src/pages/home/ReturnPolicy"
import TermsOfServices from "../src/pages/home/TermsOfServices"
import ShoeSizeGuide from "../src/pages/home/ShoesSizeGuide"

const App = (props) => {

  return (

    <BrowserRouter>
    <Routes>
      
      <Route path="/" 
      element={<Home/>}>
      </Route>

      <Route path="/payments" 
      element={<Payments/>}>
      </Route>
      
      <Route path="/faqs" 
      element={<Faqs/>}>
      </Route>

      <Route path="/privacypolicy" 
      element={<PrivacyPolicy/>}>
      </Route>

      <Route path="/returnpolicy" 
      element={<ReturnPolicy/>}>
      </Route>

      <Route path="/termsofservices" 
      element={<TermsOfServices/>}>
      </Route>

      <Route path="/shoesizeguide" 
      element={<ShoeSizeGuide/>}>
      </Route>

    </Routes>
  </BrowserRouter>
 
  );
};


export default App;
