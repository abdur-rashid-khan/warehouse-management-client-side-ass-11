import React from 'react';
import ProductsHook from '../../Hooks/Products/ProductsHook';
import ManageProductsDisplay from './ManageProductsDisplay';

const ManageProducts = () => {
  const {products , setProducts}= ProductsHook();
  console.log(products)
  return (
    <div className='container mx-auto px-4'>
      <div className="pt-20">
        {
          products.map(p => <ManageProductsDisplay data={p} key={p._id} />)
        }
      </div>
    </div>
  );
};

export default ManageProducts;