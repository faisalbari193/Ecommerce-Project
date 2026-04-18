import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import { ProductCategoryData } from "../../api/productcategory";
import Product from "../common/Product";
import axios from "axios";

const TrendyProducts = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  let limitedProducts = showAll ? products : products.slice(0, 12);

  function getProducts() {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setActiveCategory("all");
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

  const handleActive = (name) => {
    setActiveCategory(name);
    if (name === "all") {
      setFilteredProducts(products);
    } else {
      let filtered = products.filter((product) => product.category === name);
      setFilteredProducts(filtered);
    }
  };

  return (
    <section className="mt-25.25">
      <Container>
        <h2 className="font-custom text-primary-black text-center text-[35px] font-normal">
          OUR TRENDY <span className="font-bold">PRODUCTS</span>
        </h2>

        <ul className="mt-7.5 flex justify-center gap-13.5">
          {ProductCategoryData?.map((item) => (
            <li
              key={item.id}
              onClick={() => handleActive(item.name)}
              className={`${
                activeCategory == item.name
                  ? "font-custom after:bg-primary-black text-secondary-color relative cursor-pointer text-base font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[50%] after:duration-300 after:content-['']"
                  : "font-custom text-secondary-color relative cursor-pointer text-base font-medium"
              }`}
            >
              
              {item.name}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid grid-cols-4 gap-x-7.5 gap-y-15">
          {activeCategory === "all"
            ? limitedProducts?.map((product) => (
                <Product product={product} key={product.id} />
              ))
            : filteredProducts?.map((product) => (
                <Product product={product} key={product.id} />
              ))}
        </div>

        {products.length > 12 && activeCategory === "all" && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-white px-6 py-2 text-black duration-300 hover:bg-gray-800 hover:text-white"
            >
              {showAll ? "See Less Products" : "See More Products"}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default TrendyProducts;
