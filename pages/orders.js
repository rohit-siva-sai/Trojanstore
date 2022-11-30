import React, { useEffect, useState } from "react";
import Link from "next/link";
import { topoffers } from "../data/topoffers";
import { useRouter } from "next/router";

const Orders = () => {
  const router = useRouter();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(topoffers)
  }, []);


  

  return (
    <div className="min-h-screen">
      <div className="w-11/12 my-6 mx-auto">
        <h1 className="font-bold text-center text-xl py-4">My Orders</h1>

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        #OrderId
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(orders).map((item) => {
                      return (
                        <tr
                          key={orders[item].slug}
                          className="bg-white border-b transitions duration-300 ease-in-out hover:bg-gray-100"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {orders[item]._id.$oid}
                          </td>
                          <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                            {orders[item].title}
                          </td>
                          <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          <picture> <img src={orders[item].img} alt="" width={28} height={28}/></picture>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {orders[item].price}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Details
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
