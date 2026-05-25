import React from "react";
import Container from "../ui/Container";
import Image from "../common/Image";
import rightImage from "../../assets/Images/right.png";
import { Link } from "react-router";

const StartingOffer = () => {
  return (
    <section className="mt-14 md:mt-25">
      <Container>
        {/* Wrapper */}
        <div className="flex flex-col gap-6 md:flex-row md:gap-7.5">
          {/* Card 1 */}
          <div className="group relative w-full overflow-hidden md:w-1/2">
            <Image
              src={rightImage}
              alt="Women's T-Shirts"
              className="h-[320px] w-full object-cover md:h-99.5"
            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 h-full w-full bg-transparent duration-300 group-hover:bg-[#D6001C]/80"></div>

            {/* Content */}
            <div className="absolute bottom-8 left-6 z-10 md:bottom-12.5 md:left-12.5">
              <h3 className="font-custom text-primary-black text-sm font-medium duration-300 group-hover:text-white md:text-lg">
                STARTING AT $39
              </h3>

              <h2 className="font-custom text-primary-black mt-2 text-[22px] font-medium duration-300 group-hover:text-white md:text-[26px]">
                Women's T-Shirts
              </h2>

              <Link
                to="/shop"
                className="font-custom text-primary-black relative mt-4 inline-block text-sm leading-6 font-medium duration-300 group-hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:duration-300 after:content-[''] hover:after:w-[40%]"
              >
                SHOP NOW
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative w-full overflow-hidden md:w-1/2">
            <Image
              src={rightImage}
              alt="Men's Sportswear"
              className="h-[320px] w-full object-cover md:h-99.5"
            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 h-full w-full bg-transparent duration-300 group-hover:bg-[#D6001C]/80"></div>

            {/* Content */}
            <div className="absolute bottom-8 left-6 z-10 md:bottom-12.5 md:left-12.5">
              <h3 className="font-custom text-primary-black text-sm font-medium duration-300 group-hover:text-white md:text-lg">
                STARTING AT $39
              </h3>

              <h2 className="font-custom text-primary-black mt-2 text-[22px] font-medium duration-300 group-hover:text-white md:text-[26px]">
                Men's Sportswear
              </h2>

              <Link
                to="/shop"
                className="font-custom text-primary-black relative mt-4 inline-block text-sm leading-6 font-medium duration-300 group-hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:duration-300 after:content-[''] hover:after:w-[40%]"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StartingOffer;
