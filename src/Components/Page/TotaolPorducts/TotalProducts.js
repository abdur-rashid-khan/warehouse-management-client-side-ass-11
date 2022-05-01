import React from 'react';
import ProductsHook from '../../Hooks/Products/ProductsHook';
import DisplayTotalProducts from './DisplayTotalProducts';

const TotalProducts = () => {
  const {products , setProducts} =ProductsHook();
  return (
    <div className="container mx-auto px-6" style={{paddingTop:'4.5rem'}}>
      <h1 className='pb-10 text-3xl text-center font-serif font-bold'>Total  products</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6'>
      {
        products.map(p=> <DisplayTotalProducts data={p} key={p._id}></DisplayTotalProducts>)
      }
    </div>
    </div>
  );
};

export default TotalProducts;