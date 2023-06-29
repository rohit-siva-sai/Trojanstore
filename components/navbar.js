import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

import { BsFillCartCheckFill, BsFillCartDashFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { getSession, signOut, useSession } from "next-auth/react";

const Navbar = ({
  logout,

  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [details, setDetails] = useState("");
  const [game, setGame] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    let exempted = [
      "/checkout",
      "/orders",
      "/myaccount",
      "/grocery",
      "/topoffers",
      "/electronics",
      "/mobiles",
      "/fashion",
      "/appliances",
      "/home",
      "/toysmore",
      "/",
      "/about",
    ];
    if (exempted.includes(router.pathname)) {
      setSidebar(false)
    }
    if (localStorage.getItem("signup")) {
      setDetails(JSON.parse(localStorage.getItem("signup")));
    }
  }, [router]);

  const toggleCart = () => {
    setSidebar(!sidebar);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const ref = useRef();
  return (
    <>
      <span>
        {game && (
          <div className="text-white fixed right-10 font-medium font-serif top-[70px] rounded-md z-30 bg-gray-400 px-2">
            This is a special game - click to play{" "}
          </div>
        )}
      </span>
      <span>
        {dropdown && (
          <div
            onMouseOver={() => {
              setDropdown(true);
            }}
            onMouseLeave={() => {
              setDropdown(false);
            }}
            className="fixed z-20 cursor-pointer right-10 rounded-md px-4 py-2 w-32 top-8 bg-white shadow-md border"
          >
            <ul>
              <Link href="/myaccount">
                <a>
                  <li className="py-1 hover:text-blue-500 md:text-sm text-xs ">
                    My Account
                  </li>
                </a>
              </Link>

              <Link href="/orders">
                <a>
                  <li className="py-1 hover:text-blue-500 md:text-sm text-xs ">
                    My Orders
                  </li>
                </a>
              </Link>

              <li
                onClick={logout}
                className="py-1 hover:text-blue-500 md:text-sm text-xs "
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </span>

      <div
        className={`flex flex-col md:flex-row md:justify-start items-center py-2 shadow-lg sticky top-0 bg-white z-10 ${
          !sidebar && "overflow-hidden"
        }`}
      >
        <div className="logo mr-auto md:mx-8 md:hidden block  ml-2">
          <Link href="/">
            <a>
              {" "}
              <picture>
                <img src="/trojan.png" alt="" width={200} height={40} />
              </picture>
            </a>
          </Link>
        </div>
        <div className="nav">
          <ul className="flex  md:space-x-10 space-x-4 overflow-x-scroll md:overflow-hidden  items-center font-bold  md:text-lg  bg-slate-300 p-2 md:bg-white md:p-0 w-screen">
            <div className="logo mr-auto md:mx-4 md:block hidden ml-2">
              <Link href="/">
                <a>
                  {" "}
                  <picture>
                    {" "}
                    <img src="/trojan.png" alt="" width={200} height={40} />
                  </picture>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/topoffers">
                <div className="flex space flex-col">
                  <div className="self-center ">
                    <picture>
                      {" "}
                      <img src="/logo7.webp" alt="" width={50} height={50} />
                    </picture>
                  </div>
                  <div>
                    <a className="hover:text-blue-600">
                      <li className="-mt-2 cursor-pointer md:text-sm text-xs">
                        Top Offers
                      </li>
                    </a>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/grocery">
                <div className="flex flex-col">
                  <div className="self-center">
                    <picture>
                      {" "}
                      <img src="/logo1.webp" alt="" width={50} height={50} />
                    </picture>
                  </div>
                  <div>
                    <a className="hover:text-blue-600">
                      <li className="-mt-2  cursor-pointer md:text-sm text-xs">
                        Grocery
                      </li>
                    </a>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/fashion">
                <div className="flex space-y-1 flex-col">
                  <div className="self-center">
                    <picture>
                      <img src="/logo3.webp" alt="" width={50} height={50} />
                    </picture>
                  </div>
                  <div>
                    <a className="hover:text-blue-600">
                      <li className="-mt-2 cursor-pointer md:text-sm text-xs">
                        Fashion
                      </li>
                    </a>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/mobiles">
                <div className="flex flex-col">
                  <div className="self-center">
                    <picture>
                      {" "}
                      <img src="/logo2.webp" alt="" width={50} height={50} />
                    </picture>
                  </div>
                  <div>
                    <a className="hover:text-blue-600">
                      <li className="-mt-2 cursor-pointer md:text-sm text-xs">
                        Mobiles
                      </li>
                    </a>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/electronics">
                <div className="flex flex-col">
                  <div className="self-center">
                    <picture>
                      {" "}
                      <img src="/logo4.webp" alt="" width={50} height={50} />
                    </picture>
                  </div>
                  <div>
                    <a className="hover:text-blue-600">
                      <li className="-mt-2 cursor-pointer md:text-sm text-xs">
                        Electronics
                      </li>
                    </a>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/appliances">
                <div className="flex flex-col">
                  <div className="self-center">
                    <picture>
                      {" "}
                      <img src="/logo6.webp" alt="" width={50} height={50} />
                    </picture>
                  </div>
                  <div>
                    <a className="hover:text-blue-600">
                      <li className="-mt-2 cursor-pointer md:text-sm text-xs">
                        Appliances
                      </li>
                    </a>
                  </div>
                </div>
              </Link>
            </div>

            <div>
              <Link href="/home">
                <div className="flex flex-col">
                  <div className="self-center">
                    <picture>
                      <img src="/logo5.webp" alt="" width={50} height={50} />
                    </picture>
                  </div>
                  <div>
                    <a className="hover:text-blue-600">
                      <li className="-mt-2 cursor-pointer md:text-sm text-xs">
                        Home
                      </li>
                    </a>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/toysmore">
                <div className="flex flex-col">
                  <div className="self-center">
                    <picture>
                      {" "}
                      <img src="/logo8.webp" alt="" width={50} height={50} />
                    </picture>
                  </div>
                  <div>
                    <a className="hover:text-blue-600">
                      <li className="-mt-2 cursor-pointer md:text-sm text-xs">
                        Toys & more
                      </li>
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          </ul>
        </div>

        <div className="cart absolute mx-5 right-0  font-bold  top-4 cursor-pointer flex space-x-2 md:space-x-4">
          <a href="https://crossblocks.vercel.app/" target="blank">
            <picture>
              <img
                src="/cross.png"
                alt=""
                width={100}
                height={80}
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

          <Link href="/about">
            <a href="">
              <button className="bg-blue-600 px-2 lg:py-2 py-1 ease-in-out mt-0 md:mt-3  rounded-md md:text-sm text-xs text-white">
                Admin
              </button>
            </a>
          </Link>
          {!details.email && !session && (
            <Link href="/login">
              <a href="#">
                <button className="bg-blue-600 px-2 md:-mr-4 -mr-2 lg:py-2 py-1 ease-in-out mt-0 md:mt-3  rounded-md md:text-sm text-xs text-white">
                  login
                </button>
              </a>
            </Link>
          )}
          <span
            onMouseOver={() => {
              setDropdown(true);
            }}
            onMouseLeave={() => {
              setDropdown(false);
            }}
          >
            {/* > */}
            {(details.email || session) && (
              <MdAccountCircle className="text-4xl md:my-2 ease-in-out text-blue-600 " />
            )}
          </span>

          {Object.keys(cart).length != 0 && (
            <span className="absolute text-sm font-semibold  -top-2 md:-top-1 -right-3 bg-blue-500 px-2  rounded-full text-white  ">
              {Object.keys(cart).length}
            </span>
          )}
          <AiOutlineShoppingCart
            className="text-4xl md:my-2 text-blue-500"
            onClick={toggleCart}
          />
        </div>
        <div
          ref={ref}
          className={`sideCart lg:w-96 w-72  h-[100vh] overflow-y-scroll absolute top-0  bg-blue-200 p-10  transition-all  ${
            sidebar && cart ? "right-0" : "-right-96"
          }  z-30  `}
        >
          <span
            className="absolute top-2 right-7 text-2xl text-blue-600 w-1 "
            onClick={toggleCart}
          >
            <AiFillCloseCircle />
          </span>
          <h2 className="font-bold text-xl text-center underline underline-offset-2">
            Shopping-Cart
          </h2>
          <ul className="list-decimal font-semibold">
            {Object.keys(cart).length == 0 && (
              <div className="my-4">Your Cart is Empty!</div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex my-4">
                    <div className="w-2/3 font-semibold">{cart[k].name}</div>
                    <div className="w-1/3 flex items-center justify-center text-lg">
                      <AiFillMinusCircle
                        className="text-blue-600"
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                      />
                      <span className="mx-2 text-lg">{cart[k].qty}</span>
                      <AiFillPlusCircle
                        className="text-blue-600"
                        onClick={() => {
                          addToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="total font-bold my-2">SubTotal: {subTotal}</div>
          <div className="flex space-x-2">
            <Link href="/checkout">
              <a href="">
                <button
                  disabled={Object.keys(cart).length === 0}
                  className="disabled:bg-blue-300 text-white text-md bg-blue-500 border-0 py-1 px-2 focus:outline-none hover:bg-blue-600 rounded  flex "
                >
                  <BsFillCartCheckFill className="mt-1 mx-1 " />
                  CheckOut
                </button>
              </a>
            </Link>
            <button
              disabled={Object.keys(cart).length === 0}
              onClick={clearCart}
              className="disabled:bg-blue-300 text-white text-md bg-blue-500 border-0 py-1 px-2 focus:outline-none hover:bg-blue-600 rounded  flex "
            >
              <BsFillCartDashFill className="mt-1 mx-1 " />
              Clearcart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
