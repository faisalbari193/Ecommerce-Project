import React from "react";
import Container from "../ui/Container";
import Pagination from "./Pagination";

const AllProducts = ({ products, activeView }) => {
  return (
    <section className="mt-10 mb-12.5">
      <Container>
        <div
        >
          {/* {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))} */}
          <Pagination itemsPerPage={8} products={products} activeView={activeView}/>
        </div>
      </Container>
    </section>
  );
};
export default AllProducts;
