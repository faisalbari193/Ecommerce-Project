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
  let productNumber = limitedProducts.length;
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
      <h3 className="font-custom mt-12.5 text-center text-[14px] leading-6 font-medium">
        SHOWING {productNumber} of {products.length} Items
      </h3>
      <div className="mx-auto mt-1.25 mb-4.25 h-1.5 w-75 rounded-[10px] bg-[#E4E4E4]">
        <div
          className="bg-primary-black h-full rounded-[10px]"
          style={{ width: showAll ? "100%" : `${productNumber}%` }}
        ></div>
      </div>

      <div className="text-center">
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
