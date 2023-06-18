import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import Cart from "./components/Cart";

import UserContext from "./utils/UserContext";

import { Provider } from "react-redux";
import store from "./redux/store/store";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {

  const [user, setUser] = useState({
    email: "dynamicUser@gmail.com",
    name: "Dynamic User"
  })

  return (
    <Provider store = { store }>
      <UserContext.Provider value = { { user: user, setUser: setUser} }>
        <Header />
        <div className="border border-cyan-800">
          <input type="text" placeholder="COntext api checking" value={ user.name } onChange={ (e) => setUser( { name: e.target.value, email: user.email }) } />
        </div>
        <Outlet />
      </UserContext.Provider>
    </Provider>    
  )
}

const appRouter = createBrowserRouter([
  { 
    path: "/",
    element: <AppLayout />,
    children: [
      { 
        path: "/", 
        element: <Body /> 
      },
      { 
        path: "/about", 
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />
          }
        ]
      },
      { 
        path: "/contact", 
        element: <Contact /> 
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback= { <Shimmer />}>
            <Instamart />
          </Suspense>
        )
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <ErrorComponent />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 