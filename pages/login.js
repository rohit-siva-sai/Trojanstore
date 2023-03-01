import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillLockFill } from "react-icons/bs";

import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://trojanstore.vercel.app" });
  }
  async function handleGithubSignin() {
    signIn("github", { callbackUrl: "http://trojanstore.vercel.app" });
  }

  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (localStorage.getItem("signup")) {
      setDetails(JSON.parse(localStorage.getItem("signup")));
    }
    const email1 = details.email;
    const pass1 = details.password;

    setEmail("");

    setPassword("");
    if (email1 == email && pass1 == password) {
      toast.success("Login Successfully done", {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } else {
      toast.error("Entered wrong Credentials", {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link href={"/signup"}>
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  {" "}
                  Signup
                </a>
              </Link>
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
            method="POST"
          >
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  value={email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  value={password}
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href={"/forgot"}>
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <BsFillLockFill />
                </span>
                Sign in
              </button>
              <p className="text-sm mt-1 text-gray-400">
                Sign-up before sign-in and enter details 2 times to sign-in
              </p>
            </div>
          </form>
          <div className="input-button rounded-md">
          <button
            type="button"
            className="w-full border py-3 text-white flex justify-center gap-2 bg-blue-600 hover:bg-blue-700 rounded-lg "
            onClick={handleGoogleSignin}
          >
            Sign in with Google{" "}
            <Image src={"/google.png"} alt="" width={20} height={20} />
          </button>
        </div>
        <div className="input-button ">
          <button
            type="button"
            className="w-full border py-3 text-white flex justify-center gap-2 hover:bg-blue-700  bg-blue-600 rounded-lg "
            onClick={handleGithubSignin}
          >
            Sign in with Github{" "}
            <Image src={"/github.png"} alt="" width={20} height={20} />
          </button>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Login;
