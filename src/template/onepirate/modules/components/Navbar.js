import React, { useState } from "react";
import "../../css/navbar.css"; // Optional: external CSS for styling
import AppBar from "../components/AppBar";
import Toolbar from '../components/Toolbar';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
    document.body.classList.add("no-scroll"); // Lock scrolling when overlay opens
  };

  const closeNav = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll"); // Unlock scrolling when overlay closes
  };

  return (
    <div>
      <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Navbar with menu icon */}
        <div className="navbar">
          <span className="logo">
            <img className="logo-img" src="https://upload.wikimedia.org/wikipedia/commons/7/75/Eo_circle_green_letter-e.svg"></img>
          </span>
          <span className="menu-icon" onClick={openNav}>
            &#9776; 
          </span>
        </div>

        {/* Overlay */}
        <div
          id="overscr"
          className={`overlay ${isOpen ? "open" : ""}`}
          style={{ width: isOpen ? "100%" : "0" }}
        >
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <div className="overlay-content">
          <span className="logo">
            <img className="logo-img" src="https://upload.wikimedia.org/wikipedia/commons/7/75/Eo_circle_green_letter-e.svg"></img>
          </span>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Navbar;
