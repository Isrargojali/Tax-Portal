import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
     
          <nav className="main_div">
            <p className="nav-logo">Taxslayer Portal</p>
            <ul>
              <li>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Help</a>
                <a href="/">Contact Us</a>
              </li>
            </ul>
            <div className="nav-bts">
              <button className="button-one" onClick={() => navigate("/login")}>
                Sign In
              </button>
              <button
                className="button-two"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </div>
          
          </nav>
       
    </div>
  );
}

export default Navbar;
