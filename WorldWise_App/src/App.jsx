import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Pricing from "./pages/Pricing";
import CityList from "./assets/components/CityList";
import CountryList from "./assets/components/CountriesList";
import City from "./assets/components/City";
import Form from "./assets/components/Form";
import { CitiesProvider,  } from "./assets/contexts/CityContexts";

export default function App() {
  return (
    <div>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />

            <Route path="app" element={<AppLayout />}>
              {/* index used for default path like "/" at Homepage*/}
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              {/* Dynamic Routes With URL Parameters */}
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </div>
  );
}
