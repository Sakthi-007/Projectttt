// ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import './ProductDetails.css'; // Ensure you have the appropriate styles

const ProductDetails = () => {
  const { id } = useParams(); // Retrieve the product ID from the URL
  const product = PRODUCTS.find((p) => p.id === parseInt(id)); // Find the product by ID

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="product-img" />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <p>Rating: {product.rating.rate} (Based on {product.rating.count} reviews)</p>
      </div>
    </div>
  );
};

export default ProductDetails;