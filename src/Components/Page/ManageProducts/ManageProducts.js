import React from 'react';
import ProductsHook from '../../Hooks/Products/ProductsHook';

const ManageProducts = () => {
  const {products , setProducts}= ProductsHook();
  console.log(products)
  return (
    <div>
      
    </div>
  );
};

export default ManageProducts;