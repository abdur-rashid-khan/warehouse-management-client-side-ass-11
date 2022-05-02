import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";
import "./SingleProducts.css";

const SingleProduct = () => {
  const [user] = useAuthState(auth);
  const [product, setProduct] = useState([]);
  const { img, title, about, price, productsNumber, suppler, _id } = product;
  // const quantityConvert = parseInt(productsNumber);
  // console.log(quantityConvert)
  const [quantity, setQuantity] = useState(10);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const addNow = (e) => {
    e.preventDefault();
    // console.log(e.target.quantity.value);
    // console.log(productsNumber)
    const totalQuantity =
      parseInt(e.target.quantity.value) + parseInt(quantity);
    setQuantity(totalQuantity);
  };
  const delivery = () => {
    const totalQuantity = parseInt(quantity) - 1;
    if (quantity < 1) {
      Swal.fire("", "Product Not Available", "error");
      setQuantity(0);
      return true;
    }
    setQuantity(totalQuantity);
    //
    const email = user.email;
    const order = {
      img,
      title,
      about,
      price,
      productsNumber,
      suppler,
      _id,
      email
    };
    console.log(user.email)
    fetch("http://localhost:5000/delivery", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("order successfully");
        }
      });
  };

  return (
    <div className="container mx-auto px-4 pt-20">
      <div
        id="singleItems"
        className="grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center gap-6"
      >
        <div className="border">
          <div className="p-3" style={{ height: "300px" }}>
            <img
              src={img}
              className="rounded"
              alt=""
              style={{ height: "100%", margin: "auto" }}
            />
          </div>
        </div>
        <div id="about">
          <h3 className="text- py-1">
            <strong>Product Available :</strong>{" "}
            <span id="quantity">{quantity}</span>
          </h3>
          <h3 className="text- py-1">
            <strong>Suppler :</strong> {suppler}
          </h3>
          <h2 className="text- py-1">
            <strong>Price :</strong> {price}
          </h2>
          <h3 className="text- py-1">
            <strong>Product Name : </strong>
            {title}
          </h3>
          <p className="text- py-1">
            <strong>Product Details :</strong> {about}
          </p>
          <form onSubmit={addNow} className="flex pt-10">
            <button className="bg-blue-600 px-6 rounded-l text-white">
              Add
            </button>
            <input
              id="quantity"
              type="text"
              name="quantity"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Add Product Quantity"
            />
          </form>
          <div className="button">
            <button
              onClick={delivery}
              className="bg-sky-500 mt-5 w-full rounded py-2 hover:bg-sky-400 text-white"
            >
              Delivery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
