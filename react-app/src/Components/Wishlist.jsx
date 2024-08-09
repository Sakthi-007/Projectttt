import React from 'react';
import './Wishlist.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../Redux/Wishlistslice'; // Import the action

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleRemove = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      {wishlistItems.length > 0 ? (
        <div className="wishlist-grid">
          {wishlistItems.map((product) => (
            <div key={product.id} className="wishlist-item">
              <img src={product.image} alt={product.title} className="wishlist-image" />
              <div className="wishlist-details">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <span className="wishlist-price">${product.price}</span>
                <div className="wishlist-rating">
                  Rating: {product.rating.rate} ({product.rating.count} reviews)
                </div>
                <button
                  className="wishlist-remove-btn"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is currently empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
