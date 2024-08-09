// import React, { useEffect, useState } from 'react';
// import { Provider, useDispatch } from 'react-redux';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import store from './Redux/store';
// import { setUsers, setSellers } from './Redux/UserSlice';
// import Header from './Components/Header';
// import Login from './Components/Login';
// import Signup from './Components/Signup';
// import Products from './Components/Products';
// import Cart from './Components/Cart';
// import About from './Components/About';
// import Buy from './Components/Buy';
// import Search from './Components/Search';
// import ProductDetails from './Components/ProductDetails';
// import Admin from './Components/admin';
// import { PRODUCTS } from './constants';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const App = () => {
//   const [cart, setCart] = useState([]);
//   const location = useLocation();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('/data.json');
//       const data = await response.json();
//       dispatch(setUsers(data.users));
//       dispatch(setSellers(data.sellers));
//     };

//     fetchData();
//   }, [dispatch]);
//   const hideHeaderPaths = ['/', '/signup'];
//   return (
//     // <Provider store={store}>
//     <>
//     {/* <Header cart={cart} /> */}
//     {!hideHeaderPaths.includes(location.pathname) && <Header cart={cart} />}
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/home" element={<Products items={PRODUCTS} cart={cart} setCart={setCart} />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/buy" element={<Buy />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/admin" element={<Admin />} />
//       </Routes>
//       <ToastContainer />
//     {/* </Provider> */}
//       </>

//   );
// };

// export default App;

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { setUsers, setSellers } from './Redux/UserSlice';
import Header from './Components/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Products from './Components/Products';
import Cart from './Components/Cart';
import About from './Components/About';
import Buy from './Components/Buy';
import Search from './Components/Search';
import CourseDetail from './Components/CourseDetail'; 
import ProductDetails from './Components/ProductDetails';
import Admin from './Components/admin';
import { PRODUCTS } from './constants';
import { ToastContainer } from 'react-toastify';
import Wishlist from './Components/Wishlist';
import MyCourses from './Components/Mycourses';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      dispatch(setUsers(data.users));
      dispatch(setSellers(data.sellers));
    };

    fetchData();
  }, [dispatch]);

  const hideHeaderPaths = ['/', '/signup'];

  return (
    <>
      {!hideHeaderPaths.includes(location.pathname) && <Header cart={cart} />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Products items={PRODUCTS} cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/mycourses" element={<MyCourses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
