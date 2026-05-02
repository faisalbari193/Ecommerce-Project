// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaYoutube,
//   FaPinterestP,
// } from "react-icons/fa";
// import FooterImage from "../../../public/images/logo.png";
// import Container from "../ui/Container";
// import Payment from "../../assets/Images/payments.png";
// const Footer = () => {
//   return (
//     <footer className="bg-[#E4E4E4]">
//       <Container>
//         {/* Main Footer */}
//         <div className="grid grid-cols-5 pt-25 pb-22">
//           {/* Col 1 — Logo + Info */}
//           <div className="flex min-w-55 flex-col">
//             {/* Logo */}
//             <img src={FooterImage} alt="UOMO" className="max-w-[111.55px]" />
//             {/* Address */}
//             <p className="font-custom mt-11.25 mb-7 text-[14px] leading-6">
//               <span className="block">
//                 1418 River Drive, Suite 35 Cottonhall, CA 9622
//               </span>
//               <span className="block">United States</span>
//             </p>
//             {/* Contact */}
//             <div>
//               <a
//                 href="mailto:sale@uomo.com"
//                 className="font-custom block text-[13px] text-black"
//               >
//                 sale@uomo.com
//               </a>
//               <a
//                 href="tel:+12463450695"
//                 className="font-custom block text-[13px] text-black"
//               >
//                 +1 246-345-0695
//               </a>
//             </div>
//             {/* Social Icons */}
//             <div className="mt-[47.69px] flex items-center gap-4">
//               <a
//                 href="#"
//                 className="text-[15px] text-gray-500 transition-colors hover:text-black"
//               >
//                 <FaFacebookF />
//               </a>
//               <a
//                 href="#"
//                 className="text-[15px] text-gray-500 transition-colors hover:text-black"
//               >
//                 <FaTwitter />
//               </a>
//               <a
//                 href="#"
//                 className="text-[15px] text-gray-500 transition-colors hover:text-black"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="#"
//                 className="text-[15px] text-gray-500 transition-colors hover:text-black"
//               >
//                 <FaYoutube />
//               </a>
//               <a
//                 href="#"
//                 className="text-[15px] text-gray-500 transition-colors hover:text-black"
//               >
//                 <FaPinterestP />
//               </a>
//             </div>
//           </div>
//           {/* Col 2 — Company */}
//           <div>
//             <h4 className="font-custom mb-6.75 text-[18px] font-medium uppercase">
//               Company
//             </h4>
//             <ul className="flex flex-col gap-y-3.75">
//               {["About Us", "Careers", "Affiliates", "Blog", "Contact Us"].map(
//                 (item) => (
//                   <li key={item}>
//                     <a
//                       href="#"
//                       className="font-custom after:bg-primary-black relative text-[14px] font-normal text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-[40%]"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ),
//               )}
//             </ul>
//           </div>

//           {/* Col 3 — Shop */}
//           <div>
//             <h4 className="font-custom mb-6.75 text-[18px] font-medium uppercase">
//               Shop
//             </h4>
//             <ul className="flex flex-col gap-y-3.75">
//               {["New Arrivals", "Accessories", "Men", "Women", "Shop All"].map(
//                 (item) => (
//                   <li key={item}>
//                     <a
//                       href="#"
//                       className="font-custom after:bg-primary-black relative text-[14px] font-normal text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-[40%]"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ),
//               )}
//             </ul>
//           </div>

//           {/* Col 4 — Help */}
//           <div>
//             <h4 className="font-custom mb-6.75 text-[18px] font-medium uppercase">
//               Help
//             </h4>
//             <ul className="flex flex-col gap-y-3.75">
//               {[
//                 "Customer Service",
//                 "My Account",
//                 "Find a Store",
//                 "Legal & Privacy",
//                 "Contact",
//                 "Gift Card",
//               ].map((item) => (
//                 <li key={item}>
//                   <a
//                     href="#"
//                     className="font-custom after:bg-primary-black relative text-[14px] font-normal text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-[40%]"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Col 5 — Subscribe */}
//           <div>
//             <h4 className="font-custom mb-6.75 text-[18px] font-medium uppercase">
//               Subscribe
//             </h4>
//             <p className="font-custom mb-3.75 text-[14px] leading-6 font-normal text-gray-500">
//               Be the first to get the latest news about trends, promotions, and
//               much more!
//             </p>

