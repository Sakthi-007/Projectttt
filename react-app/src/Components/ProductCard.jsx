// import React from'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { addtocart } from "../Redux/CartSlice";
// import CartSlice from "../Redux/CartSlice.js";
// import { useNavigate,Link } from 'react-router-dom';
// import { buyNow } from '../Redux/BuySlice.js';
// import { toast } from 'react-toastify';

// const ProductCard=({product,cart,setCart})=>{

//     const dispatch=useDispatch()
//     const navigate = useNavigate();

//     const getStars = (rating) => {
//         const fullStars = '★'.repeat(Math.floor(rating));
//         const emptyStars = '☆'.repeat(5 - Math.floor(rating));
//         return fullStars + emptyStars;
//     };
//     const cartItems=useSelector((state)=>state.cart.fullcart)

//     const handleaddtocart=(product)=>{ try {
//         // Add product to cart
//         setCart([...cart, product]);
//         dispatch(addtocart(product));
//         // Display success toast
//         toast.success(`${product.title} added to cart!`);
//       } catch (error) {
//         // Display error toast
//         toast.error(`Failed to add ${product.title} to cart.`);
//       }
    
//     };

//     const isInCart=(productId)=>{
//         return cartItems.some((item)=>item.id===productId)
//     }
//     const handleBuy=(product)=>{
//         dispatch(buyNow(product));
//         navigate('/buy',{state:{product}})
//     }
//     return(
//         <div className="box" >
//                     <Link to={`/product/${product.id}`}>

//             <div className="image" key={product.id}>
//                 <img src={product.image} alt="product" />
                
//             </div>
//             </Link>
//             <div className="des1">
//                 <h2>{product.title}</h2>
//                 <h3>{product.category}</h3>
//             </div>
//             <div className="des2">
//                 <h4>{getStars(product.rating.rate)}</h4>
//                 <h3><b>Price ${product.price}</b></h3>
//                 <p>{product.description}</p> 
//             </div>
//             <div className="cart">
//                {isInCart(product.id)?(
//                 <button onClick={()=>navigate('/cart')}>Go To Cart</button>
//                ):(
//                 <button onClick={()=>handleaddtocart(product)}>Add to cart</button>
//                )
//             }
//                 <button onClick={()=>handleBuy(product)}>Buy Now</button>
//             </div>
           
//         </div>
//     )
// }

// export default ProductCard;


// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addtocart } from "../Redux/CartSlice";
// import { useNavigate, Link } from 'react-router-dom';
// import { buyNow } from '../Redux/BuySlice';
// import { toast } from 'react-toastify';
// import './ProductCard.css';

// const ProductCard = ({ product, cart, setCart }) => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const getStars = (rating) => {
//         const fullStars = '★'.repeat(Math.floor(rating));
//         const emptyStars = '☆'.repeat(5 - Math.floor(rating));
//         return fullStars + emptyStars;
//     };

//     const cartItems = useSelector((state) => state.cart.fullcart);

//     const handleAddToCart = (product) => {
//         try {
//             setCart([...cart, product]);
//             dispatch(addtocart(product));
//             toast.success(`${product.title} added to cart!`);
//         } catch (error) {
//             toast.error(`Failed to add ${product.title} to cart.`);
//         }
//     };

//     const isInCart = (productId) => {
//         return cartItems.some((item) => item.id === productId);
//     };

//     const handleBuy = (product) => {
//         dispatch(buyNow(product));
//         navigate('/buy', { state: { product } });
//     };

//     return (
//         <div className="box">
//             <div className="card">
//                 <div className="card__side card__side--front">
//                     <Link to={`/product/${product.id}`}>
//                         <div className="image">
//                             <img src={product.image} alt="product" />
//                         </div>
//                     </Link>
//                     <div className="des1">
//                         <h2>{product.title}</h2>
//                         <h3>{product.category}</h3>
//                     </div>
//                 </div>
//                 <div className="card__side card__side--back">
//                     <div className="des2">
//                         <h4>{getStars(product.rating.rate)}</h4>
//                         <h3><b>Price ${product.price}</b></h3>
//                         <p>{product.description}</p> 
//                     </div>
//                     <div className="cart">
//                         {isInCart(product.id) ? (
//                             <button onClick={() => navigate('/cart')}>Go To Cart</button>
//                         ) : (
//                             <button onClick={() => handleAddToCart(product)}>Add to cart</button>
//                         )}
//                         <button onClick={() => handleBuy(product)}>Buy Now</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;
// src/Components/ProductCard.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from "../Redux/CartSlice";
import { useNavigate, Link } from 'react-router-dom';
import { buyNow } from '../Redux/BuySlice';
import { toast } from 'react-toastify';
import './ProductCard.css';

const ProductCard = ({ product, cart, setCart }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getStars = (rating) => {
        const fullStars = '★'.repeat(Math.floor(rating));
        const emptyStars = '☆'.repeat(5 - Math.floor(rating));
        return fullStars + emptyStars;
    };

    const cartItems = useSelector((state) => state.cart.fullcart);

    const handleAddToCart = (product) => {
        try {
            setCart([...cart, product]);
            dispatch(addtocart(product));
            toast.success(`${product.title} added to cart!`);
        } catch (error) {
            toast.error(`Failed to add ${product.title} to cart.`);
        }
    };

    const isInCart = (productId) => {
        return cartItems.some((item) => item.id === productId);
    };

    const handleBuy = (product) => {
        dispatch(buyNow(product));
        navigate('/buy', { state: { product } });
    };

    return (
        <div className="box">
            <div className="card">
                <div className="card__side card__side--front">
                    <Link to={`/product/${product.id}`}>
                        <div className="image">
                            <img src={product.image} alt="product" />
                        </div>
                    </Link>
                    <div className="des1">
                        <h2>{product.title}</h2>
                        <h3>{product.category}</h3>
                    </div>
                </div>
                <div className="card__side card__side--back">
                    <div className="des2">
                        <h4>{getStars(product.rating.rate)}</h4>
                        <h3><b>Price ${product.price}</b></h3>
                        <p>{product.description}</p> 
                    </div>
                    <div className="cart">
                        {isInCart(product.id) ? (
                            <button onClick={() => navigate('/cart')}>Go To Cart</button>
                        ) : (
                            <button onClick={() => handleAddToCart(product)}>Add to cart</button>
                        )}
                        <button onClick={() => handleBuy(product)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
