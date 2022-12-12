import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Brands from "./pages/brands/brands";
import BrandProducts from "./pages/brand-products/brand-products";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/brands" element={<Brands />}></Route>
        <Route path="/brands-products" element={<BrandProducts />}></Route>
        <Route path="/specific-brand-products" element={<BrandProducts />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
