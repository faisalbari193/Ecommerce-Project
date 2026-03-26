import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="absolute top-1/2 left-0 z-20 flex -translate-y-1/2 flex-col items-center gap-[18.62px]">
      <a
        href="#"
        className="flex h-8 w-8 items-center justify-center rounded-full text-gray-600 transition hover:bg-black hover:text-white"
      >
        <FaFacebookF className="text-[14px]" />
      </a>

      <a
        href="#"
        className="flex h-8 w-8 items-center justify-center rounded-full text-gray-600 transition hover:bg-black hover:text-white"
      >
        <FaTwitter className="text-[14px]" />
      </a>

      <a
        href="#"
        className="flex h-8 w-8 items-center justify-center rounded-full text-gray-600 transition hover:bg-black hover:text-white"
      >
        <FaInstagram className="text-[14px]" />
      </a>

      <a
        href="#"
        className="flex h-8 w-8 items-center justify-center rounded-full text-gray-600 transition hover:bg-black hover:text-white"
      >
        <FaPinterestP className="text-[14px]" />
      </a>

      {/* FOLLOW TEXT */}
      <p className="font-custom mt-10 -rotate-90 cursor-pointer text-[14px] leading-6 font-medium tracking-widest text-gray-600">
        FOLLOW US
      </p>
    </div>
  );
};

export default SocialSidebar;
