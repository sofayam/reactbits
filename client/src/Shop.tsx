import React, { useState, useEffect} from 'react';

import './App.css';

const Shop = () => {
  useEffect(() => {
    fetchItems();
  }, []);
  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-public-api.theapinetwork.com/prod9/upcoming/get"
    );
    const items = await data.json();
    console.log(items);
  }
  return (
    <div>
       <h1>Shop Page</h1>
    </div>
  );
}

export default Shop;
