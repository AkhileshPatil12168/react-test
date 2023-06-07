import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom"

import Error from "./components/error handelar";

import Header from "./components/header";
import About from "./components/Header/about";
import Contact from "./components/Header/contact";
import Cart from "./components/Header/cart";

import Body from "./components/body";
import Menue from "./components/restMenue/menue";


import Footer from "./components/footer";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {path:"/",
    element:<Body/>},
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path:"/restaurant/:id",
        element:<Menue/>
      }
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
