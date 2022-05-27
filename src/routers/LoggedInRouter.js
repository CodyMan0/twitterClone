import React from 'react';
import { Route, Routes } from 'react-router';
import EditProfile from '../pages/EditProfile';
import Home from '../pages/Home';



const LoggedInRouter = () => {

  
  return (
    <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/editprofile' element ={<EditProfile/>} />
    </Routes>
  );
}

export default LoggedInRouter;