import React from 'react';
import { BeakerIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import './ManageProducts.css'

const ManageProductsDisplay = ({data}) => {
  console.log(data);
  const{img , title,price} = data;
  return (
    <div className='bg-slate-200 my-4 p-2'>
      <div className="grid lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-1 items-center justify-items-center" >
        <div className="md:w-6/12 sm:w-full" style={{height:'200px'}}>
          <img className='rounded' src={img} alt="" style={{height:'100%'}}/>
        </div>
        <div className="py-4">
          <strong>{title}</strong>
          <p>${price}</p>
          <p>Lorem ipsum dolor sit consequatur vitae, e</p>
        </div>
        <div className="flex ms:inline">
          <PencilAltIcon className='py-2 mx-4 ' style={{width:'30px',color:"#3CA0F3",height:'auto',}}/>
          <TrashIcon className='py-2 mx-4 ' style={{width:'30px',color:"red",height:'auto',}}/>
        </div>
      </div>
    </div>
  );
};

export default ManageProductsDisplay;