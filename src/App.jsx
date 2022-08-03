import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import AboutUs from './components/AboutUs';
import Map from './components/Map';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Carousel />
      <AboutUs />
      <Map />
      <Footer />
    </BrowserRouter>
  );
}