import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "/about",
          Component: About,
        },
        {
          path: "/shop",
          Component: Shop,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
