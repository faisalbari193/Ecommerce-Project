import React, { useEffect, useRef, useState } from "react";
import navImage from "../../../public/images/logo.png";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const MobileNav = () => {
  const cartItems = 3;

  const sidebarRef = useRef(null);
  const [openMobileSideBar, setOpenMobileSideBar] = useState(false);

  // Close outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setOpenMobileSideBar(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when sidebar open
  useEffect(() => {
    if (openMobileSideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMobileSideBar]);

  return (
    <nav className="md:hidden">
      {/* Top Navbar */}
      <div className="relative flex items-center justify-between px-4 py-3">
        {/* Menu Button */}
        <button onClick={() => setOpenMobileSideBar(!openMobileSideBar)}>
          <svg
            width="25"
            height="18"
            viewBox="0 0 25 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="25" height="2" fill="#222222" />
            <rect y="8" width="20" height="2" fill="#222222" />
            <rect y="16" width="25" height="2" fill="#222222" />
          </svg>
        </button>

        {/* Logo */}
        <Link to="/">
          <img src={navImage} alt="logo" className="w-28 object-contain" />
        </Link>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6869 4.6875H15.3021C14.9912 2.05164 12.74 0 10.0174 0C7.29479 0 5.04353 2.05164 4.73264 4.6875H2.3478C1.91556 4.6875 1.56519 5.03727 1.56519 5.46875V19.2188C1.56519 19.6502 1.91556 20 2.3478 20H17.6869C18.1192 20 18.4696 19.6502 18.4696 19.2188V5.46875C18.4696 5.03727 18.1192 4.6875 17.6869 4.6875ZM10.0174 1.5625C11.8754 1.5625 13.4225 2.91621 13.7214 4.6875H6.31332C6.61228 2.91621 8.1593 1.5625 10.0174 1.5625ZM16.9043 18.4375H3.13041V6.25H4.69563V8.59375C4.69563 9.02523 5.046 9.375 5.47824 9.375C5.91047 9.375 6.26084 9.02523 6.26084 8.59375V6.25H13.7739V8.59375C13.7739 9.02523 14.1243 9.375 14.5565 9.375C14.9887 9.375 15.3391 9.02523 15.3391 8.59375V6.25H16.9043V18.4375Z"
              fill="#222222"
            />
          </svg>

          <span className="font-custom bg-third-color absolute -top-2 -right-2 rounded-full px-1.5 text-[10px] font-medium text-white">
            {cartItems}
          </span>
        </Link>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          openMobileSideBar ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Sidebar */}
      <div ref={sidebarRef}>
        <div
          className={`fixed top-0 left-0 z-50 flex h-full w-[75%] max-w-75 flex-col justify-between bg-white px-6 py-8 shadow-2xl transition-transform duration-500 ${
            openMobileSideBar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Top Section */}
          <div>
            {/* Close Button */}
            <button
              onClick={() => setOpenMobileSideBar(false)}
              className="absolute top-4 right-4 text-2xl text-black"
            >
              ✕
            </button>

            {/* Menu */}
            <ul className="mt-10 space-y-5">
              {[
                "HOME",
                "SHOP",
                "COLLECTION",
                "JOURNAL",
                "LOOKBOOK",
                "PAGES",
              ].map((item, index) => (
                <li
                  key={index}
                  className="group relative cursor-pointer text-[15px] font-medium tracking-wide text-black"
                >
                  <span className="relative inline-block">
                    {item}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-[60%]" />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Social */}
          <div>
            <p className="mb-4 text-sm font-medium text-gray-500">Follow Us</p>

            <div className="flex items-center gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-black hover:text-white"
                  >
                    <Icon />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
