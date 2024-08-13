import React from "react";
import "./Checkout.css";
import {useNavigate} from 'react-router-dom';


const Checkout = () => {

    const navigate=useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        // You can handle form data submission here
    
        // Navigate to the 'mycourses' page
        navigate('/mycourses');
    }
  return (
    <div className="checkout-page">
      <h1>Course Checkout</h1>
      <p>You're just one step away from starting your learning journey! Please provide the following details to complete your enrollment.</p>
      <form className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="course">Select Course:</label>
          <select id="course" name="course" required>
            <option value="course1">Introduction to Programming</option>
            <option value="course2">Advanced JavaScript</option>
            <option value="course3">Web Development Bootcamp</option>
            {/* Add more course options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount Code (optional):</label>
          <input type="text" id="discount" name="discount" />
        </div>
        <div className="form-group">
          <label htmlFor="payment">Payment Method:</label>
          <select id="payment" name="payment" required>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit" className="submit-button" onClick={handleSubmit}>Enroll Now</button>
      </form>
    </div>
  );
};

export default Checkout;
