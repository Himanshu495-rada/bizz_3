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
import Category from './pages/category/Category';
import SlidingForm from './pages/slidingform/SlidingForm';
import Checkout from './pages/checkout/Checkout';
import Buyer from './pages/dashboard/Buyer/Buyer';
import Seller from './pages/dashboard/Seller/Seller';
import Warehouse from './pages/dashboard/Warehouse/Warehouse';
import Warehouse_2 from './pages/dashboard/Warehouse/warehouse_2';
import ProfilePage from './pages/profile/profile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/login" element={SlidingForm()} />
        <Route path="/products" element={Products()} />
        <Route path="/about" element={About()} />
        <Route path="/contact" element={Contact()} />
        <Route path="/cart" element={Cart()} />
        <Route path="/compare" element={Compare()} />
        <Route path="/productdescription/:id" element={<ProductDescription />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/warehouse" element={<Warehouse_2 />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
