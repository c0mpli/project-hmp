import React from 'react'
import deleteIcon from '../../imgs/delete.png'
import axios from 'axios'
function UserCard(props) {
    //console.log(props.name)
    function handleDelete(){
      console.log("Clicked by "+props.email)
      axios.post('http://localhost:5000/sadmin/deleteadmin',{
        id:props._id
      },{headers:{"token":localStorage.getItem('token')}})
      .then(response=>{
        console.log(response.data.message)
        //window.location.reload(false);
      })
    }
  return (
    <div className='HMPProgramWrapper'>
        <img src={props.image}/>
        <div className='ProgramContent'>
            <h3>{props.name}</h3>
            <div className='ProgramRectLine'></div>
            <p>{props.description}</p>
        </div>
        <button className='deleteButton' onClick={handleDelete}><img src={deleteIcon} style={{height:"1.5rem",width:"1.5rem",paddingBottom:"0.3rem"}}/></button>    
    </div>
  )
}

export default UserCard