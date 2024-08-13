// import { configureStore } from "@reduxjs/toolkit"
// import CartSlice from "./CartSlice"
// import SearchSlice from "./SearchSlice"

// const Store =configureStore({
//     reducer:{
//         cart:CartSlice,
//         search:SearchSlice
//     }
// })
// export default Store

// src/redux/store.js



import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import cartReducer from './CartSlice';
import searchReducer from './SearchSlice';
import buyReducer from './BuySlice';
import userReducer from './UserSlice';
import wishlistReducer from './Wishlistslice';
import productsReducer from './productsSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    cart: cartReducer,
    search: searchReducer,
    buy: buyReducer,
    user: userReducer,
    wishlist: wishlistReducer, 
    products: productsReducer
  },
});

export default store;
