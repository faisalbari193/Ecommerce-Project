import React from "react";
import { Link, useLocation } from "react-router";

const Breadcrumb = () => {
  let { pathname } = useLocation();
  let location = pathname.split("/").pop();
  return (
    <h2 className="font-custom text-[16px] leading-6 font-medium">
      <Link to="/">Home</Link>/{location}
    </h2>
  );
};

export default Breadcrumb;
