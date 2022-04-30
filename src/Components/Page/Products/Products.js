import { ArrowRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import ProductsHook from '../../Hooks/ProductsHook';
import Product from '../product/Product';

const Products = () => {
  const {products , setProducts} =ProductsHook();
  const sliceProducts = products.slice(0,6);
  return (
    <div className="container mx-auto px-2 py-10">
      <h1 className='pb-10 text-3xl text-center font-serif font-bold'>Preserved products</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6'>
        {
          sliceProducts.map(p=> <Product data={p} key={p._id}></Product>)
        }
      </div>
      <div className="text-center">
      <Link to={'/inventories'} className='text-lg bg-blue-700 p-2 text-slate-100 rounded px-8'>see more <span><ArrowRightIcon style={{width:'25px',height:'25px',display:'inline-block'}} /></span></Link>
      </div>
    </div>
    
  );
};

export default Products;