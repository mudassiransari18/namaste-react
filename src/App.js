import React, { lazy, Suspense } from "react";
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
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />  
      <Outlet />    
    </div>
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
      }
    ],
    errorElement: <ErrorComponent />
  }
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 