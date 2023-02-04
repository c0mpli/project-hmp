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
   const [confPassword, setconfPassword] = useState();
   const [name, setName] = useState();
   const [number, setNumber] = useState();

   const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        
        try{
            const registerData ={
                "firstname":(name.split(' '))[0],
                "lastname":(name.split(' '))[name.length-1],
                "email":email,
                "mobilenum":number,
                "password":password,
                "confPassword":confPassword
            } 

            const response = await axios.post('http://192.168.1.7:5000/user/userregister',registerData)
            
            const json = await response.json()
            if(response.status===200){
                setErrorMessage("ok")
            }
            //console.log(json)

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
            <form className='login-form'>
                <h1>Sign Up</h1>
                <input 
                    type="text" 
                    placeholder="Full Name" 
                    onChange={e => setName(e.target.value)} 
                    required
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    onChange={e => setEmail(e.target.value)} 
                    required
                />
                <input 
                    type="number" 
                    placeholder="Mobile number" 
                    onChange={e => setNumber(e.target.value)} 
                    required
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    onChange={e => setPassword(e.target.value)} 
                    required
                />
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    onChange={e => setconfPassword(e.target.value)} 
                    required
                />
                <p style={{color:errorMessage==="ok"?"lightgreen":"lightred",display:!errorMessage?"ok":""}}>
                    {errorMessage==="ok"?"Signup Successfull, Please":errorMessage}
                </p>
                
                <button value='submit' onClick={e=>handleSubmit(e)}>
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