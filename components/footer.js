import Link from "next/link";
import React from "react";
import { BsFillBagFill, BsStars, BsFillGiftFill } from "react-icons/bs";

import { BiHelpCircle } from "react-icons/bi";
import { useState } from "react";


const Footer = () => {
  const [game, setGame] = useState(false);

  return (
    <div className="">
      <span>
        {game && (
          <div className="text-white fixed left-40 font-medium font-serif bottom-[80px]  hidden md:block rounded-md z-30 bg-gray-400 px-2">
            This is a special game for our customers - click to play{" "}
          </div>
        )}
      </span>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-52 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href={"/"}>
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <picture>
                  {" "}
                  <img src="/trojan.png" alt="" width={200} height={50} />
                </picture>
              </a>
            </Link>

            <p className="mt-2 text-sm  ml-3 text-gray-500 leading-4">
              All products at one place - Trojan store
            </p>
            <p className="mt-2 text-sm  ml-3 text-gray-500 leading-5"></p>

            <a href="https://crossblocks.vercel.app/">
              <picture>
                <img
                  src="/cross.png"
                  alt=""
                  width={200}
                  height={100}
                  className="rounded-md mt-0 md:mt-3 hidden md:block"
                  onMouseOver={() => {
                    setGame(true);
                  }}
                  onMouseLeave={() => {
                    setGame(false);
                  }}
                />
              </picture>
            </a>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                About
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/contact">
                    <a className="text-gray-600 hover:text-gray-800">
                      Contact us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-gray-600 hover:text-gray-800">
                      About us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <a className="text-gray-600 hover:text-gray-800">
                      Trojan wholesale
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <a className="text-gray-600 hover:text-gray-800">Trojan</a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                POLICY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/">
                    <a className="text-gray-600 hover:text-gray-800">
                      Terms of use
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-gray-600 hover:text-gray-800">
                      Security
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-gray-600 hover:text-gray-800">Privacy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-gray-600 hover:text-gray-800">
                      Return Policy
                    </a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                HELP
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/">
                    <a className=" hover:text-gray-600 text-gray-800  ">
                      Payments
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-gray-600 hover:text-gray-800">
                      Shipping
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-gray-600 hover:text-gray-800">FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-gray-600 hover:text-gray-800">
                      Cancellation & Return
                    </a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                SOCIAL
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/">
                    <a className="text-gray-600 hover:text-gray-800">
                      Facebook
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-gray-600 hover:text-gray-800">
                      Instagram
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-gray-600 hover:text-gray-800">Twitter</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <a className="text-gray-600 hover:text-gray-800">Youtube</a>
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 space-x-10 md:px-4 px-0 flex md:flex-row flex-wrap flex-row ">
            <picture>
              {" "}
              <img src="/logo9.svg" alt=" " width={500} height={30} />
            </picture>
            <div className="flex flex-wrap space-x-4 md:space-x-10 mx-auto w-fit">
              <Link href="/">
                <div className="flex cursor-pointer">
                  <BsFillBagFill className=" text-xl text-blue-500" />
                  &nbsp;Become a Seller
                </div>
              </Link>
              <Link href="/">
                <div className="flex cursor-pointer">
                  <BsStars className=" text-xl text-blue-500" />
                  &nbsp;Advertise
                </div>
              </Link>

              <Link href="/">
                <div className="flex cursor-pointer">
                  <BsFillGiftFill className=" text-xl text-blue-500" />
                  &nbsp;Gift Cards
                </div>
              </Link>
              <Link href="/">
                <div className="flex cursor-pointer">
                  <BiHelpCircle className=" text-xl text-blue-500" />
                  &nbsp;Help Center
                </div>
              </Link>
            </div>
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2022 Trojanshop.com &nbsp;— &nbsp;All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
