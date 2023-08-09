import products from "@/data/products";
import ProductPage from "./Product";

const ProductsPage = () => {
  return (
    <div className="my-10">
      <h2 className="text-4xl uppercase font-bold text-center">
        Product List- {products.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        {products.map((product) => (
          <ProductPage key={product.id} product={product}></ProductPage>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
