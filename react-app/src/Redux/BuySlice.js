import { createSlice } from "@reduxjs/toolkit";
const buySlice=createSlice({
    name:'buy',
    initialState:{
        buy:false
    },
    reducers:{
        buyNow:(state,action)=>{
            state.buy=true
        }
    } 
})
export default buySlice.reducer
export const {buyNow}=buySlice.actions