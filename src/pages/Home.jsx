import React from "react";
import Banner from "../components/home/Banner";
import Category from "../components/home/category/Category";
import TrendyProducts from "../components/home/TrendyProducts";
import SpringCollection from "../components/home/SpringCollection";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <TrendyProducts />
      <SpringCollection />
    </>
  );
};

export default Home;
