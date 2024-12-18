import React from 'react';
import './SearchBar.css';
import user from '../../assets/user.png'

export const SearchBar = () => {
  return (
    <div className="container-searchBar">
      <div className="logo">
        <h1>GimeIA</h1>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <div className="mini-logo">
          <img src={user} alt="User Logo" />
        </div>
      </div>
    </div>
  );
};
