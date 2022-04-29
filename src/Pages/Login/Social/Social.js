import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleIcon from '../../../Images/Social/google-icon.png';
import facebook from '../../../Images/Social/facebook.png';
import github from '../../../Images/Social/github.png';
const Social = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);  
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let errorElement;
    if (error || error1) {
        
           errorElement =  <div>
                <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
            </div>
       
    }

    

    if (user || user1) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className='mt-3 px-2'>Or</p>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
            </div>
            <div>
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-primary w-50 d-block mx-auto'>
                <img src={googleIcon} alt="" />
                <span className='px-3'>Google Sign In</span>
            </button>
            </div>
            {errorElement}
            <div>
            <button
                
                className='btn btn-primary w-50 d-block mx-auto mt-3'>
                <img src={facebook} alt="" />
                <span className='px-3'>Facebook Sign In</span>
            </button>
            </div>
            <div>
            <button
                onClick={() => signInWithGithub()}
                className='btn btn-primary w-50 d-block mx-auto mt-3'>
                <img src={github} alt="" />
                <span className='px-3'>GitHub Sign In</span>
            </button>
            </div>
        </div>
    );
};

export default Social;