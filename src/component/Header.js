import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SignUp from "./SignUp";
import { FaSearch } from 'react-icons/fa';
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { MdAssignmentInd } from "react-icons/md";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //useSelector has direct access to store no imports required
  const cartItem = useSelector((store) => store.cart.items);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="header gray-font-style py-3">
        <div className="header-logo">
        <Link to="/">
          {" "}
          <img src={'https://logolook.net/wp-content/uploads/2023/04/Swiggy-Emblem.png'} alt="Food villa" height="60" width="100" />
        </Link>
        <div className="location-font">
          Lucknow, Uttar Pradesh, India
        </div>
        </div>
        
       

        <div className="flex align-middle pt-4">
        
            <span className="flex">
                <FaSearch />
                <Link to="/"> Search</Link>
            </span>
            
            {/* <li><Link to = '/about'>Contact</Link></li>
          <li><Link to = '/contact'>About</Link></li>*/}
            <span className="flex pl-5">
            <CiDiscount1 />
              <Link to="/instamart">Offers</Link>
            </span>
            <span className="flex pl-5">
            <IoHelpBuoyOutline />
              <Link to="">Help</Link>
            </span>
            <span className="flex pl-5">
            <MdAssignmentInd />
              <a
                onClick={() => setShowModal(true)}
                style={{ cursor: "pointer" }}
              >
                Sign In
              </a>
              {showModal && <SignUp close={closeModal} />}
            </span>
            <span className="pl-5">
              {" "}
              <Link to="/cart">
                {" "}
                <span style={{ border: "2px solid #d5dbd6" }}>
                  {cartItem.length}{" "}
                </span>
                Cart
              </Link>
            </span>
         
        </div>

        {/* {isLoggedIn ? <span onClick={()=>setIsLoggedIn(false)}
       className="search-input">
           Sign Out
      </span> : */}
        {/* <span  onClick={()=>setIsLoggedIn(true)}> */}
       
      
      </div>
    </>
  );
};

export default Header;
