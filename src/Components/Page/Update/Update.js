import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
  const [product , setProduct] = useState([]);
  const {id}= useParams()
  useEffect(()=>{
    fetch(`http://localhost:5000/products/${id}`)
    .then(res => res.json())
    .then(data => setProduct(data))
  },[]);
  const {img , title , about , price , _id} = product;

  const submit = (e)=>{
    e.preventDefault();
    const title = e.target.productName.value;
    const productsNumber = e.target.productsNumber.value;
    const suppler = e.target.suppler.value;
    const  img= e.target.photoUrl.value;
    const price = e.target.price.value;
    const about = e.target.productDetails.value;
    const data ={title,productsNumber,suppler,img,price,about };
    fetch(`http://localhost:5000/products/${id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      if(data){
        Swal.fire(
          '',
          'updating success',
          'success'
        )
      e.target.reset();
      }
    })
  }
  return (
    <div className='container mx-auto px-4'>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div id='loginForm' className="max-w-md w-full rounded-xl border-sky-200 shadow-xl space-y-8 bg-gray-200 p-6">
          <div className='text-center font-serif text-2xl'>
            <h1>Update  Now</h1>
            
          </div>
          <form className="mt-8 space-y-6" onSubmit={submit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
              {/* sr-only */}
                <label htmlFor="productName" className="">
                  Product Name
                </label>
                <input
                  id="productName"
                  name="productName"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={title}
                />
              </div>
              <div className='pt-3'>
              {/* sr-only */}
                <label htmlFor="productsNumber" className="">
                  Product Number
                </label>
                <input
                  id="productsNumber"
                  name="productsNumber"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={about}
                />
              </div>
              <div className='pt-3'>
              {/* sr-only */}
                <label htmlFor="suppler" className="">
                Supplier Name
                </label>
                <input
                  id="suppler"
                  name="suppler"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Supplier Name"
                />
              </div>
              <div className='pt-3'>
                <label htmlFor="photoUrl" className=" mt-4">
                  Photo url
                </label>
                <input
                  id="photoUrl"
                  name="photoUrl"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={img}
                />
              </div>
              <div className='pt-3'>
                <label htmlFor="price" className=" mt-4">
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={price}
                />
              </div>


              <div className='pt-3'>
                <label htmlFor="productDetails" className=" mt-4">
                  Product Details
                </label>
                <textarea
                  id="productDetails"
                  name="productDetails"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={about}  cols="3" rows="3">
                  </textarea>
              </div>
            </div>
            <button className='w-full bg-blue-600 hover:bg-blue-500 py-2 rounded '>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;