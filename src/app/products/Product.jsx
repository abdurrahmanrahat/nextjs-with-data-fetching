import Image from "next/image";

const ProductPage = ({ product }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
      <figure>{/* <Image></Image> */}</figure>
      <div className="card-body">
        <h2 className="text-2xl font-semibold">{product.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        
        <div className="card-actions flex gap-6 items-center">
        <p>Price: {product.price}</p>
          <button className="btn btn-primary py-2 px-4 bg-black text-white rounded">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
