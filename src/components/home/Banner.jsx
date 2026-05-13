import React from "react";
import { BannerData } from "../../api/banner";
import Image from "../common/Image";
import SliderLib from "react-slick";
import "slick-carousel/slick/slick.css";
import SocialSidebar from "../SocialSideBar/SocialSideBar";

const Slider = SliderLib.default || SliderLib;

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul
          className="absolute bottom-5 left-5 flex gap-5 md:bottom-14.5 md:left-48.75"
          style={{ margin: "0px" }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div className="h-1.5 w-1.5 rounded-full bg-[#DDC2B9]"></div>
    ),
  };

  return (
    <section className="mt-5 md:mx-15 md:mt-0">
      <div className="hidden md:block">
        <SocialSidebar />
      </div>
      <div className="md:ml-4">
        <Slider {...settings}>
          {BannerData?.map((item) => (
            <div key={item.id}>
              <Image src={item.banner} className="w-full text-center" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Banner;
