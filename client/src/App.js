import React from 'react'
import './App.css'
import Dashboard from './pages/Dashboard';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import MyPrograms from './pages/MyPrograms';
import HMPPrograms from './pages/HMPPrograms';
import MyAccount from './pages/MyAccount';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>

        {/** verify login here first */}
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/myprograms' element={<MyPrograms/>}></Route>
        <Route path='/hmpprograms' element={<HMPPrograms />}></Route>
        <Route path='/myaccount' element={<MyAccount />}></Route>

        {/**Below If logged in then element will be dashboard else element will be landing*/}
        <Route path='/' element={<Landing />}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
