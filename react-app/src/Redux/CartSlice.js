// import { createSlice } from "@reduxjs/toolkit"

// const cartSlice=createSlice({
//     name: "cart",
//     initialState:{
//         count : 0
//     },
//     reducers:{
//        addtocart: (state, action)=>{
//           state.count += action.payload;
//        },
//        decrement: () => {},
//     }

// })
// export const {addtocart , decrement} = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice(
  {
    name: "cart",
    initialState: {
      fullcart: []

    },
    reducers: {
      addtocart: (state, action) => {
        if(state.fullcart.find(item=>item.title===action.payload.title)===undefined)
            state.fullcart.push({ ...action.payload, quantity: 1 })
      },
      incrementquantity: (state, action) => {
        state.fullcart = state.fullcart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })},
        decrementquantity: (state, action) => {
          state.fullcart = state.fullcart.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: item.quantity -1}
            } else {
              return item
            }
          })},
          removeFromCart:(state,action)=>{
            state.fullcart=state.fullcart.filter(item=>item.id!==action.payload.id)
          },
          increment: (state) => {
            // Define the increment action logic here
          }
    }
  }
)
export const { addtocart, incrementquantity ,decrementquantity,removeFromCart,increment} = CartSlice.actions
export default CartSlice.reducer