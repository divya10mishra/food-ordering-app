import React, { useState } from "react";
import { Link } from 'react-router-dom'
import logo from '../asset/logo.png.webp'
import {useSelector} from 'react-redux'

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    //useSelector has direct access to store no imports required
    const cartItem = useSelector((store) => store.cart.items)

    return (  
        <>
    <div className="header">
      <img src={logo} alt="Food villa" height='100' width='100'/>
      <div className="nav-items">
          <ul>
          <li><Link to = '/about'>About</Link></li>
          <li><Link to = '/'>Home</Link></li>
          <li><Link to = '/contact'>Contact Us</Link></li>
          <li><Link to = '/instamart'>Instamart</Link></li>
    <li><Link to = '/cart'>Cart - {cartItem.length}</Link></li>
          </ul>
      </div>

     {isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}
       style={{borderRadius:'5px', padding:'10px' , marginLeft: '10px', border:'1px solid grey'}}>
           Logout
      </button> :
      <button  onClick={()=>setIsLoggedIn(true)}>Login</button>}
      </div>
     
     
      </>
      )
  } 

  export default Header