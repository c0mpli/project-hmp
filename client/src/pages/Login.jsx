import React, {useState} from 'react'
import './Login.css'
import axios from 'axios';
import { useNavigate ,Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import logo from '../imgs/HMP-logo.png'
import loginImg from '../imgs/login-person.png'
function Login() {
    const navigate = useNavigate()
    const {dispatch} = useAuthContext()
    const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(event) {
        try{
            const formData = new FormData()
            formData.append('email',email)
            formData.append('password',password)

            const response = await axios.get('/userlogin',formData)
            
            const json = await response.json()
            console.log(json)
            
            if(!response.ok){
                setErrorMessage(json)
            }
            if(response.ok){
                //set state to logged in 
                dispatch({type:"LOGIN",payload: json})
                navigate('../dashboard')
            }
        }catch(e){
            setErrorMessage(e)
        }
        event.preventDefault();
        alert(email + password)
    
      }
  return (
    <div className='login-wrapper'>
        <nav className='navbar'>
            <img src={logo} onClick={()=>navigate('../')}/>
            <div className='navbar-buttons'>
                
            </div>
        </nav>
        <div className="content-wrapper">
            <div className="login-form-container">
                <form onSubmit={handleSubmit} className='login-form'>
                    <h1>Login</h1>
                    <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    <p 
                    style={{color:errorMessage==="ok"?"lightgreen":"lightred",display:!errorMessage?"ok":""}}>
                        {errorMessage==="ok"?"Signup Successfull, Please login":errorMessage}
                    </p>
                    <div>
                        <Link>Forget Password?</Link>
                    </div>
                    <button>Login</button>
                    <div className='login-subtitle'><p>New Here?</p><Link to='/signup'>Signup</Link></div>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Login