import './App.css'
import Dashboard from './pages/Dashboard';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import MyPrograms from './pages/MyPrograms';
import HMPPrograms from './pages/HMPPrograms';
import MyAccount from './pages/MyAccount';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/** verify login here first */}
 
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/myprograms' element={<MyPrograms/>}></Route>
        <Route path='/hmpprograms' element={<HMPPrograms/>}></Route>
        <Route path='/myaccount' element={<MyAccount/>}></Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
