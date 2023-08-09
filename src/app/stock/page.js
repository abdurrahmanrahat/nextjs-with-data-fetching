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
              <span className="label-text font-semibold">Stock product name*</span>
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
    </div>
  );
};

export default StockPage;
