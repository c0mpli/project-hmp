import React from 'react'
import deleteIcon from '../../imgs/delete.png'
function UserCard(props) {
    console.log(props.name)
  return (
    <div className='HMPProgramWrapper'>
        <img src={props.image}/>
        <div className='ProgramContent'>
            <h3>{props.name}</h3>
            <div className='ProgramRectLine'></div>
            <p>{props.description}</p>
        </div>
        <button className='deleteButton'><img src={deleteIcon} style={{height:"1.5rem",width:"1.5rem",paddingBottom:"0.3rem"}}/></button>    
    </div>
  )
}

export default UserCard