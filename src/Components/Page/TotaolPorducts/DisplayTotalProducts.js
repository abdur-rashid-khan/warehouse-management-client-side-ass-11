import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DisplayTotalProducts = ({data}) => {
  const {img , title , about , price , _id} = data;
  return (
    <div >
      <div className="bg-slate-100 border-2 rounded-lg">
        <div className='p-2' style={{height:'230px'}}>
          <img className='' style={{height:'100%',margin:'auto'}} src={img} alt="" />
        </div>
        <div className="p-2">
          <p ><strong>{title.slice(0,28)}....</strong></p>
          <strong className='py-2 block'>price : $ <strong>{price}</strong></strong>
          <p className='py-2 text-slate-900'>{about.slice(0,60)}......</p>
        </div>
        <Link to={`/product/${_id}`} className='w-full bg-sky-500 py-2 rounded-b hover:bg-sky-600 block text-center'>select product here</Link>
      </div>
    </div>
  );
};

export default DisplayTotalProducts;