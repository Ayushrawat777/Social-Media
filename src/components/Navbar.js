import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">TravelMedia.in</h1>
      <div className="icons">
        <Link to="/Social-Media">
          <span>🏠</span>
        </Link>
        <span>🔔</span>
        <span>🔖</span>
        <span>👤</span>
      </div>
    </nav>
  );
};

export default Navbar;
