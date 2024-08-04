

// import { useMemo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "./Cart.css";
// import { incrementquantity, decrementquantity } from "../Redux/CartSlice";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.fullcart);
//   const dispatch = useDispatch();
//   const deliveryFees = 10;

//   const subtotal = useMemo(() => {
//     return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   }, [cartItems]);

//   const total = useMemo(() => {
//     return subtotal + deliveryFees;
//   }, [subtotal, deliveryFees]);

//   return (
//     <>
//       <h1>CART</h1>
//       <div className="totalcart">
//         {cartItems.length === 0 ? (
//           <p>Cart is empty</p>
//         ) : (
//           <div className="cart">
//             {cartItems.map((item) => (
//               <div key={item.id} className="cartitem">
//                 <img src={item.image} alt="loading" />
//                 <div className="item-details">
//                   <p>{item.title}</p>
//                   <div className="count">
//                     <button onClick={() => dispatch(decrementquantity(item))}>
//                       -
//                     </button>
//                     <p>{item.quantity}</p>
//                     <button onClick={() => dispatch(incrementquantity(item))}>
//                       +
//                     </button>
//                   </div>
//                   <button className="removebutton" onClick={()=>handleRemove(item)}>Remove</button>

//                 </div>
//               </div>
//             ))}
//           </div>
//         )} </div>
//         <div className="subtotal">
//           <p className="price">Subtotal: {subtotal.toFixed(2)}</p>
//           <p>Delivery fee: {deliveryFees}</p>
//           <p className="total">Total: {total.toFixed(2)}</p>
//           <button className="checkout-button">Checkout</button>
//         </div>
     
      
//     </>
//   );
// };

// export default Cart;


import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { incrementquantity, decrementquantity,removeFromCart } from "../Redux/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.fullcart);
  const dispatch = useDispatch();
  const deliveryFees = 10;

  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const total = useMemo(() => {
    return subtotal + deliveryFees;
  }, [subtotal, deliveryFees]);

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <>
      <h1>CART</h1>
      <div className="totalcart">
        <div className="cart-section">
          {cartItems.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <div className="cart">
              {cartItems.map((item) => (
                <div key={item.id} className="cartitem">
                  <img src={item.image} alt="loading" />
                  <div className="item-details">
                    <p>{item.title}</p>
                    <div className="count">
                      <button onClick={() => dispatch(decrementquantity(item))}>
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button onClick={() => dispatch(incrementquantity(item))}>
                        +
                      </button>
                    </div>
                    <button className="removebutton" onClick={() => handleRemove(item)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="subtotal">
          <p className="price">Subtotal: {subtotal.toFixed(2)}</p>
          <p>Delivery fee: {deliveryFees}</p>
          <p className="total">Total: {total.toFixed(2)}</p>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
