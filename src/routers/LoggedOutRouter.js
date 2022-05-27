import React from 'react';
import { Route, Routes } from 'react-router';
import SignIn from '../pages/SignIn';
import SingUp from '../pages/SignUp';


const LoggedOutRouter = () => {
  

  return (
   <Routes>
     <Route path='/' element={<SignIn /> } />
     <Route path='/signup' element={<SingUp />} />
   </Routes>
  );
}

export default LoggedOutRouter;