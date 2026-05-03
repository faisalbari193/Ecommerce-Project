import React from "react";
import Image from "../../components/common//Image";
import Container from "../ui/Container.jsx";
import ShopImage from "../../assets/Images/bg.png";
const ShopBanner = () => {
  return (
    <section>
      <Image src={ShopImage} className="mx-auto w-full px-15" />
      <Container className="relative">
        <div className="absolute bottom-33.75 left-0 w-full">
          <div className="inset-0 bg-[repeating-linear-gradient(135deg,#ccc_0px,#ccc_1px,transparent_1px,transparent_8px)] opacity-20"></div>
          {/* Text */}
          <h1 className="text-[90px] font-extrabold text-transparent [-webkit-text-stroke:2px_#9CA3AF]">
            JACKETS & COATS
          </h1>
          <ul className="flex gap-7.75">
            <li className="font-custom text-primary-black text-[16px]">
              #STAYHOME
            </li>
            <li className="font-custom text-primary-black text-[16px]">
              NEW IN
            </li>
            <li className="font-custom text-primary-black after:bg-primary-black relative text-[16px] font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-[40%]">
              JACKETS
            </li>
            <li className="font-custom text-primary-black after:bg-primary-black relative text-[16px] font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-[40%]">
              HOODIES
            </li>
            <li className="font-custom text-primary-black after:bg-primary-black relative text-[16px] font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-[40%]">
              MEN
            </li>
            <li className="font-custom text-primary-black after:bg-primary-black relative text-[16px] font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-[40%]">
              WOMEN
            </li>
            <li className="font-custom text-primary-black after:bg-primary-black relative text-[16px] font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-[40%]">
              TROUSERS
            </li>
            <li className="font-custom text-primary-black after:bg-primary-black relative text-[16px] font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-[40%]">
              ACCESSORIES
            </li>
            <li className="font-custom text-primary-black after:bg-primary-black relative text-[16px] font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-[40%]">
              SHOES
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default ShopBanner;
