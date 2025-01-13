import React from "react";
import { Link } from "react-router-dom";
import './Header.css'; // Correct path to your CSS file

const Header = () => {
  return (
    <nav className="navbar">
      <h1>EV Dashboard</h1>
      <ul className="nav-links">
        <li><Link to="/">Overview</Link></li>
        <li><Link to="/charts">Charts</Link></li>
        <li><Link to="/map">Map</Link></li>
      </ul>
      <div className="nav-btn">
        {/* Login Button */}
        <button className="shop-now-button">
          <a href="#">Login</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="shop-icon"
            aria-label="Login Icon"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>
        {/* SignUp Button */}
        <button className="shop-now-button">
          <a href="#">SignUp</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="shop-icon"
            aria-label="SignUp Icon"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;
