import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const NewsletterModal = () => {
  const [openModal, setOpenModal] = useState(false);

  // Website load hole modal show korbe
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[2px]"
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-107.5 w-175 overflow-hidden bg-white shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 cursor-pointer text-[22px] text-black"
        >
          <IoCloseOutline />
        </button>

        {/* Left Side */}
        <div className="relative flex w-1/2 items-center justify-center bg-[#F3F3F3]">
          {/* Circle */}
          <div className="absolute bottom-8 left-0 h-40 w-40 rounded-full bg-[#CFCFCF]"></div>

          {/* Triangle */}
          <div
            className="absolute top-20.5 left-29.5 h-0 w-0"
            style={{
              borderLeft: "75px solid transparent",
              borderRight: "75px solid transparent",
              borderBottom: "130px solid #BDBDBD",
            }}
          ></div>
        </div>

        {/* Right Side */}
        <div className="py-46.75 px-10.25">
          <h2 className="mb-3.5 font-custom font-medium text-[26px]">
            Sign Up to Our Newsletter
          </h2>

          <p className="mb-3.75 text-[14px] leading-6 text-[#666]">
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>

          {/* Input */}
          <div className="flex h-12 border border-[#D9D9D9]">
            <input
              type="email"
              placeholder="Your email address"
              className="h-full flex-1 px-4 text-[13px] outline-none"
            />

            <button className="cursor-pointer px-6 text-[12px] font-semibold tracking-wide uppercase">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;
