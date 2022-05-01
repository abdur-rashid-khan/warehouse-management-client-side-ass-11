import React from 'react';
import { BeakerIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import './ManageProducts.css'

const ManageProductsDisplay = ({data}) => {
  console.log(data);
  const{img , title,price} = data;
  return (
    <div className='bg-slate-200 my-4 p-2'>
      <div className="flex items-center content-center justify-center" >
        <div className="img"  style={{width:'150px',height:"auto"}}>
          <img className='rounded' src={img} alt="" />
        </div>
        <div className="text-left  mx-6">
          <strong>{title}</strong>
          <p>${price}</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates repellendus architecto delectus suscipit. Excepturi a molestiae consequatur vitae, e</p>
        </div>
        <div className="">
          <PencilAltIcon className='my-4 cursor-pointer' style={{width:'30px',color:"#3CA0F3",height:'auto',}}/>
          <TrashIcon className='my-4 cursor-pointer' style={{width:'30px',color:"red",height:'auto',}}/>
        </div>
      </div>
    </div>
  );
};

export default ManageProductsDisplay;