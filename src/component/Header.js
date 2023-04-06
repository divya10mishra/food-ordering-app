import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../asset/logo.gif";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //useSelector has direct access to store no imports required
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="header">

        <img src={logo} alt="Food villa" height="100" width="100" />

        <div className="nav-items">
          <ul className="nav-item">
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li><Link to = '/about'>Contact</Link></li>
          <li><Link to = '/contact'>About</Link></li>*/}
            {/* <li><Link to = '/instamart'>Blog</Link></li>  */}
            <li> <Link to='/cart'>Cart item - {cartItem.length}</Link></li>
          </ul>
        </div>

        {/* {isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}
       className="search-input">
           Logout
      </button> :
      <button  onClick={()=>setIsLoggedIn(true)}>Login</button>} */}
      
      </div>
    </>
  );
};

export default Header;
