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


import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from '../Redux/SearchSlice';
import ProductCard from "./ProductCard.jsx";
import "./Products.css";

const Products = ({ items, cart, setCart }) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm.toLowerCase());
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchInput(value);
    dispatch(setSearchTerm(value));
  };

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="products-container">
      <div className="searchbar">
        <input
          type="text"
          className="searchinput"
          placeholder="Search products..."
          value={searchInput}
          onChange={handleInputChange}
        />
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
