import React from 'react'
import {useNavigate} from 'react-router-dom'
function Landing() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>{navigate('../dashboard')}}>Navigate to dashboard</button>
    </div>
  )
}

export default Landing