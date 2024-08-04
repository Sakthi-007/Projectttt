import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../Redux/SearchSlice';
import './Search.css';

const Search = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for products..."
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
};

export default Search;
