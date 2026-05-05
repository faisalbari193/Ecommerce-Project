import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { IoFilter } from "react-icons/io5";
import Breadcrumb from "../common/Breadcrumb";
import Container from "../ui/Container";
const Sorting = () => {
  const [open, setOpen] = useState(false);
  const [activeView, setActiveView] = useState(4);
  const [selected, setSelected] = useState("DEFAULT SORTING");
  const options = [
    "DEFAULT SORTING",
    "PRICE: LOW TO HIGH",
    "PRICE: HIGH TO LOW",
    "LATEST",
  ];
  return (
    <section className="mt-9 mb-10">
      <Container>
        <div className="flex items-center gap-213.5">
          <Breadcrumb />
          <div className="flex items-center gap-8 pb-3 text-[16px] font-semibold uppercase">
            {/* Sorting */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 border-b-2 border-black pb-1 whitespace-nowrap"
              >
                {selected}
                <FiChevronDown
                  className={`transition-transform ${open ? "rotate-180" : ""}`}
                />
              </button>
              {open && (
                <div className="absolute top-full left-0 z-50 mt-2 w-56 bg-white shadow-lg">
                  {options.map((item) => (
                    <div
                      key={item}
                      onClick={() => {
                        setSelected(item);
                        setOpen(false);
                      }}
                      className="cursor-pointer px-4 py-2 text-[14px] leading-6 hover:bg-gray-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-300"></div>

            {/* View */}
            <div className="flex items-center gap-4">
              <span>VIEW</span>
              {[2, 3, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => setActiveView(num)}
                  className={`pb-1 transition-all duration-200 ${
                    activeView === num
                      ? "border-b-2 border-black text-black"
                      : "text-gray-400"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-300"></div>

            {/* Filter */}
            <button className="flex items-center gap-2 whitespace-nowrap">
              <IoFilter />
              FILTER
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Sorting;
