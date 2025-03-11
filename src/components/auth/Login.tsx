"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Login = () => {
  const formData = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const [value, setValue] = useState(formData);
  const [error, setError] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated === "true") {
      router.push("/upload");
    }
  }, [router]);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const FormHandler = (e: any) => {
    e.preventDefault();
    setError(true);
    if (
      value.firstName &&
      value.lastName &&
      value.email &&
      emailRegex.test(value.email)
    ) {
      if (typeof window !== "undefined") {
        const data = JSON.stringify(value);
        localStorage.setItem("auth", data);
      }

      setError(false);
      setValue(formData);
      localStorage.setItem("isAuthenticated", "true");
      router.push("/upload");
    }
  };

  return (
    <div className="min-h-screen relative flex justify-center items-center px-4">
      <Image
        width={169.25}
        height={211.02}
        className="absolute max-w-[169.02px] left-0 top-[10%]"
        src="/assets/images/left-vector.webp"
        alt="left vector"
      />
      <Image
        width={169.25}
        height={211.02}
        className="absolute max-w-[169.02px] right-0 bottom-[10%]"
        src="/assets/images/right-vector.webp"
        alt="right vector"
      />
      <div className="w-full flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold leading-[58px] font-syne">
          Welcome Back
        </h1>
        <p className="text-sm font-normal leading-[30px] font-syne pl-0.5 pb-5">
          Welcome back! Please enter your details.
        </p>
        <form className="w-full flex justify-center items-center flex-col gap-3">
          <div className="w-3/12 max-lg:w-6/12 max-md:w-8/12 max-sm:w-full overflow-hidden">
            <input
              type="text"
              onChange={(e) =>
                setValue({ ...value, firstName: e.target.value })
              }
              value={value.firstName}
              placeholder="Enter your first name"
              className="outline-none w-full py-2.5 px-3 border-2 rounded-xl"
            />
            {error && value.firstName.length === 0 && (
              <p className="pl-1 pt-0.5 text-red-500 font-syne">
                Please enter your name
              </p>
            )}
          </div>
          <div className="w-3/12 max-lg:w-6/12 max-md:w-8/12 max-sm:w-full overflow-hidden">
            <input
              type="text"
              onChange={(e) => setValue({ ...value, lastName: e.target.value })}
              value={value.lastName}
              placeholder="Enter your last name"
              className="outline-none w-full py-2.5 px-3 border-2 rounded-xl"
            />
            {error && value.lastName.length === 0 && (
              <p className="pl-1 pt-0.5 text-red-500 font-syne">
                Please enter your last name
              </p>
            )}
          </div>
          <div className="w-3/12 max-lg:w-6/12 max-md:w-8/12 max-sm:w-full overflow-hidden">
            <input
              type="email"
              onChange={(e) => setValue({ ...value, email: e.target.value })}
              value={value.email}
              placeholder="Enter your email"
              className="outline-none w-full py-2.5 px-3 border-2 rounded-xl"
            />
            {error && value.email.length === 0 ? (
              <p className="pl-1 pt-0.5 text-red-500 font-syne">
                Please enter your email
              </p>
            ) : (
              !emailRegex.test(value.email) &&
              value.email.length > 0 && (
                <p className="pl-1 pt-0.5 text-red-500 font-syne">
                  Please enter valid email
                </p>
              )
            )}
          </div>
          <button
            onClick={FormHandler}
            className="border-2 rounded-xl px-5 py-3 cursor-pointer hover:bg-[#ED1C24] hover:text-white hover:border-transparent duration-300 ease-linear"
          >
            Submit Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
