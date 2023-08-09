"use client";

import { useForm } from "react-hook-form";

const StockPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { name, email, quantity, price } = data;
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
      <div class="flex justify-center my-12">
        <div class="w-full lg:w-10/12">
          <h2 className="text-3xl text-center font-semibold my-8">
            Show Stock Products
          </h2>
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <table class="w-full">
              <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th class="py-3 px-6 text-left">ID</th>
                  <th class="py-3 px-6 text-left">Name</th>
                  <th class="py-3 px-6 text-center">Age</th>
                  <th class="py-3 px-6 text-center">Country</th>
                  <th class="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-left">1</td>
                  <td class="py-3 px-6 text-left">John Doe</td>
                  <td class="py-3 px-6 text-center">28</td>
                  <td class="py-3 px-6 text-center">USA</td>
                  <td class="py-3 px-6 text-center">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Edit
                    </button>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded-full">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockPage;
