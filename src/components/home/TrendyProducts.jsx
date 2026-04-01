import React from "react";
import Container from "../ui/Container";
import { ProductCategoryData } from "../../api/productcategory";

const TrendyProducts = () => {
  return (
    <section className="mt-25.25">
      <Container>
        <h2 className="font-custom text-primary-black text-center text-[35px] font-normal">
          OUR TRENDY <span className="font-bold">PRODUCTS</span>
        </h2>
        <ul className="flex justify-center gap-13.5">
          {ProductCategoryData?.map((item) => (
            <li
              key={item.id}
              className="font-custom after:bg-primary-black relative cursor-pointer text-base font-medium text-[#767676] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-[40%]"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default TrendyProducts;
