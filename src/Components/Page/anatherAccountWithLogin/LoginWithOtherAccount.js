import React from 'react';
import googleIcon from  '../../../icon/google.png'
import gitIcon from  '../../../icon/git.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LoginWithOtherAccount = () => {

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, GitUser, GitLoading, GitError] = useSignInWithGithub(auth);
  const googleLogIn =()=>{
    signInWithGoogle()
  }
  const gitLogIn =()=>{
    signInWithGithub()
  }
  
  if(user || GitUser){
    navigate(from,{replace:true});
    Swal.fire(
      '',
      'login success',
      'success'
    )
  }
  let loadingMaess ;
  if(loading || GitLoading){
    loadingMaess = <p>Loading</p>
  }
  let errorMes  ;
  if (error || GitError) {
    errorMes = error.message;
    console.log(error.message);
  }
  return (
    <div>
      {
        loading? loadingMaess:''
      }
      <p>
        {
          error?errorMes : ''
        }
      </p>
      
      <div className="flex items-center px-2 ">
        <div style={{backgroundColor:'#BBB5B5',width:'100%',height:'1px'}}></div>
        <div className='px-3'>or</div>
        <div style={{backgroundColor:'#BBB5B5',width:'100%',height:'1px'}}></div>
      </div>
      <div className="flex justify-center">
        <div onClick={googleLogIn} id="googleLogIn" style={{width:"45px",height:'30px',marginRight:'10px' , cursor:'pointer'}}>
          <img className='w-full' src={googleIcon} alt="" />
        </div>
        <div onClick={gitLogIn} id="gitLogIn" style={{width:"38px",height:'30px',paddingTop:'3px',marginLeft:'10px' , cursor:'pointer'}}>
          <img className='w-full' src={gitIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginWithOtherAccount;