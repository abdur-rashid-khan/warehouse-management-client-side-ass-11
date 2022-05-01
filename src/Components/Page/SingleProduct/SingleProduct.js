import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleProduct = () => {
  const [product , setProduct] = useState([]);
  const {id}= useParams()
  useEffect(()=>{
    fetch(`http://localhost:5000/products/${id}`)
    .then(res => res.json())
    .then(data => setProduct(data))
  },[]);
  const {img , title , about , price , _id} = product;
  return (
    <div className='container mx-auto px-4 grid grid-cols-3 gap-6' style={{paddingTop:'5rem'}}>
      <div className="bg-slate-100 border-2 rounded-lg">
        <img className='' style={{width:'100%',height:'300px'}} src={img} alt="" />
        <div className="p-2">
          <h2 >{title}</h2>
          <strong>{price}</strong>
          <p className=''>{about}</p>
        </div>
        <Link to={`/product/${_id}`} className='w-full bg-sky-500 py-2 rounded hover:bg-sky-600 block text-center'>select product</Link>
      </div>
    </div>
  );
};

export default SingleProduct;