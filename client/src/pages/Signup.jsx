import React, {useState} from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'
import axios from 'axios';

function Signup() {
    const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [firstName, setFirstName] = useState();
   const [lastName, setLastName] = useState();
   const [confirmPassword, setConfirmPassword] = useState();
   const [mobileNumber, setMobileNumber] = useState();
   const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        if(password!==confirmPassword){
            setErrorMessage("Passwords do not match")
            return
        }
        try{
            const formData = new FormData()
            formData.append('email',email)
            formData.append('firstname',firstName)
            formData.append('lastname',lastName)
            formData.append('password',password)
            formData.append('confPassword',confirmPassword)
            formData.append('mobilenum',mobileNumber)

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
        <div className="signup-form-container">
            <form onSubmit={handleSubmit} className='signup-form'>
                <h1>Sign Up</h1>
                <input 
                    type="email" 
                    placeholder="Email" 
                    onChange={e => setEmail(e.target.value)} 
                    required
                />
                <input 
                    type="text" 
                    placeholder="First Name" 
                    onChange={e => setFirstName(e.target.value)} 
                    required
                />
                <input 
                    type="text" 
                    placeholder="Last Name" 
                    onChange={e => setLastName(e.target.value)} 
                    required
                />
                <input 
                    type="tel" 
                    placeholder="Mobile Number" 
                    onChange={e => setMobileNumber(e.target.value)} 
                    pattern="[0-9]{10}"
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
                    onChange={e => setConfirmPassword(e.target.value)} 
                    required
                />
                <p style={{color:errorMessage==="ok"?"lightgreen":"lightred",display:!errorMessage?"ok":""}}>
                    {errorMessage==="ok"?"Signup Successfull, Please":errorMessage}
                </p>
                
                <button type='submit' value='submit'>
                    Sign Up
                </button>
                <Link to={'../login'}>Already have an account?</Link> 
            </form>
        </div>
    </>
  )
}

export default Signup