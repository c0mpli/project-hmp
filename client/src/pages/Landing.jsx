import React from 'react'
import {useNavigate} from 'react-router-dom'
function Landing() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>{navigate('../dashboard')}}>Navigate to dashboard</button>
      <button onClick={()=>{navigate('../login')}}>Navigate to login</button>
      <button onClick={()=>{navigate('../signup')}}>Navigate to signup</button>
    </div>
  )
}

export default Landing