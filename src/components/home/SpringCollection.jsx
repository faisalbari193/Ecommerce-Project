import React from "react";
import Container from "../ui/Container";
import Image from "../common/Image";
import springCollection from "../../assets/Images/springcollection.png";
import { Link } from "react-router";
import CountDown from "../Counter/CountDown";
const SpringCollection = () => {
  return (
    <section className="mx-15 mt-25 bg-[#EBEBEB] pt-7 pb-7.25">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <h4 className="font-custom after:Content-[''] relative ml-16.5 text-sm leading-6 font-medium text-[#C32929] after:absolute after:top-2 after:-left-15 after:h-0.5 after:w-10 after:bg-[#C32929]">
              DEAL OF THE WEEK
            </h4>
            <h2 className="font-custom text-primary-black mt-2.25 text-[70px] font-normal">
              <span className="font-bold">Spring</span> Collection
            </h2>
            <Link
              to="/shop"
              className="font-custom text-primary-black after:bg-primary-black relative text-sm leading-6 font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-[40%]"
            >
              SHOP NOW
            </Link>
            <CountDown />
          </div>
          <Image src={springCollection} alt="Spring Collection" />
        </div>
      </Container>
    </section>
  );
};

export default SpringCollection;
