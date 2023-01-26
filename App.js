/**
 * parcel-
 * hot module reloading depends upon - file watcher algorith written in c++ - parcel provides
 * mified
 * Bundling
 * clean our code
 * dev and production build
 * super fast build algo
 * image optimization
 * caching while development, but local not the one coming from backend
 * compress the files-like rename files
 * compatible with older versions of browser-it add polyfills
 * manages port number
 * put parcel.cache in git ignore
 * consistent caching algo, parcel uses
 * manages port number
 * zero config bundler
 * tree shaking- removing unwanted code
 * 
 * --------
 * 
 * Transitive dependencies- parcel using some other dependencies, they are dependent on ther similarly
 * 
 * 
 * -----
 * 
 *    check browserList.dev website, it makesures we the broswer it will support, here it will support all broswer we config it in package.json
 * 
 * 
 * ------
 * 
 * babel-transform-remove-console.log, plugin 
 */


import React from "react";
import ReactDom from "react-dom/client"
import './index.css'

const Body = () => {
 return(
     <>
     <div className="card">
         <img src = "" alt="food" />
         <div>Burger King</div>
         <div>4 star</div>
     </div>
     </>
 )
}
const NavBar = () => {
  return (  
      <>
  <div className="header">
    <img src="https://pngtree.com/freepng/western-restaurant-dining-chair-illustration_4619097.html"  alt="Food villa" />
    <div className="nav-items">
        <ul>
        <li>About</li>
        <li>Home</li>
        <li>Contact Us</li>
        </ul>
    </div>
    </div>
    <Body/>
    </>
    )
} 
 const root = ReactDom.createRoot(document.getElementById("root"))
 root.render(<NavBar/>)