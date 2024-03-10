import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Import useNavigate from 'react-router-dom'
  const cartList = useSelector(state => state.cartState.cartList);
  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search/${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <div className="navsection">
        <Link to="/">
          <div className="title">Business App</div>
        </Link>
        <div className="searchSection">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="users">
          <div className="login">Login</div>
          <div className="logout">Logout</div>
        </div>
        <div className="shoppingCart">
          <Link to="/cart">Cart:{cartList.length}</Link>
        </div>
      </div>
      <div className="submenu">
        <ul>
          <Link to="/mobiles">
            <li>Mobile Phone</li>
          </Link>
          <li>laptops</li>
          <li>Computers</li>
          <li>HardDrives</li>
          <li>Sales and service</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
