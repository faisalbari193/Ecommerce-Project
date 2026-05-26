import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Container from "../ui/Container";
import Breadcrumb from "../common/Breadcrumb";
const ShopSingleGrouped = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return <p className="p-10 text-center">Loading product...</p>;
  }

  return (
    <>
      <Container>
        <Breadcrumb />
        <div className="font-custom">
          {/* Main Product Section */}
          <div className="px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 lg:flex-row">
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="lg:w-1/2">
                <h1 className="mb-2 text-3xl font-bold text-gray-900">
                  {product.title}
                </h1>

                <p className="mb-4 text-2xl font-semibold text-gray-900">
                  ${product.price}
                </p>

                <p className="mb-6 text-gray-600">{product.description}</p>

                {/* Quantity */}
                <div className="mb-6 flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-8 w-8 border"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-8 w-8 border"
                  >
                    +
                  </button>
                </div>

                {/* Add to cart */}
                <button className="w-full bg-black py-3 text-white">
                  Add to Cart
                </button>

                {/* Meta */}
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {/* Brand */}
                  <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:shadow-md">
                    <p className="mb-2 text-xs font-semibold tracking-widest text-gray-400 uppercase">
                      Brand
                    </p>

                    <h3 className="text-base font-semibold text-gray-900">
                      {product.brand}
                    </h3>
                  </div>

                  {/* Category */}
                  <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:shadow-md">
                    <p className="mb-2 text-xs font-semibold tracking-widest text-gray-400 uppercase">
                      Category
                    </p>

                    <h3 className="text-base font-semibold text-gray-900 capitalize">
                      {product.category}
                    </h3>
                  </div>

                  {/* Rating */}
                  <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:shadow-md">
                    <p className="mb-2 text-xs font-semibold tracking-widest text-gray-400 uppercase">
                      Rating
                    </p>

                    <div className="flex items-center gap-2">
                      <span className="text-lg">⭐</span>

                      <h3 className="text-base font-semibold text-gray-900">
                        {product.rating}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs (simplified) */}
            <div className="mt-14">
              {/* Tab Buttons */}
              <div className="flex items-center gap-4 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`relative pb-4 text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                    activeTab === "description"
                      ? "text-black"
                      : "text-gray-400 hover:text-black"
                  }`}
                >
                  Description
                  {activeTab === "description" && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-black"></span>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`relative pb-4 text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                    activeTab === "reviews"
                      ? "text-black"
                      : "text-gray-400 hover:text-black"
                  }`}
                >
                  Reviews
                  {activeTab === "reviews" && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-black"></span>
                  )}
                </button>
              </div>

              {/* Content */}
              <div className="mt-8 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                {activeTab === "description" && (
                  <div className="space-y-5">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Product Description
                    </h3>

                    <p className="leading-8 text-gray-600">
                      {product.description}
                    </p>

                    <div className="grid gap-4 pt-4 md:grid-cols-2">
                      <div className="rounded-2xl bg-gray-50 p-5">
                        <h4 className="mb-2 font-semibold text-gray-900">
                          Product Category
                        </h4>

                        <p className="text-gray-600 capitalize">
                          {product.category}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-gray-50 p-5">
                        <h4 className="mb-2 font-semibold text-gray-900">
                          Product Rating
                        </h4>

                        <p className="text-gray-600">⭐ {product.rating}</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl">
                      💬
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900">
                      No Reviews Yet
                    </h3>

                    <p className="mt-2 max-w-md text-gray-500">
                      This product does not have any reviews yet. Be the first
                      customer to share your experience.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShopSingleGrouped;
