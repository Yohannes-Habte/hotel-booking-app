import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav-container">
        <h2 className="logo">Hotel Booking in LisaConsult </h2>
        <div className="navbar-btn-container">
          <button className="navbar-btn"> Register </button>
          <button className="navbar-btn"> Login </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
