import React from 'react'
import  "./Navbar.css"
function NavTop() {
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
          </nav>
    </div>
  )
}

export default NavTop
