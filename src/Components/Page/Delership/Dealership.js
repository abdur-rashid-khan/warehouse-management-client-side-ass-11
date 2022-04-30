import { CheckCircleIcon, CheckIcon } from '@heroicons/react/outline';
import React from 'react';

const Dealership = () => {
  return (
    <div id='deals' className='container mx-auto px-6 py-4' >
      <div className="">
      <div id="deals-title" className='text-center'>
        <h1 className='text-3xl text-center font-serif font-bold'>Deals</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <div className="border p-4 bg-slate-200 rounded-md">
            <h1 className='text-4xl font-serif font-bold'>$3000</h1>
            <div className="text-center py-4">
              <strong className='text-left text-lg'>weekly DealerShip</strong>
              <ul className=''>
                <li className='inline-flex w-full py-3' style={{borderBottom:'1px solid white'}}> <CheckIcon className='mr-2 text-green-500' style={{width:'25px',height:"25px"}} /> Lorem ipsum dolor sit amet. </li>
                <li className='inline-flex w-full py-3' style={{borderBottom:'1px solid white'}}> <CheckIcon className='mr-2 text-green-500' style={{width:'25px',height:"25px"}} /> Lorem ipsum dolor sit amet. </li>
                <li className='inline-flex w-full py-3' style={{borderBottom:'1px solid white'}}> <CheckIcon className='mr-2 text-green-500' style={{width:'25px',height:"25px"}} /> Lorem ipsum dolor sit amet. </li>
                <li className='inline-flex w-full py-3' style={{borderBottom:'1px solid white'}}> <CheckIcon className='mr-2 text-green-500' style={{width:'25px',height:"25px"}} /> Lorem ipsum dolor sit amet. </li>
                <li className='inline-flex w-full py-3' style={{borderBottom:'1px solid white'}}> <CheckIcon className='mr-2 text-green-500' style={{width:'25px',height:"25px"}} /> Lorem ipsum dolor sit amet. </li>
                <li className='inline-flex w-full py-3' style={{borderBottom:'1px solid white'}}> <CheckIcon className='mr-2 text-green-500' style={{width:'25px',height:"25px"}} /> Lorem ipsum dolor sit amet. </li>
              </ul>
            </div>
          </div>
          <div className="border p-4 bg-slate-200 rounded-md">
            <h1 className='text-4xl font-serif font-bold'>$3000</h1>
            <div className="text-center py-4">
              <strong className='text-left text-lg'>Month DealerShip</strong>
              <ul className=''>
                <li className='inline-flex w-full py-3' style={{borderBottom:'1px solid white'}}> <CheckIcon className='mr-2 text-green-500' style={{width:'25px',height:"25px"}} /> Lorem ipsum dolor sit amet. </li>
                <li className='inline-flex w-full py-3' style={{borderBottom:'1px solid white'}}> <CheckIcon className='mr-2 text-green-500' style={{width:'25px',height:"25px"}} /> Lorem ipsum dolor sit amet. </li>
                <li className='inline-flex w-full py-3' style={{borderBottom:'1px solid white'}}> <CheckIcon className='mr-2 text-green-500' style={{width:'25px',height:"25px"}} /> Lorem ipsum dolor sit amet. </li>
                <li className='inline-flex w-full py-3' style={{borderBottom:'1px solid white'}}> <CheckIcon className='mr-2 text-green-500' style={{width:'25px',height:"25px"}} /> Lorem ipsum dolor sit amet. </li>
                <li className='inline-flex w-full py-3' style={{borderBottom:'1px solid white'}}> <CheckIcon className='mr-2 text-green-500' style={{width:'25px',height:"25px"}} /> Lorem ipsum dolor sit amet. </li>
                <li className='inline-flex w-full py-3' style={{borderBottom:'1px solid white'}}> <CheckIcon className='mr-2 text-green-500' style={{width:'25px',height:"25px"}} /> Lorem ipsum dolor sit amet. </li>
              </ul>
            </div>
          </div>
          <div className="border p-4 bg-slate-200 rounded-md">
            <h1 className='text-4xl font-serif font-bold'>$3000</h1>
            <div className="text-center py-4">
              <strong className='text-left text-lg'>Year DealerShip</strong>
              <ul className=''>
                <li className='inline-flex w-full py-3' style={{borderBottom:'1px solid white'}}> <CheckIcon className='mr-2 text-green-500' style={{width:'25px',height:"25px"}} /> Lorem ipsum dolor sit amet. </li>
                <li className='inline-flex w-full py-3' style={{borderBottom:'1px solid white'}}> <CheckIcon className='mr-2 text-green-500' style={{width:'25px',height:"25px"}} /> Lorem ipsum dolor sit amet. </li>
                <li className='inline-flex w-full py-3' style={{borderBottom:'1px solid white'}}> <CheckIcon className='mr-2 text-green-500' style={{width:'25px',height:"25px"}} /> Lorem ipsum dolor sit amet. </li>
                <li className='inline-flex w-full py-3' style={{borderBottom:'1px solid white'}}> <CheckIcon className='mr-2 text-green-500' style={{width:'25px',height:"25px"}} /> Lorem ipsum dolor sit amet. </li>
                <li className='inline-flex w-full py-3' style={{borderBottom:'1px solid white'}}> <CheckIcon className='mr-2 text-green-500' style={{width:'25px',height:"25px"}} /> Lorem ipsum dolor sit amet. </li>
                <li className='inline-flex w-full py-3' style={{borderBottom:'1px solid white'}}> <CheckIcon className='mr-2 text-green-500' style={{width:'25px',height:"25px"}} /> Lorem ipsum dolor sit amet. </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dealership;