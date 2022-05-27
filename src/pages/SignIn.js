import React from 'react';
import {signInWithEmailAndPassword } from "firebase/auth";
import { useRecoilState } from 'recoil';
import { authState } from '../stores/authState';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebaseConfig';



const SignIn = () => {
  const [checkAuth, setCheckAuth] = useRecoilState(authState)
  console.log(checkAuth);
  const { register, handleSubmit } = useForm();

  const onSubmit = async(data) => {
    await signInWithEmailAndPassword(auth,data.email,data.password)
    .then((userCredential) => {
      localStorage.setItem("Auth", userCredential.user.uid)
      setCheckAuth({
        ...checkAuth,
        isLoggedIn: true
      })
    })
    .catch((error) => {
      alert(error.message)
      console.log(auth);
      

      
    })
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
        name='email'
        type='email'
        placeholder='please text email' 
        {...register("email")} 
        />

        <input
        name='password'
        type='password'
        placeholder='please text password'
        {...register("password")} 
        />
        <input type="submit" value={"login"}/>
     </form>
      <Link to="/signup">회원가입 하러 가기</Link>
  </div>
  );
}

export default SignIn;