import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DownArrowIcon } from "../utils/icons";

const Header = () => {
  return (
    <div className="p-4 w-full">
      <div className="flex w-full justify-between items-center max-w-[1140px] mx-auto">
        <div className="flex gap-2.5 items-center max-sm:flex-col max-sm:gap-1">
          <Link href="#">
            <Image
              width={144.39}
              height={33.62}
              src="/assets/images/data-skate-logo.webp"
              alt="logo"
            />
          </Link>
          <span className="w-[1.5px] h-[19px] bg-black max-sm:h-[1.5px] max-sm:w-full"></span>
          <Link
            href="#"
            className="font-syne text-base text-black font-medium leading-[100%]"
          >
            TMM Accelerator
          </Link>
        </div>
        <div className="flex gap-[7px] items-center">
          <Image
            height={40}
            width={40}
            className="max-w-10"
            src="/assets/images/john-doe-img.webp"
            alt="john doe"
          />
          <div>
            <p className="text-base font-syne font-medium leading-[100%] pb-[1px]">
              Jhon doe
            </p>
            <p className="opacity-70 text-sm font-normal leading-[100%]">
              Admin
            </p>
          </div>
          <DownArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
