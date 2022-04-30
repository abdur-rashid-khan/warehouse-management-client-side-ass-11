import React from 'react';

const Product = ({data}) => {
  const {img , title , about , price} = data;

  return (
    <div >
      <div className="bg-slate-100 border-2">
        <img className='' style={{width:'100%',height:'300px'}} src={img} alt="" />
        <h2 >{title}</h2>
        <strong>{price}</strong>
        <p className=''>{about}</p>
        <button>buy</button>
      </div>
    </div>
  );
};

export default Product;