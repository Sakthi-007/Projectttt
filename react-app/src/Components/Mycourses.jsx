import React from 'react';
import { Link } from 'react-router-dom';
import './Mycourses.css';
import { PRODUCTS } from '../constants';

const MyCourses = () => {
  return (
    <div className="mycourses-container">
      <h2>My Courses</h2>
      <div className="mycourses-grid">
        {PRODUCTS.slice(3, 6).map(product => (
          <div key={product.id} className="mycourses-item">
            <Link to={`/course/${product.id}`} className="mycourses-link">
              <img src={product.image} alt={product.title} className="mycourses-image" />
              <div className="mycourses-details">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <span className="mycourses-price">${product.price}</span>
                <div className="mycourses-rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
