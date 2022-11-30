import Link from "next/link";
import { topoffers } from "../data/topoffers";
import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

const Topoffers = ({ products }) => {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");

  let countdown = () => {
    let futuredate = new Date("24 december 2022");
    let currentdate = new Date();
    let mydate = futuredate - currentdate;
    // console.log(mydate);
    setDays(Math.floor(mydate / 1000 / 60 / 60 / 24));
    setHours(Math.floor(mydate / 1000 / 60 / 60) % 24);
    setMin(Math.floor(mydate / 1000 / 60) % 60);
    setSec(Math.floor(mydate / 1000) % 60);

    // console.log(days, hours, min, sec);
  };

  setInterval(countdown, 1000);

  return (
    <div>
      <style jsx>
        {`
          .scroll1 {
            background-image: url("/scroll5.webp");
          }
          .scroll2 {
            background-image: url("/offer5.webp");
          }
          .scroll3 {
            background-image: url("/offer4.webp");
          }
          .scroll4 {
            background-image: url("/offer6.webp");
          }
          .scroll5 {
            background-image: url("/trojanhome1.webp");
          }
          .scroll6 {
            background-image: url("/offer1.webp");
          }
        `}
      </style>

      <Splide>
        <SplideSlide>
          <div className="scroll6 md:h-[530px] h-52 bg-clip-padding  md:bg-cover bg-contain md:scale-y-100 scale-y-175 bg-no-repeat bg-center flex justify-around">
            <div className="self-center md:w-fit   md:min-w-max  md:h-36 md:mr-80 mr-3 h-16 md:-mt-16 -mt-20">
              <div className="w-fit rounded-full p-4 text-red-400 mx-auto md:text-xs text-xs font-serif font-medium animate-ping">
                OFFER CLOSES IN
              </div>
              <div className="mx-auto w-fit">
                <div className="flex space-x-1">
                  <div className="border bg-white p-4 w-fit mx-auto font-bold md:text-3xl text-xs font-sans shadow-md animate-pulse">
                    {days}
                    <br /> days
                  </div>

                  <div className="border bg-white p-4 w-fit mx-auto font-bold md:text-3xl text-xs font-sans shadow-md animate-pulse">
                    {hours} <br /> hrs
                  </div>

                  <div className="border bg-white p-4 w-fit mx-auto font-bold md:text-3xl text-xs font-sans shadow-md animate-pulse">
                    {min} <br /> min
                  </div>

                  <div className="border bg-white p-4 w-fit mx-auto font-bold md:text-3xl text-xs font-sans shadow-md animate-pulse">
                    {sec} <br /> sec
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="scroll1 md:h-[530px] h-52 bg-clip-padding  md:bg-cover bg-contain md:scale-y-100 scale-y-175 bg-no-repeat bg-center"></div>
        </SplideSlide>
        <SplideSlide>
          <div className="scroll5 md:h-[530px] h-52 bg-clip-padding  bg-contain md:scale-x-110 md:scale-y-100 scale-y-125  bg-no-repeat bg-center"></div>
        </SplideSlide>
        <SplideSlide>
          <div className="scroll2 md:h-[530px] h-52 bg-clip-padding   bg-contain  bg-no-repeat bg-center"></div>
        </SplideSlide>
        <SplideSlide>
          <div className="scroll3 md:h-[530px] h-52 bg-clip-padding  md:scale-x-150 bg-contain md:scale-y-100 scale-y-175  bg-no-repeat bg-center"></div>
        </SplideSlide>
        <SplideSlide>
          <div className="scroll4 md:h-[530px] h-52 bg-clip-padding md:bg-contain md:scale-x-150  bg-cover  bg-no-repeat bg-center"></div>
        </SplideSlide>
      </Splide>

      <section className="text-gray-600 body-font  min-h-[80vh]">
        <div className="container lg:px-24 py-12 mx-auto ">
          <div className="flex flex-wrap -m-4 justify-center">
            {/* {products.length ===0 && <p className="mt-4">Sorry all the stickers are currently out of stock. New stock is coming soon. stay tuned</p> } */}
            {products &&
              Object.keys(products).map((item) => {
                return (
                  <Link
                    passHref={true}
                    href={`/product/${products[item].slug}`}
                    key={products[item].slug}
                  >
                    <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-md lg:mx-6 lg:my-2 ">
                      <a className="block relative transition duration-700 ease-in-out hover:scale-110 scroll-smooth rounded overflow-hidden">
                        <picture>
                        <img
                          alt="ecommerce"
                          className="md:h-[40vh] block h-[32vh] m-auto"
                          src={products[item].img}
                        />
                        </picture>
                      </a>
                      <div className="mt-4 text-center">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 ">
                          {products[item].category}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {products[item].title}
                        </h2>
                        <p className="mt-1 font-semibold">
                          <del>₹{products[item].orgprice}</del>&nbsp; ₹
                          {products[item].price}.00
                        </p>
                        <div className="mt-1 ">
                          <ul className="flex justify-center space-x-2 cursor-pointer">
                            {products[item].size.includes("S") && (
                              <li className="shadow-md border px-2">S</li>
                            )}
                            {products[item].size.includes("M") && (
                              <li className="shadow-md border px-2">M</li>
                            )}
                            {products[item].size.includes("L") && (
                              <li className="shadow-md border px-2">L</li>
                            )}
                            {products[item].size.includes("XL") && (
                              <li className="shadow-md border px-2">XL</li>
                            )}
                            {products[item].size.includes("XXL") && (
                              <li className="shadow-md border px-2">XXL</li>
                            )}
                          </ul>
                          <ul className="flex justify-center space-x-2 cursor-pointer mt-3 -mb-1">
                            {products[item].color.includes("red") && (
                              <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            )}
                            {products[item].color.includes("blue") && (
                              <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            )}
                            {products[item].color.includes("yellow") && (
                              <button className="border-2 border-gray-300 ml-1 bg-yellow-300 rounded-full w-6 h-6 focus:outline-none"></button>
                            )}
                            {products[item].color.includes("black") && (
                              <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                            )}
                            {products[item].color.includes("green") && (
                              <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            )}
                          </ul>
                         
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getStaticProps({ params }) {
  return {
    props: { products: topoffers },
  };
}

export default Topoffers;
