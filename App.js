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
import ReactDom from "react-dom/client";
import Footer from "./src/component/Footer";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
import "/index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/component/About";
import Contact from "./src/component/Contact";
import Error from "./src/component/Error";
import RestrauntMenu from "./src/component/RestrauntMenu";
import Profile from "./src/component/ProfileClass";
import Shimmer from "./src/component/Shimmer";
import userContext from "./src/utils/useContext";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import banner from './src/asset/food.jpg'

const Instamart = lazy(() => import("./src/component/Instamart"));
const Cart = lazy(() => import("./src/component/Cart"));

const AppLayout = () => {
  const [user1, setUser1] = useState({
    name: "Sakhi",
    email: "sakhi@gmail.com",
  });
  return (
  <Provider store={store}>
    <userContext.Provider value={{ user: user1, setUser: setUser1 }}>
      
    <Header />
    {/* <img src='https://w0.peakpx.com/wallpaper/760/93/HD-wallpaper-food-still-life-meat-mushroom-spices.jpg' width="100%" height="200px"/> */}
      <Outlet />
      <Footer />
 
    </userContext.Provider>
  </Provider>
  )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restraunt/:id",
        element: <RestrauntMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
          path: '/cart',
          element:
          <Suspense fallback={<Shimmer />}>
          <Cart/>
          </Suspense>
      }
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouter} />);
