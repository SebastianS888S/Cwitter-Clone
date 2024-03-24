// src/components/Login.js
import React from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import bk1 from "../img/bk1.png";



const Login = () => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <div className='container-bigLg'>
    <div className='container-login'>
      <h1 className='title-login'>Wellcome to Twitter Clone</h1>
      <h2 className='tilte-login2'>Login</h2>
      <button className='btn-login' onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
    </div>
  );
};

export default Login;
