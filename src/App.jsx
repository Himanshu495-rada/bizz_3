import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Cart from './pages/cart/Cart';
import Compare from './pages/compare/Compare';
import ProductDescription from './pages/productdescription/ProductDescription';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/products" element={Products()} />
        <Route path="/about" element={About()} />
        <Route path="/contact" element={Contact()} />
        <Route path="/cart" element={Cart()} />
        <Route path="/compare" element={Compare()} />
        <Route path="/productdescription/:id" element={<ProductDescription />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
