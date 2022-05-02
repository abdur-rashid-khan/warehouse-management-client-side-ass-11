import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';

const Forgot = () => {
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
  const resetPassword =(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    sendPasswordResetEmail(email);
    Swal.fire(
      '',
      'check your email and reset password',
      'success'
    )
  }
  return (
    <div className='container mx-auto px-4'>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div id='loginForm' className="max-w-md w-full space-y-8 bg-gray-200 p-6">
          <div className='text-center'>
            <h1 className='text-2xl font-serif' >Reset Password</h1>
          </div>
          <form onSubmit={resetPassword} className="mt-8 space-y-6" >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className='pt-3'>
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
            </div>


            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Forgot password
              </button>
              <Link className='text-blue-700 mt-5 inline-block' to={'/signup'}>create a new account ?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;