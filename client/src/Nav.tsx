import React from 'react';
import { Link } from "react-router-dom";

import './App.css';

const Nav = () => {
  const navStyle = {
    color: "white"
  };

  return (
    <nav>
      <h3>Vocab</h3>
      <ul className="nav-links">
      <Link style={navStyle} to="/">
          <li>Enter</li>
        </Link>
        <Link style={navStyle} to="/list">
          <li>List</li>
        </Link>
        <Link style={navStyle} to="/sources">
          <li>Sources</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
