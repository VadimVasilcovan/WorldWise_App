import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import PricingPage from "./pages/PricingPage";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <div>
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
