import { useEffect, useState } from "react";


const ProductsHook = () => {
  const [products , setProducts] = useState([]);
  useEffect(()=>{
    fetch('https://stormy-mountain-16030.herokuapp.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  return{products , setProducts};
};

export default ProductsHook;