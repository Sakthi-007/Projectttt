
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Products from './Components/Products';
import Cart from './Components/Cart';
import About from './Components/About';
import Buy from './Components/Buy';
import Search from './Components/Search';
import ProductDetails from './Components/ProductDetails';
import { PRODUCTS } from './constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Provider store={store}>
         
      <Header cart={cart} />
      
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Products items={PRODUCTS} cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        
      </Routes>
      <ToastContainer />

    </Provider>
  );
};

export default App;
