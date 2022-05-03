import LoginWithOtherAccount from '../../Page/anatherAccountWithLogin/LoginWithOtherAccount'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import {Swal} from 'sweetalert2';

import './Login.css'
import axios from 'axios';
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const login = async(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
    const {data} = await axios.post('https://stormy-mountain-16030.herokuapp.com/login',{email});
      localStorage.setItem('accessToken',data)
  }
  if(user){
    navigate(from,{replace:true});
    Swal.fire(
      '',
      'check your email and active account',
      'success'
    )
    
  }
  let errorMes1  ;
  if (error) {
    errorMes1 = error.message;
  }
  return (
    <div className='container mx-auto px-4'>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div id='loginForm' className="max-w-md w-full space-y-8 bg-gray-200 p-6">
          <div>
            <img className="mx-auto h-20 w-auto" src="https://i.ibb.co/9G9ZSvK/image-removebg-preview-3.png" alt="" />
            
          </div>
          <form onSubmit={login} className="mt-8 space-y-6" >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className='pt-5'>
              {/* sr-only */}
                <label htmlFor="email-address" className="">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className='pt-5'>
                <label htmlFor="password" className=" mt-4">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link to="/password-forgot" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log In
              </button>
              <Link className='text-blue-700 mt-5 inline-block' to={'/signup'}>create a new account ?</Link>
            </div>
          </form>
          <p>
            {
              errorMes1
            }
          </p>
          <LoginWithOtherAccount/>
        </div>
      </div>
    </div>
  );
};

export default Login;