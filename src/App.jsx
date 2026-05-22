import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import TrendyProducts from "./components/home/TrendyProducts";
import ShopSingleGrouped from "./components/home/ShopSingleGrouped";
import JournalPage from "./components/home/JournalPage";

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
          path: "/journal",
          Component: JournalPage,
        },
        {
          path: "/products/:id",
          Component: ShopSingleGrouped,
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
