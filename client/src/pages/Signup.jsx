import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import logo from '../imgs/HMP-logo.png'
import './Login.css'
import loginImg from '../imgs/login-person.png'

function Signup() {
    const navigate = useNavigate()
    const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [name, setName] = useState();
   const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        
        try{
            const formData = new FormData()
            formData.append('email',email)
            formData.append('name',name)
            formData.append('password',password)

            const response = await axios.get('/userregister',formData)
            
            const json = await response.json()
            console.log(json)

            if(!response.ok){
                setErrorMessage(json)
            }
            if(response.ok){
                setErrorMessage("ok")
            }
        }catch(e){
            setErrorMessage(e)
        }
    }
  return (
    <>
    <div className="login-wrapper">
        <nav className='navbar'>
            <img src={logo} onClick={()=>navigate('../')}/>
            <div className='navbar-buttons'>
            </div>
        </nav>
        <div className="content-wrapper">
            <div className='login-form-container'>
            <form onSubmit={handleSubmit} className='login-form'>
                <h1>Sign Up</h1>
                <input 
                    type="email" 
                    placeholder="Email" 
                    onChange={e => setEmail(e.target.value)} 
                    required
                />
                <input 
                    type="text" 
                    placeholder="Name" 
                    onChange={e => setName(e.target.value)} 
                    required
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    onChange={e => setPassword(e.target.value)} 
                    required
                />
                <p style={{color:errorMessage==="ok"?"lightgreen":"lightred",display:!errorMessage?"ok":""}}>
                    {errorMessage==="ok"?"Signup Successfull, Please":errorMessage}
                </p>
                
                <button type='submit' value='submit'>
                    Sign Up
                </button>
                <div className='login-subtitle'>
                    <p>Already have an account?</p>
                    <Link to={'../login'}>Login</Link>
                </div> 
            </form>
            </div>
            
        </div>  
    </div>
    </>
  )
}

export default Signup