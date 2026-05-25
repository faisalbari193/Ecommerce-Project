import React, { useState } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  Star,
  ArrowRight,
  Tag,
} from "lucide-react";

const JournalPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [email, setEmail] = useState("");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "men", name: "Men" },
    { id: "women", name: "Women" },
    { id: "accessories", name: "Accessories" },
    { id: "sale", name: "Sale" },
  ];

  const featuredProduct = {
    title: "Premium Streetwear Collection 2026",
    desc: "Up to 40% off limited summer drops. Premium quality streetwear for modern lifestyle.",
    image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
  };

  const products = [
    {
      id: 1,
      title: "Oversized Hoodie",
      price: "$45",
      oldPrice: "$70",
      image:
        "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
      rating: 4.5,
      category: "men",
    },
    {
      id: 2,
      title: "Minimal T-Shirt",
      price: "$25",
      oldPrice: "$40",
      image:
        "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg",
      rating: 4.2,
      category: "women",
    },
    {
      id: 3,
      title: "Sneakers Pro",
      price: "$80",
      oldPrice: "$120",
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      rating: 4.8,
      category: "accessories",
    },
  ];

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-linear-to-r from-black via-gray-900 to-black py-16 text-center text-white">
        <h1 className="text-4xl font-bold md:text-6xl">Shop Collection</h1>
        <p className="mt-3 text-gray-300">
          Discover premium fashion & lifestyle products
        </p>

        {/* Search */}
        <div className="mx-auto mt-6 max-w-md">
          <div className="relative">
            <Search className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-full bg-white/10 px-12 py-3 text-white placeholder-gray-400 backdrop-blur focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* Categories */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2 text-sm transition ${
                activeCategory === cat.id
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-black hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Featured Banner */}
        <div className="relative mb-12 overflow-hidden rounded-2xl">
          <img
            src={featuredProduct.image}
            className="h-72 w-full object-cover md:h-96"
          />
          <div className="absolute inset-0 flex items-center bg-black/40 p-8 text-white">
            <div>
              <h2 className="text-2xl font-bold md:text-4xl">
                {featuredProduct.title}
              </h2>
              <p className="mt-2 max-w-md text-gray-200">
                {featuredProduct.desc}
              </p>
              <button className="mt-4 flex items-center gap-2 rounded-full bg-white px-5 py-2 text-black">
                Shop Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl border p-4 transition hover:shadow-lg"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  className="h-56 w-full object-cover transition group-hover:scale-105"
                />
                <button className="absolute top-3 right-3 rounded-full bg-white p-2">
                  <Heart size={16} />
                </button>
              </div>

              <h3 className="mt-3 font-semibold">{product.title}</h3>

              <div className="flex items-center gap-1 text-sm text-yellow-500">
                <Star size={14} /> {product.rating}
              </div>

              <div className="mt-2 flex items-center gap-2">
                <span className="font-bold">{product.price}</span>
                <span className="text-sm text-gray-400 line-through">
                  {product.oldPrice}
                </span>
              </div>

              <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-black py-2 text-white">
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 rounded-2xl bg-black p-10 text-center text-white">
          <h3 className="text-2xl font-bold">Get Exclusive Offers</h3>
          <p className="mt-2 text-gray-300">
            Subscribe to get discount updates & new arrivals
          </p>

          <div className="mx-auto mt-6 flex max-w-md">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-l-lg px-4 py-2"
              placeholder="Email address"
            />
            <button className="rounded-r-lg bg-white px-5 py-2 text-black">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalPage;
