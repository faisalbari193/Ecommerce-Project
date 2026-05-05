import React, { useEffect, useState } from "react";
import ShopBanner from "../components/Shop/ShopBanner";
import Sorting from "../components/Shop/Sorting";
import axios from "axios";
import AllProducts from "../components/Shop/AllPRoducts";

const Shop = () => {
  const [activeView, setActiveView] = useState(4);
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  let limitedProducts = showAll ? products : products.slice(0, 8);
  function getProducts() {
    axios
      .get("https://dummyjson.com/products?page=1&limit=198")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        throw new Error(
          err.message
            ? err.message
            : "An error occurred while fetching products.",
        );
      });
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <main>
      <ShopBanner />
      <Sorting setActiveView={setActiveView} activeView={activeView} />
      <AllProducts products={limitedProducts} activeView={activeView} />
      <div className="mt-10 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="font-custom after:bg-primary-black relative mb-25 bg-white px-6 py-2 text-[14px] leading-6 font-medium text-black duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-full"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </main>
  );
};

export default Shop;
