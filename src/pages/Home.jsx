import React from "react";
import Banner from "../components/home/Banner";
import Category from "../components/home/category/Category";
import TrendyProducts from "../components/home/TrendyProducts";
import SpringCollection from "../components/home/SpringCollection";
import StartingOffer from "../components/home/StartingOffer";
import LimitedEdition from "../components/home/LimitedEdition";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <TrendyProducts />
      <SpringCollection />
      <StartingOffer />
      <LimitedEdition />
    </>
  );
};

export default Home;
