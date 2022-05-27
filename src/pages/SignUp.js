import React from 'react';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from 'react-hook-form';
import {useNavigate } from 'react-router';
import {auth, db} from '../config/firebaseConfig' 
import { setDoc, doc} from 'firebase/firestore'



  const SignUp = () => {
    
    const { register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
      createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        await setDoc(doc(db, "users", userCredential.user.uid), {
          email: data.email,
          password: data.password,
        },
        { merge: true }
        )
        .then(() => {
          alert("회원가입에 성공하였습니다.")
          setTimeout(() => {
            navigate("/")
          }, [500])
        })
        .catch(error => {
          console.log(error.message)
        })
      }).catch(error => {
        console.log(error.message)
      })
    }
        
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
        name='email'
        type='email'
        placeholder='Email' 
        required {...register("email")} 
        />
        <input
        name='password'
        type='password'
        placeholder='password'
        required
        {...register("password")} 
        
        />
        <br/>
        <input type="submit" value={"create account"}/>
      </form>
    </div>

  );
}

export default SignUp;