import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import './CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-detail-container">
      <div className="course-detail-info">
        <img src={product.image} alt={product.title} className="course-detail-image" />
        <div className="course-detail-text">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <span className="course-detail-price">${product.price}</span>
          <div className="course-detail-rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</div>
        </div>
      </div>
      <div className="course-detail-video">
        <iframe
          src={`${product.videoUrl}`} 
          title={product.title}
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default CourseDetail;
