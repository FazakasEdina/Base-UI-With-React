import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import NavBar from './components/NavBar';

import MainPage from './components/MainPage';
import ProductsPage from './components/ProductsPage';
import ContactPage from './components/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={ <MainPage />} />
          <Route path="/products" element={ <ProductsPage />} />
          <Route path="/contact" element={ <ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}