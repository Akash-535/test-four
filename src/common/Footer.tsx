import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#1B1B1B] py-[23px] px-4 max-md:py-3">
      <div className="max-w-[1140px] mx-auto flex items-center justify-between max-md:flex-col max-md:gap-2">
        <p className="text-white opacity-50 max-md:text-sm">
          Made with ❤️ for the people of the internet.
        </p>
        <p className="text-white opacity-50 max-md:text-sm">
          © {new Date().getFullYear()} Dataskate.io, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
