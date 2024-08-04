// import "./Products.css"
// import React, { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { setSearchTerm } from '../Redux/SearchSlice';
// import ProductCard from "./ProductCard.jsx";

// const Products = ({ items, cart, setCart }) => {
//   const dispatch = useDispatch();
//   const searchTerm = useSelector((state) => state.search.searchTerm.toLowerCase());
//   const [searchInput, setSearchInput] = useState('');

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setSearchInput(value);
//     dispatch(setSearchTerm(value));
//   };

//   const filteredItems = items.filter(item =>
//     item.title.toLowerCase().includes(searchTerm)
//   );

//   return (
//     <div className="products-container">
//       <div className="searchbar">
//         <input
//           type="text"
//           className="searchinput"
//           placeholder="Search products..."
//           value={searchInput}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="product-grid">
//         {filteredItems.map((product, key) => (
//           <ProductCard key={key} product={product} cart={cart} setCart={setCart} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;  


// import React, { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { setSearchTerm } from '../Redux/SearchSlice';
// import ProductCard from "./ProductCard.jsx";
// import "./Products.css";

// const Products = ({ items, cart, setCart }) => {
//   const dispatch = useDispatch();
//   const searchTerm = useSelector((state) => state.search.searchTerm.toLowerCase());
//   const [searchInput, setSearchInput] = useState('');

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setSearchInput(value);
//     dispatch(setSearchTerm(value));
//   };

//   const filteredItems = items.filter(item =>
//     item.title.toLowerCase().includes(searchTerm) ||
//     item.category.toLowerCase().includes(searchTerm)
//   );

//   return (
//     <div className="products-container">
//       <div className="searchbar">
//         <input
//           type="text"
//           className="searchinput"
//           placeholder="Search products..."
//           value={searchInput}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="product-grid">
//         {filteredItems.map((product, key) => (
//           <ProductCard key={key} product={product} cart={cart} setCart={setCart} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;
// src/Components/Products.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from '../Redux/SearchSlice';
import ProductCard from "./ProductCard.jsx";
import "./Products.css";

const Products = ({ items, cart, setCart }) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm.toLowerCase());
  const [searchInput, setSearchInput] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchInput(value);
    dispatch(setSearchTerm(value));
  };

  const handlePriceChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const filterByPrice = (item) => {
    switch (selectedPriceRange) {
      case '0-50':
        return item.price >= 0 && item.price <= 50;
      case '51-100':
        return item.price > 50 && item.price <= 100;
      case '101-200':
        return item.price > 100 && item.price <= 200;
      case '201':
        return item.price > 200;
      default:
        return true;
    }
  };

  const filteredItems = items
    .filter(item => 
      item.title.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm)
    )
    .filter(filterByPrice);

  return (
    <div className="products-container">
      <div className="filters">
        <div className="searchbar">
          <input
            type="text"
            className="searchinput"
            placeholder="Search products..."
            value={searchInput}
            onChange={handleInputChange}
          />
        </div>
        <div className="price-filter">
          <label htmlFor="priceRange">Filter by price:</label>
          <select id="priceRange" value={selectedPriceRange} onChange={handlePriceChange}>
            <option value="all">All</option>
            <option value="0-50">$0 - $50</option>
            <option value="51-100">$51 - $100</option>
            <option value="101-200">$101 - $200</option>
            <option value="201">$201+</option>
          </select>
        </div>
      </div>
      <div className="product-grid">
        {filteredItems.map((product, key) => (
          <ProductCard key={key} product={product} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;

