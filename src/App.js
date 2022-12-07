
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home"



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
