import React from "react";
import { Link } from "react-router-dom";
import ProductsHook from "../../Hooks/Products/ProductsHook";
import {PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import Swal from 'sweetalert2';

const ManageProducts = () => {
  const { products, setProducts } = ProductsHook();
      const deleteItem = (id) =>{
        const conform = window.confirm('Are Your Sure');
        if(conform){
          fetch(`http://localhost:5000/products/${id}`,{
            method:'DELETE',
            })
            .then((res) => res.json())
            .then((data) => {
              if( data.deletedCount > 0){
                const newData = products.filter(p => p._id !== id);
                setProducts(newData);
                Swal.fire(
                  '',
                  'Delete success',
                  'success'
                )
              }
            });
        }
    }
  return (
    <div className="container mx-auto px-4">
      <div className="pt-20">
        {
        products.map((p) => 
        <div key={p._id}>
          <div className="bg-slate-200 my-4 p-2">
            <div className="grid lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-1 items-center justify-items-center">
              <div
                className="md:w-6/12 sm:w-full"
                style={{ height: "200px" }}
              >
                <img
                  className="rounded"
                  src={p.img}
                  alt=""
                  style={{ height: "100%" }}
                />
              </div>
              <div className="py-4">
                <strong>{p.title}</strong>
                <p>${p.price}</p>
                <p>{p.about}</p>
              </div>
              <div className="flex ms:inline">
                <Link to={`/update/${p._id}`}>
                  {" "}
                  <PencilAltIcon
                    className="py-2 mx-4 "
                    style={{
                      width: "30px",
                      color: "#3CA0F3",
                      height: "auto",
                    }}
                  />
                </Link>
                <TrashIcon
                  onClick={() => deleteItem(p._id)}
                  className="py-2 mx-4 cursor-pointer"
                  style={{ width: "30px", color: "red", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
        )
        }
      </div>
    </div>
  );
};

export default ManageProducts;
