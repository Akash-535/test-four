"use client";
import Footer from "@/common/Footer";
import Header from "@/common/Header";
import { DETAILED_METRICS_LIST } from "@/utils/helper";
import {
  ComplexityCodeIcon,
  NextArrowIcon,
  NoMachinesIcon,
  NoParasIcon,
} from "@/utils/icons";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const DetailedMetrices = () => {
  const [saveFileName, setSaveFileName] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  useEffect(() => {
    setSaveFileName(localStorage.getItem("fileName") as any);
    const uploadedImageURL = localStorage.getItem("uploadedImage");
    setUploadedImage(uploadedImageURL);
  });

  const router = useRouter();
  const searchParam = useSearchParams();
  const metrices = searchParam.get("metrices");
  return (
    <div className="flex items-center justify-between flex-col min-h-screen w-full">
      <Header />
      <div className="max-w-[1140px] mx-auto w-full pb-[46px] max-xl:px-4">
        <div className="w-full justify-between flex items-center py-6">
          <p className="text-2xl font-semibold font-syne custom-black max-lg:text-xl max-md:text-lg">
            {saveFileName}
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-4 max-md:px-4 max-md:py-3 border border-[#0D0D0D80] rounded-md cursor-pointer uppercase font-syne leading-[100%] text-sm font-medium hover:bg-[#EA4335] hover:text-white hover:border-transparent duration-300 ease-linear"
          >
            Upload more files
          </button>
        </div>
        <div className="flex items-center justify-center gap-6 flex-wrap max-md:gap-3">
          <div className="flex items-center justify-between bg-white w-full p-[19px] max-md:py-3 pr-4 rounded-lg max-w-[558px] border border-transparent hover:border-[#ED1C24] duration-300 ease-linear">
            <div className="flex gap-4 items-center">
              <ComplexityCodeIcon />
              <p className="text-xl font-syne font-medium leading-[100%] max-lg:text-lg max-md:text-base">
                Complexity of the code
              </p>
            </div>
            <button className="border border-[#ED1C24] uppercase leading-[100%] text-[#ED1C24] py-2 px-4 rounded-full bg-[#FFF1F2] cursor-pointer font-syne hover:text-[#FFF1F2] hover:bg-[#ED1C24] duration-300 ease-linear">
              high
            </button>
          </div>
          <div className="flex gap-4 items-center bg-white py-[19px] px-4 rounded-lg w-full max-w-[267px] max-md:py-3 border border-transparent hover:border-[#ED1C24] duration-300 ease-linear max-md:max-w-none">
            <NoMachinesIcon />
            <div>
              <span className="leading-[100%] font-syne font-medium text-[28px]">
                -
              </span>
              <p className="text-sm leading-[100%]">No of Machines</p>
            </div>
          </div>
          <div className="flex gap-4 items-center bg-white py-[19px] px-4 rounded-lg w-full max-w-[267px] max-md:py-3 border border-transparent hover:border-[#ED1C24] duration-300 ease-linear max-md:max-w-none">
            <NoParasIcon />
            <div>
              <span className="leading-[100%] font-syne font-medium text-[28px]">
                -
              </span>
              <p className="text-sm leading-[100%]">No of Pars</p>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold custom-black pt-8 pb-6 leading-[100%] max-lg:text-center">
          Detailed metrices
        </h2>
        <div className="flex justify-between w-full flex-wrap max-lg:justify-center max-lg:gap-6">
          <div className="flex flex-col gap-4 max-w-[558px] w-full max-xl:max-w-[480px] max-lg:max-w-[600px]">
            {DETAILED_METRICS_LIST.map((obj, i) => (
              <button
                key={i}
                className={`py-3 px-4 flex justify-between items-center bg-white rounded-lg border hover:border-[#ED1C24] duration-300 ease-linear max-lg:max-w-none ${
                  metrices === obj.title.toLowerCase().replaceAll(" ", "-")
                    ? "border-[#EA4335]"
                    : "border-transparent"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(
                    `/dashboard?metrices=${obj.title
                      .toLowerCase()
                      .replaceAll(" ", "-")}`,
                    { scroll: false }
                  );
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-semibold font-syne size-10 bg-[#FFF1F2] rounded-full flex items-center justify-center">
                    {obj.num}
                  </span>
                  <span className="text-sm font-normal leading-[100%]">
                    {obj.title}
                  </span>
                </div>
                <NextArrowIcon />
              </button>
            ))}
          </div>
          <div className="bg-white min-h-[464px] max-lg:min-h-[380px] w-full max-w-[558px] max-xl:max-w-[480px] flex flex-col justify-center items-start pl-5 rounded-lg">
            <Image
              width={497}
              height={315.08}
              className="max-w-[497px] object-cover pointer-events-none w-full"
              src="/assets/images/color-circle-img.webp"
              alt="image"
            />
            <p className="text-start pt-16 text-xl font-syne font-medium">
              11 Starter processes
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailedMetrices;
