import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/" style={{ textDecoration: 'none' }}>Shop{menu === "shop" ? <hr /> : null}</Link>
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens" style={{ textDecoration: 'none' }}>Men{menu === "mens" ? <hr /> : null}</Link>
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/women" style={{ textDecoration: 'none' }}>Women{menu === "womens" ? <hr /> : null}</Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" style={{ textDecoration: 'none' }}>Kids{menu === "kids" ? <hr /> : null}</Link>
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="cart icon" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;

