/* eslint-disable react-hooks/static-components */
import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import axios from "axios";
import Product from "../common/Product";
import SliderLib from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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

  // Next Arrow
  function SampleNextArrow(props) {
    const { className, onClick } = props;

    return (
      <div
        className={`${className} absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md duration-300 hover:bg-black hover:text-white md:-right-14`}
        onClick={onClick}
      >
        <IoIosArrowForward className="text-[22px]" />
      </div>
    );
  }

  // Prev Arrow
  function SamplePrevArrow(props) {
    const { className, onClick } = props;

    return (
      <div
        className={`${className} absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md duration-300 hover:bg-black hover:text-white md:-left-14`}
        onClick={onClick}
      >
        <IoIosArrowBack className="text-[22px]" />
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="mt-14 md:mt-22.75">
      <Container>
        {/* Heading */}
        <h2 className="font-custom text-primary-black mb-8 text-center text-[26px] font-normal md:mb-12 md:text-[35px]">
          LIMITED <span className="font-bold">EDITION</span>
        </h2>

        {/* Slider */}
        <div className="relative">
          <Slider {...settings}>
            {products?.map((product) => (
              <div key={product.id} className="px-2 md:px-3">
                <Product product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default LimitedEdition;
