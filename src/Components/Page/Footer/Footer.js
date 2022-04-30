import { DeviceMobileIcon, InboxIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import React from 'react';
import logo from '../../../logo.png'

const Footer = () => {
  return (
    <footer className='bg-slate-800 pb-4'>
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 md:items-center md:justify-items-center sm:items-start sm:justify-items-start">
            <div className="">
              <img style={{width:'150px'}} src={logo} alt="" />
              <p className='text-slate-300' style={{marginTop:'-35px',paddingBottom:'20px'}}>We always try to have a good relationship with our customers and help in all kinds.Giveing good service because we know that if can provide good service, good is for you and all of us ...</p>
              
            </div>
            <div className="">
              <div className="">
                <h1 className='text-slate-200 text-xl'>Contact As </h1>
              <ul className='pt-6'>
                <li className='text-slate-300 p-1 inline-flex'> <InboxIcon style={{width:'25px',height:'25px',marginRight:'8px'}}></InboxIcon><strong>rashidkhanbd57@gmail.com</strong></li><br />
                <li className='text-slate-300 p-1 inline-flex' > <DeviceMobileIcon style={{width:'25px',height:'25px',marginRight:'8px'}}></DeviceMobileIcon>+3843874676576</li><br />
                <li className='text-slate-300 p-1 inline-flex'> <LocationMarkerIcon style={{width:'25px',height:'25px',marginRight:'8px'}}/> Dhaka , BanglaDesh</li>
              </ul>
              </div>
            </div>
        </div>
        <div className="py-2">
              <strong className='text-slate-200'>Copyright &copy;2022 Powered by shopin</strong>
            </div>
      </div>
    </footer>
  );
};

export default Footer;