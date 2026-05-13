import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import MobileNavigation from "../../mobile/MobileNavigation/MobileNavigation";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <MobileNavigation />
    </>
  );
};

export default RootLayout;
