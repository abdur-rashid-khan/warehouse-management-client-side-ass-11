
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsHook from "../Products/ProductsHook";


const singleProduct = () => {
  const {products , setProducts} = ProductsHook();
  const [product , setProduct] = useState([]);
  const {id}= useParams()
  useEffect(()=>{
    fetch('http://localhost:5000/products/${id}')
    .then(res => res.json())
    .then(data => setProduct(data))
  },[])
  return{product , setProduct};
};

export default singleProduct;