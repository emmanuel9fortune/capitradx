import React from 'react';
import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Forgot from './auth/Forgot';

function Unloged() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/forgotpassword' element={<Forgot/>} />
        <Route path='/profile' element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default Unloged;
