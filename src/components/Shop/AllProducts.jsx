import React from "react";
import Container from "../ui/Container";
import Product from "../common/Product";

const AllProducts = ({ products, activeView }) => {
  return (
    <section className="mt-10 mb-12.5">
      <Container>
        <div
          style={{
            gridTemplateColumns: `${activeView == 2 ? "1fr 1fr" : activeView == 3 ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr"}`,
          }}
          className={`grid gap-x-7.5 gap-y-15`}
        >
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default AllProducts;
