import React from 'react';
import ProductsHook from '../../Hooks/ProductsHook';
import Product from '../product/Product';

const Products = () => {
  const {products , setProducts} =ProductsHook();
  return (
    <div className="container mx-auto px-2">
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
          products.map(p=> <Product data={p} key={p._id}></Product>)
        }
      </div>
    </div>
    
  );
};

export default Products;