import React from "react";
import Image from "../../common/Image";
import { Link } from "react-router";

const Card = ({ item }) => {
  return (
    <div
      key={item.id}
      className={`relative w-full overflow-hidden ${item.id === 1 ? "h-70 md:col-span-2 md:row-span-2 md:h-full" : ""} ${item.id === 2 ? "h-50 md:col-span-2 md:row-span-1 md:h-full" : ""} ${item.id !== 1 && item.id !== 2 ? "h-50 md:h-full" : ""} `}
    >
      <Image
        src={item.image}
        className="h-full w-full object-cover"
        alt={item.name}
      />

      {/* Gradient overlay — mobile-এ text readable রাখতে */}
      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent md:hidden" />

      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
        <h4 className="font-custom text-primary-black text-[9px] leading-5 font-normal md:text-sm md:leading-6">
          HOT LIST
        </h4>
        <h2 className="font-custom text-base leading-tight font-medium md:text-[24px]">
          {item.name} <span className="font-bold">COLLECTION</span>
        </h2>
        <Link
          to={item.link}
          className="font-custom text-primary-black after:bg-primary-black relative text-xs leading-6 font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-[40%] md:text-sm"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default Card;
