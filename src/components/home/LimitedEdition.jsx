import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import axios from "axios";
import Product from "../common/Product";
import SliderLib from "react-slick";
import "slick-carousel/slick/slick.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Slider = SliderLib.default || SliderLib;
const LimitedEdition = () => {
  const [products, setProducts] = useState([]);
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
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} absolute top-[50%] -right-15 z-10 -translate-y-[50%] cursor-pointer`}
        onClick={onClick}
      >
        {" "}
        <IoIosArrowForward className="text-[25px]" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} absolute top-[50%] -left-15 z-10 -translate-y-[50%] cursor-pointer`}
        onClick={onClick}
      >
        <IoIosArrowBack className="text-[25px]" />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="mt-22.75">
      <Container>
        <h2 className="font-custom text-primary-black text-center text-[35px] font-normal">
          LIMITED <span className="font-bold">EDITION</span>
        </h2>
        <Slider {...settings}>
          {products?.map((product) => (
            <Product product={product} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default LimitedEdition;
