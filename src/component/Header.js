import React, { useState } from "react";
import { Link } from 'react-router-dom'
import logo from '../asset/logo.png.webp'

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (  
        <>
    <div className="header">
      <img src={logo} alt="Food villa" height='100' width='100'/>
      <div className="nav-items">
          <ul>
          <li><Link to = '/about'>About</Link></li>
          <li><Link to = '/'>Home</Link></li>
          <li><Link to = '/contact'>Contact Us</Link></li>
          </ul>
      </div>

     {isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>Logout</button> :
      <button  onClick={()=>setIsLoggedIn(true)}>Login</button>}
      </div>
     
     
      </>
      )
  } 

  export default Header