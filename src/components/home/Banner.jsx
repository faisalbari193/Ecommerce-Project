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
          className="absolute bottom-14.5 left-48.75 flex gap-5"
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
    <section className="mx-15">
      <div>
        <SocialSidebar />
      </div>
      <div className="ml-4">
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
