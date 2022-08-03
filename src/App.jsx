import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Carousel />
      <Footer />
    </BrowserRouter>
  );
}