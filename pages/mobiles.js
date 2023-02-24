import Link from "next/link";
import { mobiles } from "../data/mobiles";
import React from "react";
import AOS from 'aos';

import 'aos/dist/aos.css'; 
import { useEffect } from "react";

const Mobiles = ({ products }) => {
  useEffect(()=>{
    AOS.init()
  })
  return (
    <div>
      <section className="text-gray-600 body-font  min-h-[80vh]">
        <div className="container lg:px-24 py-12 mx-auto ">
          <div className="flex flex-wrap -m-4 justify-center">
            
            {products &&
              Object.keys(products).map((item) => {
                return (
                  <Link
                    passHref={true}
                    href={`/product/${products[item].slug}`}
                    key={products[item].slug}
                  >
                    <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-md lg:mx-6 lg:my-2 " data-aos="flip-right" data-aos-duration="2000"  >
                      <a className="block relative transition duration-700 ease-in-out hover:scale-110 scroll-smooth  rounded overflow-hidden">
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
                         <ul className="text-xs text-start flex flex-col ml-4 space-y-1 font-medium font-sans text-zinc-500 list-disc">
                            <li>{products[item].info0}</li>
                            <li>{products[item].info1}</li>
                            <li>{products[item].info2}</li>
                            <li>{products[item].info3}</li>
                            <li>{products[item].info4}</li>
                            <li>{products[item].info5}</li>
                         </ul>
                          <ul className="flex justify-center space-x-2 cursor-pointer mt-3 -mb-1">
                            {products[item].color.includes("red") && (
                              <button className="border-2 border-gray-300 ml-1 bg-red-200 rounded-full w-6 h-6 focus:outline-none"></button>
                            )}
                            {products[item].color.includes("blue") && (
                              <button className="border-2 border-gray-300 ml-1 bg-blue-200 rounded-full w-6 h-6 focus:outline-none"></button>
                            )}
                            {products[item].color.includes("yellow") && (
                              <button className="border-2 border-gray-300 ml-1 bg-yellow-200 rounded-full w-6 h-6 focus:outline-none"></button>
                            )}
                            {products[item].color.includes("black") && (
                              <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                            )}
                            {products[item].color.includes("green") && (
                              <button className="border-2 border-gray-300 ml-1 bg-green-200 rounded-full w-6 h-6 focus:outline-none"></button>
                            )}
                            {products[item].color.includes("silver") && (
                              <button className="border-2 border-gray-300 ml-1 bg-slate-300 rounded-full w-6 h-6 focus:outline-none"></button>
                            )}
                            {products[item].color.includes("gold") && (
                              <button className="border-2 border-gray-300 ml-1 bg-amber-200 rounded-full w-6 h-6 focus:outline-none"></button>
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
    props: { products: mobiles }, // will be passed to the page component as props
  };
}

export default Mobiles;
