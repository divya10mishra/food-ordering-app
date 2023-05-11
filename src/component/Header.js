import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../asset/logo.jpg";
import { useSelector } from "react-redux";
import SignUp from "./SignUp";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //useSelector has direct access to store no imports required
  const cartItem = useSelector((store) => store.cart.items);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="header">
        <Link to="/">
          {" "}
          <img src={logo} alt="Food villa" height="100" width="100" />
        </Link>

        <div className="nav-items">
          <ul className="nav-item">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a
                onClick={() => setShowModal(true)}
                style={{ cursor: "pointer" }}
              >
                Sign In
              </a>
              {showModal && <SignUp close={closeModal} />}
            </li>
            {/* <li><Link to = '/about'>Contact</Link></li>
          <li><Link to = '/contact'>About</Link></li>*/}
            <li>
              <Link to="/instamart">Blog</Link>
            </li>
            <li>
              {" "}
              <Link to="/cart">
                {" "}
                <span style={{ border: "2px solid #d5dbd6" }}>
                  {cartItem.length}{" "}
                </span>
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* {isLoggedIn ? <span onClick={()=>setIsLoggedIn(false)}
       className="search-input">
           Sign Out
      </span> : */}
        {/* <span  onClick={()=>setIsLoggedIn(true)}> */}
        <div></div>
      
      </div>
    </>
  );
};

export default Header;
