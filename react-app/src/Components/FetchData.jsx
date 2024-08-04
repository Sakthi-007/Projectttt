// src/Components/FetchData.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers, setSellers } from '../Redux/UserSlice';

const FetchData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      dispatch(setUsers(data.users));
      dispatch(setSellers(data.sellers));
    };

    fetchData();
  }, [dispatch]);

  return null;
};

export default FetchData;
