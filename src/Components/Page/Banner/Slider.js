import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid'
import './Banner.css'
import banner from '../../../img/banner.png'
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div id='banner' className='container mx-auto px-6 py-20'>
      <div id="banner-img-up">
        <img src={banner} alt="" />
      </div>
      <div className="">
          <h1 className='text-3xl font-serif font-bold'>Hi Dear Costumer.</h1>
          <p className='py-6'>
          Here you will find the best quality wholesale products at low prices . And if you are a fan of dealership, you will get many more benefits . If you want to make a deal then ....
          </p>
          <a href='#deals' className='text-lg bg-blue-700 p-2 text-slate-100 rounded px-8'>Deal Now<span><ArrowRightIcon style={{width:'25px',height:'25px',display:'inline-block',paddingLeft:'5px'}} /></span></a>
      </div>
      <div id="banner-img">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Slider;