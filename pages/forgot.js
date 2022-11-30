import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillLockFill } from "react-icons/bs";

import { useRouter } from "next/router";

const Forgot = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const handleChange = async (e) => {
    // console.log(user,email);

    if (e.target.name == "email") {
      setEmail(e.target.value);
    }
  };

  const sendResetEmail = async () => {
    toast.success("An verification code is sent to your mail", {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div>
      <div className="flex md:min-h-[80vh] min-h-[70vh] items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <picture>
            <img
              className="mx-auto h-12 w-auto"
              src="/trojanlogo.jpg"
              alt="Your Company"
            />
            </picture>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Forgot Password
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link href={"/signup"}>
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  {" "}
                  Login
                </a>
              </Link>
            </p>
          </div>

          <div>
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px my-2 rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={handleChange}
                  value={email}
                  id="email-address"
                  name="email"
                  type="email"
                  required={true}
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div>
              <button
                onClick={sendResetEmail}
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <BsFillLockFill />
                </span>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
