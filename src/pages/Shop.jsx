import React, { useEffect, useState } from "react";
import ShopBanner from "../components/Shop/ShopBanner";
import Sorting from "../components/Shop/Sorting";
import axios from "axios";
import AllProducts from "../components/Shop/AllPRoducts";

const Shop = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  function getProducts() {
    axios
      .get("https://dummyjson.com/products")
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
      <Sorting />
      <AllProducts products={products} />
    </main>
  );
};

export default Shop;
