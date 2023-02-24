import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { mobiles } from "../../data/mobiles";
import { electronics } from "../../data/electronics";
import { topoffers } from "../../data/topoffers";
import { clothes } from "../../data/clothes";
import { grocery } from "../../data/grocery";
import { appliances } from "../../data/appliances";
import { home } from "../../data/home";
import { toysmore } from "../../data/toysmore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillStarFill, BsStarHalf } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube, AiFillFacebook } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

const array = [];
const array1 = array.concat(
  mobiles,
  electronics,
  topoffers,
  clothes,
  grocery,
  appliances,
  home,
  toysmore
);

export async function getStaticPaths() {
  const paths = array1.map((product) => ({
    params: { slug: product.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {

  console.log(params,"rohit siva sai")
  const product = array1.filter((p) => p.slug === params.slug)
  console.log(product,"rohit siva sai");

  return {
    props: { product: product[0] },
  };
}

const Post = ({ addToCart, product, buyNow }) => {
  const checkServiceability =  () => {
    toast.success("Your pincode is serviceable", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden min-h-[85vh] lg:ml-32">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {product && (
          <div className="container px-5 py-12 w-11/12 mx-auto">
            <div className=" mx-auto flex flex-wrap ">
              <picture className="w-full object-cover lg:w-1/3 transition duration-700 ease-in-out hover:scale-110 scroll-smooth lg:h-fit lg:mt-6  px-12 rounded">
                <img
                alt="ecommerce"
                className=" "
                src={product.img}
              />
              </picture>

              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  TROJAN Store
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.title}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center space-x-[2px]">
                    <span className="text-gray-600 mr-2">Review: </span>
                    <BsFillStarFill className="text-blue-500" />
                    <BsFillStarFill className="text-blue-500" />
                    <BsFillStarFill className="text-blue-500" />
                    <BsFillStarFill className="text-blue-500" />
                    <BsStarHalf className="text-blue-500" />
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-1 text-xl">
                    <a className="text-gray-500">
                      <AiFillFacebook className="text-blue-500" />
                    </a>
                    <a className="text-gray-500">
                      <AiFillInstagram className="text-blue-500" />
                    </a>
                    <a className="text-gray-500">
                      <AiFillYoutube className="text-blue-500" />
                    </a>
                  </span>
                </div>
                <p className="leading-relaxed">{product.desc} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptatem blanditiis facilis officia assumenda reiciendis totam adipisci cupiditate, laborum quam, numquam libero itaque impedit aliquid quo ullam magni, quisquam quae?</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  {product.color != "null" && (
                    <div className="flex">
                      <ul className="flex justify-center space-x-2 cursor-pointer mt-3 -mb-1">
                        <span className="mr-3">Color : </span>
                        {product.color.includes("red") && (
                          <button className="border-2 border-gray-300 ml-1 bg-red-200 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {product.color.includes("blue") && (
                          <button className="border-2 border-gray-300 ml-1 bg-blue-200 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {product.color.includes("yellow") && (
                          <button className="border-2 border-gray-300 ml-1 bg-yellow-200 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {product.color.includes("black") && (
                          <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {product.color.includes("green") && (
                          <button className="border-2 border-gray-300 ml-1 bg-green-200 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {product.color.includes("silver") && (
                          <button className="border-2 border-gray-300 ml-1 bg-slate-300 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {product.color.includes("gold") && (
                          <button className="border-2 border-gray-300 ml-1 bg-amber-200 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                      </ul>
                    </div>
                  )}
                  {product.size != "null" && (
                    <div className="flex ml-6 items-center">
                      <span className="mr-3">Size :</span>
                      <div className="relative">
                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10">
                          {product.size.includes("S") && (
                            <option value="S">S</option>
                          )}
                          {product.size.includes("M") && (
                            <option value="M">M</option>
                          )}
                          {product.size.includes("L") && (
                            <option value="L">L</option>
                          )}
                          {product.size.includes("XL") && (
                            <option value="XL">XL</option>
                          )}
                          {product.size.includes("XXL") && (
                            <option value="XXL">XXL</option>
                          )}
                        </select>
                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex">
                  <div className="flex flex-col">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ₹{product.price}.00
                    </span>

                    <span className="title-font font-medium text-sm text-gray-900">
                      <del>₹{product.orgprice}</del>
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      buyNow(
                        product.slug,
                        1,
                        product.price,
                        product.title,
                        size,
                        color
                      );
                    }}
                    className="disabled:bg-blue-300 flex  text-white bg-blue-500 border-0 py-0 md:px-3 px-2 md:ml-8 ml-4 items-center  focus:outline-none hover:bg-blue-600 rounded text-sm md:text-base"
                  >
                    Buy-Now
                  </button>
                  <button
                    onClick={() => {
                      addToCart(
                        product.slug,
                        1,
                        product.price,
                        product.title,
                        size,
                        color
                      );
                    }}
                    className="disabled:bg-blue-300 flex  text-white bg-blue-500 border-0 py-0 px-2 md:px-3 md:ml-8 ml-4 text-sm items-center  focus:outline-none hover:bg-blue-600 rounded md:text-base"
                  >
                    Add-to-Cart
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <FcLike className="text-2xl" />
                  </button>
                </div>
                <div className="flex flex-row">
                  <div className="pin mt-4 space-x-3">
                    <input
                      type="number"
                      name=""
                      id=""
                      placeholder="enter the pincode"
                      // value={pin}
                      className="px-2 border-2 border-blue-500 rounded-sm font-semibold text-black"
                    />
                    <button
                      className=" text-white bg-blue-500 border-0 py-[3px] px-3  items-center  focus:outline-none hover:bg-blue-600 rounded"
                      onClick={checkServiceability}
                    >
                      check
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Post;
