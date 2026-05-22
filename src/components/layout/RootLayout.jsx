import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import MobileNavigation from "../../mobile/MobileNavigation/MobileNavigation";
import NewsShelter from "../home/NewsShelter/NewsShelter";
const RootLayout = () => {
  return (
    <>
      <NewsShelter />
      <Header />
      <Outlet />
      <Footer />
      <MobileNavigation />
    </>
  );
};

export default RootLayout;
