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
 * 
 * 
 * -----
 * config driven UI 
 * 
 */


import React, { lazy, Suspense, useState } from "react";
import ReactDom from "react-dom/client"
import Footer from "./component/Footer";
import Header from './component/Header'
import Body from './component/Body'
import '../index.css'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import About from './component/About'
import Contact from './component/Contact'
import Error from './component/Error'
import RestrauntMenu from './component/RestrauntMenu'
import Profile from './component/ProfileClass'
import Shimmer from "./component/Shimmer";
import userContext from "./utils/useContext";
import { Provider} from 'react-redux'
import store from "./utils/store";

const Instamart = lazy(()=> import ("./component/Instamart"))
const Cart = lazy(() => import ("./component/Cart"))

const AppLayout = () =>{
    const [user1, setUser1] = useState({
        name: "Sakhi",
        email: "sakhi@gmail.com"
    })
   return ( <>
<Provider store={store}>
   <userContext.Provider value={{user : user1, setUser : setUser1}}>
      { console.log(user1,"user")}
    <Header/>
    <Outlet/>
    <Footer/>
  </userContext.Provider>  
  </Provider>
</>)
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element : <AppLayout/>,
        errorElement : <Error />,
        children : [{
            path: '/',
            element : <Body/>
        },
        {
            path: '/about',
            element : <About/>,
            children : [{
                path : 'profile',
                element : <Profile/>
            }]
        },
        {
            path: '/contact',
            element : <Contact/>
        },
        {
            path: '/restraunt/:id',
            element: <RestrauntMenu/>
        },
        {
            path: '/instamart',
            element: 
            <Suspense fallback={<Shimmer />}>
            <Instamart/>
            </Suspense>
        },
        {
            path: '/cart',
            element: 
            <Suspense fallback={<Shimmer />}>
            <Cart/>
            </Suspense>
        }
    ]
    }
   
])

 const root = ReactDom.createRoot(document.getElementById("root"))
// root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouter} />)