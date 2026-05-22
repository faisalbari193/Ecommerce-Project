import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Container from "../ui/Container";

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
                <div className="mt-6 text-sm text-gray-500">
                  <p>Brand: {product.brand}</p>
                  <p>Category: {product.category}</p>
                  <p>Rating: {product.rating}</p>
                </div>
              </div>
            </div>

            {/* Tabs (simplified) */}
            <div className="mt-10 border-t pt-6">
              <div className="flex gap-6">
                <button onClick={() => setActiveTab("description")}>
                  Description
                </button>
                <button onClick={() => setActiveTab("reviews")}>Reviews</button>
              </div>

              <div className="mt-4">
                {activeTab === "description" && <p>{product.description}</p>}

                {activeTab === "reviews" && <p>No reviews available</p>}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShopSingleGrouped;
