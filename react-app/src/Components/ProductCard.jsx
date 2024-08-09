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
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from "../Redux/CartSlice";
import { addToWishlist } from "../Redux/Wishlistslice";
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
    const wishlistItems = useSelector((state) => state.wishlist.items);

    const handleAddToCart = (product) => {
        try {
            setCart([...cart, product]);
            dispatch(addtocart(product));
            toast.success(`${product.title} added to cart!`);
        } catch (error) {
            toast.error(`Failed to add ${product.title} to cart.`);
        }
    };

    const handleAddToWishlist = (product) => {
        try {
            dispatch(addToWishlist(product));
            toast.success(`${product.title} added to wishlist!`);
        } catch (error) {
            toast.error(`Failed to add ${product.title} to wishlist.`);
        }
    };

    const isInCart = (productId) => {
        return cartItems.some((item) => item.id === productId);
    };

    const isInWishlist = (productId) => {
        return wishlistItems.some((item) => item.id === productId);
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
                            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        )}
                        {isInWishlist(product.id) ? (
                            <button disabled>In Wishlist</button>
                        ) : (
                            <button onClick={() => handleAddToWishlist(product)}>Add to Wishlist</button>
                        )}
                        <button onClick={() => handleBuy(product)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
