
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import LoginWithOtherAccount from '../anatherAccountWithLogin/LoginWithOtherAccount';
import Swal from 'sweetalert2';

const SignUp = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';

  const [passAlert , setPassAlert] = useState('');
  const [remember , setRemember] = useState(false);

  const rememberBtn = e =>{
    const rememberValue =e.target.checked;
    setRemember(rememberValue);
  }
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});


  const signUpBtn = async(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    let shortPassMess;
    if(password.length < 6){
      shortPassMess = <p className='text-red-500'>minimum password length 6</p>
      setPassAlert(shortPassMess)
      return;
    }
    await createUserWithEmailAndPassword(email , password);
  }
  let errorMes1  ;
  if (error) {
    errorMes1 = error.message;
    console.log(error.message);
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate(from,{replace:true});
    Swal.fire(
      '',
      'check your email and active account',
      'success'
    )
    
  }

  return (
    <div className='container mx-auto px-4'>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div id='loginForm' className="max-w-md w-full rounded-xl border-sky-200 shadow-xl space-y-8 bg-gray-200 p-6">
          <div>
            <img className="mx-auto h-20 w-auto" src="https://i.ibb.co/9G9ZSvK/image-removebg-preview-3.png" alt="" />
            
          </div>
          <form className="mt-8 space-y-6" onSubmit={signUpBtn}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
              {/* sr-only */}
                <label htmlFor="userName" className="">
                  User Name
                </label>
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="User Name"
                />
              </div>
              <div className='pt-3'>
              {/* sr-only */}
                <label htmlFor="mobileNumber" className="">
                  Mobile Number
                </label>
                <input
                  id="mobileNumber"
                  name="mobileNumber"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Number"
                />
              </div>
              <div className='pt-3'>
              {/* sr-only */}
                <label htmlFor="email-address" className="">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className='pt-3'>
                <label htmlFor="password" className=" mt-4">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                {passAlert?passAlert:''}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  onChange={rememberBtn}
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                  Agree Terms And Conditions
                </label>
              </div>
              <div className="text-sm">
                {/* <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  I Have Account  
                </Link> */}
              </div>
            </div>

            <div>
              {
                remember?<button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </button> : <button
                type="submit"
                disabled
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </button>
              }
              <p className="pt-4">
                {
                errorMes1
                }
              </p>
              <Link className='text-blue-700 mt-5 inline-block' to={'/login'}>I Have Account  </Link>
            </div>
          </form>
          <LoginWithOtherAccount/>
        </div>
      </div>
    </div>
  );
};

export default SignUp;