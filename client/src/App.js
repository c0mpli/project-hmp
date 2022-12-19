import React,{useEffect, useState} from 'react'
import './App.css'
import Dashboard from './pages/Dashboard';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import MyPrograms from './pages/MyPrograms';
import HMPPrograms from './pages/HMPPrograms';
import MyAccount from './pages/MyAccount';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { ThemeContext } from './context/ThemeContext';



function App() {
  const [theme,setTheme] = useState(JSON.parse(localStorage.getItem('theme')));

  const toggleTheme=()=>{
    const temp = theme==='light'?'dark':'light'
    setTheme(theme==='light'?'dark':'light');
    localStorage.setItem('theme',JSON.stringify(temp))
  }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div className="App" id={theme}>
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
    </ThemeContext.Provider>
  );
}

export default App;
