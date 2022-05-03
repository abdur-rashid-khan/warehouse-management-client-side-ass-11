import React from "react";
import { Link } from "react-router-dom";
import ProductsHook from "../../Hooks/Products/ProductsHook";

const LatestProducts = () => {
  const { products, setProducts } = ProductsHook();
  const productSlice = products.slice(6, 8);
  return (
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h1 className="py-10 text-3xl text-center font-serif font-bold">
          Latest Products
        </h1>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {productSlice.map((p) => (
          <div key={p._id}>
            <Link to={`/product/${p._id}`} className="bg-slate-100 block border-2 rounded-lg ">
              <div className="flex">
                <div className="" style={{ height: "250px" }}>
                  <img
                    className="m-auto"
                    src={p.img}
                    alt=""
                    style={{ height: "100%" }}
                  />
                </div>
                <div className="p-6">
                  <strong className="text-xl block">
                    {p.title.slice(0, 30)}
                  </strong>
                  <strong className="pt-4 block">Price : $ {p.price}</strong>
                  <p className="text-slate-800">{p.about.slice(0,60)}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
