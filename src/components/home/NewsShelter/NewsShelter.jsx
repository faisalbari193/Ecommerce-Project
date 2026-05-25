import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const NewsletterModal = () => {
  const [openModal, setOpenModal] = useState(false);

  // Website load hole modal show korbe
  useEffect(() => {
    setOpenModal(true);
  }, []);

  // Modal close function
  const handleClose = () => {
    setOpenModal(false);
  };

  // Modal close hole kichu render korbe na
  if (!openModal) return null;

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 backdrop-blur-[2px]"
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-5xl flex-col overflow-hidden bg-white shadow-2xl md:flex-row"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 cursor-pointer text-[22px] text-black md:top-5 md:right-5"
        >
          <IoCloseOutline />
        </button>

        {/* Left Side */}
        <div className="relative hidden min-h-[250px] w-full items-center justify-center bg-[#F3F3F3] md:flex md:w-1/2">
          {/* Circle */}
          <div className="absolute bottom-6 left-0 h-28 w-28 rounded-full bg-[#CFCFCF] md:h-40 md:w-40"></div>

          {/* Triangle */}
          <div
            className="absolute top-16 left-1/2 h-0 w-0 -translate-x-1/2 md:top-20"
            style={{
              borderLeft: "60px solid transparent",
              borderRight: "60px solid transparent",
              borderBottom: "110px solid #BDBDBD",
            }}
          ></div>
        </div>

        {/* Right Side */}
        <div className="w-full px-6 py-14 sm:px-8 md:w-1/2 md:px-10 md:py-32">
          <h2 className="font-custom mb-4 text-[22px] font-medium md:text-[26px]">
            Sign Up to Our Newsletter
          </h2>

          <p className="mb-5 text-[14px] leading-6 text-[#666]">
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>

          {/* Input */}
          <div className="flex flex-col overflow-hidden rounded-md border border-[#D9D9D9] sm:h-12 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="h-12 w-full px-4 text-[13px] outline-none sm:flex-1"
            />

            <button className="h-12 w-full cursor-pointer border-t border-[#D9D9D9] px-6 text-[12px] font-semibold tracking-wide uppercase duration-300 hover:bg-black hover:text-white sm:w-auto sm:border-t-0 sm:border-l">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;
