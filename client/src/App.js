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
import ScrollToTop from './components/ScrollToTop';
import { useAuthContext } from './hooks/useAuthContext';



function App() {
  const [theme,setTheme] = useState(JSON.parse(localStorage.getItem('theme')));
  const {user} = useAuthContext()
  const toggleTheme=()=>{
    const temp = theme==='light'?'dark':'light'
    setTheme(theme==='light'?'dark':'light');
    localStorage.setItem('theme',JSON.stringify(temp))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div className="App" id={theme}>
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/login' element={user?<Dashboard/>:<Login />}></Route>
        <Route path='/signup' element={user?<Dashboard/>:<Signup />}></Route>

        {/** verify login here first */}
        
        <Route path='/dashboard' element={user?<Dashboard />:<Login />}></Route>
        <Route path='/myprograms' element={user?<MyPrograms/>:<Login />}></Route>
        <Route path='/hmpprograms' element={user?<HMPPrograms />:<Login />}></Route>
        <Route path='/myaccount' element={user?<MyAccount />:<Login />}></Route>
        

        {/**Below If logged in then element will be dashboard else element will be landing*/}
        <Route path='/' element={<Landing />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
