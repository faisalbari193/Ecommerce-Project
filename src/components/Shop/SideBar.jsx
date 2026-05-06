import { FiX, FiChevronDown, FiSearch } from "react-icons/fi";

const Sidebar = ({ setFilterModal }) => {
  return (
    <div className="overflow-y-auto bg-[#FAF9F8] px-6 py-5">
      {/* Header */}
      <div className="flex items-center justify-between pt-8.25 pb-6.5">
        <h3 className="text-[14px] font-semibold tracking-wide">FILTER BY</h3>
        <FiX
          onClick={() => setFilterModal(false)}
          className="cursor-pointer text-[18px]"
        />
      </div>

      {/* PRODUCT CATEGORIES */}
      <div className="mb-7">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-[13px] font-semibold uppercase">
            Product Categories
          </h4>
          <FiChevronDown />
        </div>

        <div className="grid grid-cols-2 gap-y-2 text-[13px] text-gray-700">
          {[
            "Dresses",
            "Shorts",
            "Sweatshirts",
            "Swimwear",
            "Jackets",
            "T-Shirts & Tops",
            "Jeans",
            "Trousers",
            "Men",
            "Jumpers & Cardigans",
          ].map((item) => (
            <p key={item} className="cursor-pointer hover:text-black">
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* COLOR */}
      <div className="mb-7">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-[13px] font-semibold uppercase">Color</h4>
          <FiChevronDown />
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            "#1E3A8A",
            "#D4AF37",
            "#000000",
            "#E5E5E5",
            "#A3A3A3",
            "#C08457",
            "#F97316",
            "#FCA5A5",
            "#EF4444",
            "#86EFAC",
          ].map((color, i) => (
            <div
              key={i}
              className="h-4 w-4 cursor-pointer rounded-full border"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>

      {/* SIZES */}
      <div className="mb-7">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-[13px] font-semibold uppercase">Sizes</h4>
          <FiChevronDown />
        </div>

        <div className="flex flex-wrap gap-2">
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              className="border px-3 py-1 text-[12px] hover:bg-black hover:text-white"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* BRANDS */}
      <div className="mb-7">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-[13px] font-semibold uppercase">Brands</h4>
          <FiChevronDown />
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full border px-3 py-2 text-[12px] outline-none"
          />
          <FiSearch className="absolute top-2.5 right-3 text-gray-500" />
        </div>

        {/* Brand list */}
        <div className="space-y-2 text-[13px]">
          {[
            ["Adidas", 2],
            ["Balmain", 7],
            ["Balenciaga", 10],
            ["Burberry", 39],
            ["Kenzo", 95],
            ["Givenchy", 1092],
            ["Zara", 48],
          ].map(([name, count]) => (
            <label
              key={name}
              className="flex cursor-pointer items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span>{name}</span>
              </div>
              <span className="text-gray-500">{count}</span>
            </label>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="mb-7">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-[13px] font-semibold uppercase">Price</h4>
          <FiChevronDown />
        </div>

        <input type="range" className="mb-2 w-full" />

        <div className="mb-3 flex justify-between text-[12px] text-gray-500">
          <span>Min Price: $29</span>
          <span>Max Price: $937</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {["Billes", "Max Price: $491", "Zara"].map((tag) => (
            <span key={tag} className="bg-gray-200 px-2 py-1 text-[11px]">
              ✕ {tag}
            </span>
          ))}
          <span className="cursor-pointer bg-gray-200 px-2 py-1 text-[11px]">
            ✕ RESET FILTER
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
