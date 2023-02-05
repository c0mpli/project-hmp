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
import ManageUsers from './pages/ManageUsers';
import ManageAdmin from './pages/ManageAdmin';



function App() {
  const [theme,setTheme] = useState(JSON.parse(localStorage.getItem('theme')));
  const {user} = useAuthContext()
  const toggleTheme=()=>{
    const temp = theme==='light'?'dark':'light'
    setTheme(theme==='light'?'dark':'light');
    localStorage.setItem('theme',JSON.stringify(temp))
  }
  const role = localStorage.getItem('role')
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
        
        <Route path='/manageusers' element={role==='admin' || role==='superadmin'?<ManageUsers/>:user?<Dashboard/>:<Login/>}></Route>
        <Route path='/manageadmins' element={role==='admin' || role==='superadmin'?<ManageAdmin/>:user?<Dashboard/>:<Login/>}></Route>

        <Route path='/' element={<Landing />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
