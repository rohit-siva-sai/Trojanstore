import Link from "next/link";
import { grocery } from "../data/grocery";
import React from "react";

const Grocery = ({ products }) => {
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
                          <p className="shadow-md border w-fit mx-auto px-2">
                            {products[item].quantity}
                          </p>
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
    props: { products: grocery }, // will be passed to the page component as props
  };
}

export default Grocery;
