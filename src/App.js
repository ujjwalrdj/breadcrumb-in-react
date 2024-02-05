import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import Home from './pages/home';
import ProductDetails from './pages/product-details';
import ProductListing from './pages/product-listing';
import BreadCrumb from './component/breadcrumb';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <BreadCrumb />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
