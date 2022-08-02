import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer';
import NavBar from './components/NavBar';


export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        Hello World!
      </main>
      <Footer />
    </BrowserRouter>
  );
}