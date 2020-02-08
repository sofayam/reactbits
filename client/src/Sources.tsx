import React, { useState, useEffect} from 'react';

import './App.css';

const Sources = () => {
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
       <h1>Sources Page</h1>
    </div>
  );
}

export default Sources;
