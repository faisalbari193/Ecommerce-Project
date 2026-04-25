import React from "react";
import Container from "../ui/Container";
import Image from "../common/Image";
// import leftImage from "../../assets/Images/left.png";
import rightImage from "../../assets/Images/right.png";
import { Link } from "react-router";
const StartingOffer = () => {
  return (
    <>
      <section className="mt-25">
        <Container>
          <div className="flex gap-7.5">
            <div className="group relative w-1/2">
              <Image src={rightImage} alt="Right Image" className="h-99.5" />
              <div className="absolute top-0 left-0 h-full w-full duration-300 group-hover:bg-[#D6001C]"></div>
              <div className="absolute bottom-12.5 left-12.5 w-full">
                <h3 className="font-custom text-primary-black group-hover:text-primary-white text-lg font-medium">
                  STARTING AT $39
                </h3>
                <h2 className="font-custom group-hover:text-primary-white text-primary-black mt-2 text-[26px] font-medium">
                  Women's T-Shirts
                </h2>
                <Link
                  to="/shop"
                  className="font-custom text-primary-black group-hover:text-primary-white relative mt-3.75 inline-block text-sm leading-6 font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] group-hover:after:bg-white hover:after:w-[40%]"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className="group relative w-1/2">
              <Image src={rightImage} alt="Right Image" className="h-99.5" />
              <div className="absolute top-0 left-0 h-full w-full duration-300 group-hover:bg-[#D6001C]"></div>
              <div className="absolute bottom-12.5 left-12.5 w-full">
                <h3 className="font-custom text-primary-black group-hover:text-primary-white text-lg font-medium">
                  STARTING AT $39
                </h3>
                <h2 className="font-custom text-primary-black group-hover:text-primary-white mt-2 text-[26px] font-medium">
                  Men's Sportswear
                </h2>
                <Link
                  to="/shop"
                  className="font-custom text-primary-black group-hover:text-primary-white relative mt-3.75 inline-block text-sm leading-6 font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] group-hover:after:bg-white hover:after:w-[40%]"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default StartingOffer;
