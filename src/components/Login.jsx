import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidation } from '../utils/validate';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const handleButtonClick = () => {
        // validate the form data
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const message = checkValidation(email, password);
        setErrorMessage(message);
    }
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header/>
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_medium.jpg" alt="logo" />
            </div>
            <form action="" 
                className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75'
                onSubmit={(e) => e.preventDefault()}
            >
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignInForm && (
                        <input 
                            type="text"
                            placeholder='Full Name'
                            className='p-2 my-4 w-full bg-gray-700'
                        />
                    )
                }
                <input 
                    ref={emailRef}
                    type="text" 
                    placeholder='Email Address' 
                    className='p-2 my-4 w-full bg-gray-700'
                />
                <input 
                    ref={passwordRef}
                    type="password" 
                    placeholder='password' 
                    className='p-2 my-4 w-full bg-gray-700'
                />
                <p className='text-red-700 font-bold text-lg'>{errorMessage}</p>
                <button 
                    className='p-2 my-4 bg-red-700 w-full rounded-lg'
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button> 
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm 
                        ? "New to Netflix ? Sign Up now" 
                        : "Already registered ? Sign In now"
                    }
                </p>  
            </form>
        </div>
    );
}

export default Login;