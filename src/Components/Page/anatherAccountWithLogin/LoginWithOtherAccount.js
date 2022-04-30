import React from 'react';
import googleIcon from  '../../../icon/google.png'
import gitIcon from  '../../../icon/git.png'

const LoginWithOtherAccount = () => {
  return (
    <div>
      <div className="flex items-center px-2 ">
        <div style={{backgroundColor:'#BBB5B5',width:'100%',height:'1px'}}></div>
        <div className='px-3'>or</div>
        <div style={{backgroundColor:'#BBB5B5',width:'100%',height:'1px'}}></div>
      </div>
      <div className="flex justify-center">
        <div id="googleLogIn" style={{width:"45px",height:'30px',marginRight:'10px' , cursor:'pointer'}}>
          <img className='w-full' src={googleIcon} alt="" />
        </div>
        <div id="gitLogIn" style={{width:"38px",height:'30px',paddingTop:'3px',marginLeft:'10px' , cursor:'pointer'}}>
          <img className='w-full' src={gitIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginWithOtherAccount;