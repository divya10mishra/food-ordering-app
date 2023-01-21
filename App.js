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
 * 
 * 
 * --------
 * 
 * Transitive dependencies- parcel using some other dependencies, they are dependent on ther similarly
 * 
 * 
 * -----
 * 
 *    check browserList.dev website, it makesures we the broswer it will support, here it will support all broswer we config it in package.json
 */


import React from "react";
import ReactDom from "react-dom/client"

const container = React.createElement( "h1", {id:"text"}, "heading1")
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(container)