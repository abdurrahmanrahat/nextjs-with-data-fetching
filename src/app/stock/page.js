"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";

const StockPage = () => {
  // const [stocks, setStocks] = useState([]);

  const { register, handleSubmit, reset } = useForm();

  // post request for getting data from db
  // useEffect(() => {
  //   // fetch("/api/product")
  //   //   .then((res) => res.json())
  //   //   .then((data) => setStocks(data));
  //   const fetchDatas = async () => {
  //     const res = await fetch("/api/product");
  //     const data = await res.json();
  //     setStocks(data);
  //   };
  //   fetchDatas();
  // }, []);

  const {
    data: stocks = [],
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryFn: async () => {
      // const res = await fetch("/api/product");
      // const data = await res.json();
      // return data;
      const res = await axios("/api/product");
      return res.data;
    },
  });

  if (isLoading)
    return (
      <h2 className="text-4xl font-semibold text-green-700 text-center mt-10">Loading...</h2>
    );

  // console.log(stocks);

  // form onsubmit function
  const onSubmit = async (data) => {
    console.log(data);
    const { name, email, quantity, price } = data;

    const productData = { name, userEmail: email, quantity, price };

    const response = await fetch("/api/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      // console.log("Product added successfully!!");
      refetch();
      toast.success("Product added successfully!");
      reset();
    }
  };

  return (
    <div>
      <h2 className="text-3xl text-center font-semibold my-8">
        Welcome to Stock Management
      </h2>
      {/* Form For Admission */}
      <form onSubmit={handleSubmit(onSubmit)} className="px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stock product Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Stock product name*
              </span>
            </label>
            <input
              type="text"
              placeholder="Stock product name"
              {...register("name", { required: true, maxLength: 80 })}
              className="input input-bordered w-full p-2"
            />
          </div>

          {/* Candidate Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Email*</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              {...register("email", { required: true, maxLength: 80 })}
              className="input input-bordered w-full p-2"
            />
          </div>

          {/* Stock Quantity Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Stock Quantity*</span>
            </label>
            <input
              type="number"
              placeholder="Stock Quantity"
              {...register("quantity", { required: true, maxLength: 80 })}
              className="input input-bordered w-full p-2"
            />
          </div>

          {/* Stock product price Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="text"
              placeholder="Stock product price"
              {...register("price", { required: true, maxLength: 80 })}
              className="input input-bordered w-full p-2"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center my-10">
          <input
            className="btn mt-4 uppercase bg-[#FFBD00] hover:bg-black hover:scale-95 transition-transform duration-600 border-0 hover:border-2 border-white text-white font-medium rounded py-2 px-3"
            type="submit"
            value="Submit Product"
          />
        </div>
      </form>

      {/* Table for displaying stock products */}
      <div className="flex justify-center my-12">
        <div className="w-full lg:w-10/12">
          <h2 className="text-3xl text-center font-semibold my-8">
            Show Stock Products: {stocks?.length}
          </h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">#</th>
                  <th className="py-3 px-6 text-left">Stock Name</th>
                  <th className="py-3 px-6 text-center">Quantity</th>
                  <th className="py-3 px-6 text-center">Price</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {stocks.map((stock, i) => (
                  <tr
                    key={stock?._id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left">{i + 1}</td>
                    <td className="py-3 px-6 text-left">{stock?.name}</td>
                    <td className="py-3 px-6 text-center">{stock?.quantity}</td>
                    <td className="py-3 px-6 text-center">${stock?.price}</td>
                    <td className="py-3 px-6 text-center">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Edit
                      </button>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded-full">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockPage;
