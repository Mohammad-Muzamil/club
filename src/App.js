
import React, {  lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home"
// const Home = lazy(() => import("./pages/home/Home"));



const App = (props) => {

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" 

      element={<Home/>}>
  
      </Route>
    </Routes>
  </BrowserRouter>
 
  );
};


export default App;