//             {/* Email Input */}
//             <div className="mb-6 flex items-center border border-white bg-white">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="flex-1 bg-transparent px-3 py-3 text-[12px] text-gray-500 outline-none"
//               />
//               <a className="cursor-pointer bg-white pt-4.25 pr-5 pb-3.5 text-[12px] font-semibold text-gray-900 transition-colors">
//                 JOIN
//               </a>
//             </div>

//             {/* Secure Payments */}
//             <div>
//               <p className="font-custom mb-2.75 text-[15px] font-medium">
//                 Secure payments
//               </p>
//               <div className="flex items-center gap-3">
//                 <img src={Payment} alt="" />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Bottom Bar */}
//         <div className="border-t border-[#CFCDCD]">
//           <div className="flex items-center justify-between pt-8.5 pb-7">
//             <p className="text-[12px] text-gray-400">©2020 Uomo</p>

//             <div className="flex items-center gap-6">
//               <div className="flex items-center gap-2">
//                 <span className="text-[12px] text-gray-400">Language</span>
//                 <button className="flex cursor-pointer items-center gap-1 text-[12px] font-medium text-gray-700 transition-colors hover:text-black">
//                   United Kingdom | English
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-3 w-3"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M5 15l7-7 7 7"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               <div className="flex items-center gap-2">
//                 <span className="text-[12px] text-gray-400">Currency</span>
//                 <button className="flex cursor-pointer items-center gap-1 text-[12px] font-medium text-gray-700 transition-colors hover:text-black">
//                   $ USD
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-3 w-3"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M5 15l7-7 7 7"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import FooterImage from "../../../public/images/logo.png";
import Container from "../ui/Container";
import Payment from "../../assets/Images/payments.png";

const Footer = () => {
  return (
    <footer className="bg-[#E4E4E4]">
      <Container>
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 pt-20 pb-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.3fr]">
          {/* Col 1 */}
          <div className="flex max-w-65 shrink-0 flex-col">
            <img src={FooterImage} alt="UOMO" className="max-w-27.5" />

            <p className="font-custom mt-11.25 mb-7 text-[14px] leading-6 whitespace-nowrap">
              1418 River Drive, Suite 35 Cottonhall, CA 9622
              <span className="block">United State</span>
            </p>

            <div className="space-y-1">
              <a href="#" className="block text-[13px] text-black">
                sale@uomo.com
              </a>
              <a href="#" className="block text-[13px] text-black">
                +1 246-345-0695
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-gray-500">
              <FaFacebookF className="cursor-pointer hover:text-black" />
              <FaTwitter className="cursor-pointer hover:text-black" />
              <FaInstagram className="cursor-pointer hover:text-black" />
              <FaYoutube className="cursor-pointer hover:text-black" />
              <FaPinterestP className="cursor-pointer hover:text-black" />
            </div>
          </div>

          {/* Reusable Column */}
          {[
            {
              title: "Company",
              items: [
                "About Us",
                "Careers",
                "Affiliates",
                "Blog",
                "Contact Us",
              ],
            },
            {
              title: "Shop",
              items: [
                "New Arrivals",
                "Accessories",
                "Men",
                "Women",
                "Shop All",
              ],
            },
            {
              title: "Help",
              items: [
                "Customer Service",
                "My Account",
                "Find a Store",
                "Legal & Privacy",
                "Contact",
                "Gift Card",
              ],
            },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-custom mb-6.75 text-[18px] font-medium uppercase">
                {col.title}
              </h4>
              <ul className="space-y-3 text-[14px] text-gray-700">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="font-custom after:bg-primary-black relative cursor-pointer text-[14px] font-normal text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-[10%]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe */}
          <div>
            <h4 className="mb-6 text-[16px] font-semibold uppercase">
              Subscribe
            </h4>

            <p className="mb-4 text-[14px] text-gray-500">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>

            <div className="flex bg-white">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-3 py-3 text-sm outline-none"
              />
              <button className="px-5 text-sm font-semibold">JOIN</button>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-[14px] font-medium">Secure payments</p>
              <a href="#">
                <img src={Payment} alt="payments" className="h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-300 pt-6 pb-6 md:flex-row">
          <p className="text-[12px] text-gray-400">©2020 Uomo</p>

          <div className="flex items-center gap-6 text-[12px] text-gray-600">
            <span>Language: United Kingdom | English</span>
            <span>Currency: $ USD</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
