
import { Fragment, useEffect, useState } from 'react'
import { Disclosure} from '@headlessui/react'
import {MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../logo.png'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';

const Navbar = () => {
  const navigate= useNavigate()
  const [user, loading, error] = useAuthState(auth);
    // for alert

  const logout = () => {
    signOut(auth);
    Swal.fire(
      '',
      'LogOut Success',
      'success'
    )
  };
  return (
    <div >
          <Disclosure as="nav" className="bg-gray-800 fixed w-full">
      {({ open }) => (
        <>
          <div className="container m-auto px-2">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block"
                    src={logo}
                    alt="Workflow"
                    style={{height:'130px', width:'130px',paddingTop:'10px'}}
                  />
                </div>
                <div className="hidden md:block md:ml-6">
                  <div className="flex space-x-4 mt-14 ">
                    <Link className='text-slate-100' to={'/home'}> Home </Link>
                    <Link className='text-slate-100' to={'/inventories'}> Inventories </Link>
                    <Link className='text-slate-100' to={'/manage-products'}> Manage Products </Link>
                    <Link className='text-slate-100' to={'/add-products'}> Add Products </Link>
                    <Link className='text-slate-100 md:hidden lg:block' to={'/my-items'}> My Items </Link>
                    <Link className='text-slate-100' to={'/blog'}> Blog </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {
                  user? <button onClick={()=>logout()} className='text-slate-200 pr-2'>logOut</button> : 
                  <Link to={'/login'} className='text-slate-200 pr-2'>login</Link>
                }
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 inline-grid">
              <Link className='text-slate-100' to={'/home'}> Home </Link>
              <Link className='text-slate-100' to={'/inventories'}> Inventories </Link>
              <Link className='text-slate-100' to={'/manage-products'}> Manage Products </Link>
              <Link className='text-slate-100' to={'/add-products'}> Add Products </Link>
              <Link className='text-slate-100 md:hidden lg:block' to={'/my-items'}> My Items </Link>
              <Link className='text-slate-100' to={'/blog'}> Blog </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  );
};

export default Navbar;















/* This example requires Tailwind CSS v2.0+ */



// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }
