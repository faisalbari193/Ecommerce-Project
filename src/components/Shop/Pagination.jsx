import { useState } from "react";
import ReactPaginateLib from "react-paginate";
import Product from "../common/Product";
const Pagination = ({ itemsPerPage, products, activeView }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const items = products;
  const ReactPaginate = ReactPaginateLib.default || ReactPaginateLib;
  function Items({ currentItems }) {
    return (
      <div
        style={{
          gridTemplateColumns: `${activeView == 2 ? "1fr 1fr" : activeView == 3 ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr"}`,
        }}
        className={`grid gap-x-7.5 gap-y-15`}
      >
        {currentItems &&
          currentItems.map((item) => (
            <div key={item}>
              <Product key={item.id} product={item} />
            </div>
          ))}
      </div>
    );
  }
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="NEXT >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< PREV"
        renderOnZeroPageCount={null}
        className="font-jost text-primary-black relative mt-20 flex justify-center gap-7.75 text-base font-medium"
        previousClassName="  absolute left-0 top-2/4  -translate-y-2/4 "
        nextClassName="  absolute right-0  top-2/4  -translate-y-2/4"
        activeLinkClassName="underline"
      />
    </>
  );
};

export default Pagination;
