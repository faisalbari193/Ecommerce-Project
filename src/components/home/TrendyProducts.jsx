import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import { ProductCategoryData } from "../../api/productcategory";
import Product from "../common/Product";
import axios from "axios";
import { useNavigate } from "react-router";

const TrendyProducts = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const navigate = useNavigate();

  let limitedProducts = showAll ? products : products.slice(0, 12);

  function getProducts() {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setFilteredProducts(res.data.products);
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
    <section className="mt-14 md:mt-25">
      <Container>
        {/* Heading */}
        <h2 className="font-custom text-primary-black text-center text-[24px] font-normal md:text-[35px]">
          OUR TRENDY <span className="font-bold">PRODUCTS</span>
        </h2>

        {/* Category */}
        <ul className="mt-6 flex flex-wrap justify-center gap-5 md:mt-7.5 md:gap-13.5">
          {ProductCategoryData?.map((item) => (
            <li
              key={item.id}
              onClick={() => handleActive(item.name)}
              className={`${
                activeCategory === item.name
                  ? "font-custom text-secondary-color relative cursor-pointer text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[50%] after:bg-black after:duration-300 after:content-[''] md:text-base"
                  : "font-custom text-secondary-color relative cursor-pointer text-sm font-medium md:text-base"
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Products Grid */}
        <div className="mt-8 grid grid-cols-1 gap-8 grid-cols-2 md:mt-10  md:gap-x-6 md:gap-y-10 md:grid-cols-4 lg:gap-x-7.5 lg:gap-y-15">
          {activeCategory === "all"
            ? limitedProducts?.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  onClick={() => navigate(`/products/${product.id}`)}
                />
              ))
            : filteredProducts?.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  onClick={() => navigate(`/products/${product.id}`)}
                />
              ))}
        </div>

        {/* Button */}
        {products.length > 12 && activeCategory === "all" && (
          <div className="mt-8 text-center md:mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-white px-5 py-2 text-sm text-black duration-300 hover:bg-gray-800 hover:text-white md:px-6 md:text-base"
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
