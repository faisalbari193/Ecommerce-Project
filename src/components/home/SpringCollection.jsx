import React from "react";
import Container from "../ui/Container";
import Image from "../common/Image";
import springCollection from "../../assets/Images/springcollection.png";
import { Link } from "react-router";
import CountDown from "../Counter/CountDown";

const SpringCollection = () => {
  return (
    <section className="mx-4 mt-14 bg-[#EBEBEB] py-10 md:mx-15 md:mt-25 md:py-7">
      <Container>
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-end md:justify-between">
          {/* Left Content */}
          <div className="text-center md:text-left">
            {/* Top Small Heading */}
            <h4 className="font-custom relative inline-block pl-12 text-sm leading-6 font-medium text-[#C32929] after:absolute after:top-1/2 after:left-0 after:h-0.5 after:w-8 after:-translate-y-1/2 after:bg-[#C32929] md:ml-16.5 md:pl-0 md:after:-left-15 md:after:w-10">
              DEAL OF THE WEEK
            </h4>

            {/* Main Heading */}
            <h2 className="font-custom text-primary-black mt-3 text-[36px] leading-tight font-normal md:mt-2.25 md:text-[70px]">
              <span className="font-bold">Spring</span> Collection
            </h2>

            {/* Shop Button */}
            <Link
              to="/shop"
              className="font-custom text-primary-black relative mt-4 inline-block text-sm leading-6 font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:duration-300 after:content-[''] hover:after:w-[40%]"
            >
              SHOP NOW
            </Link>

            {/* Countdown */}
            <div className="mt-6 flex justify-center md:justify-start">
              <CountDown />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src={springCollection}
              alt="Spring Collection"
              className="w-full max-w-70 md:max-w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SpringCollection;
