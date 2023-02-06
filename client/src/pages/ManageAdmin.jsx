import React,{useState,useEffect} from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import UserCard from '../components/Users/UserCard'
import userImage from '../imgs/img2.png'
import deleteIcon from '../imgs/delete.png'


function ManageAdmin() {
  const [admins,setAdmins] = useState()
    useEffect(()=>{
      axios.get('http://localhost:5000/sadmin/getadmins',{headers:{"token":localStorage.getItem('token')}})
      .then(response=>{
        setAdmins(response.data.data)
        //console.log(admins)
        //console.log("admins "+Object.entries(admins))
      })
    })

    function handleDelete(key){
      //console.log("Clicked by "+key)
      //console.log(admins[key]._id)
      axios.post('http://localhost:5000/sadmin/deleteadmin',{
        _id:admins[key]._id
      },{headers:{"token":localStorage.getItem('token')}})
      .then(response=>{
        console.log(response.data.message)
        //window.location.reload(false);
      })
      .catch((error)=>{console.log(error)})
    }


  return (
    <div className='AppGlass2'>
        <Sidebar />
        <div className='ContentWrapper'>
          
            <ProfileHeader title={'Manage admins'}/>
          
          <div>
          {
            
            admins && admins.map((user,key)=>{
              return(
                <div id={key}>
                  <div className='HMPProgramWrapper'>
                    <img src={userImage}/>
                    <div className='ProgramContent'>
                        <h3>{`${user.firstname} ${user.lastname}`}</h3>
                        <div className='ProgramRectLine'></div>
                        <p>{`${user.email}`}</p>
                    </div>
                    <button className='deleteButton' onClick={()=>handleDelete(key)}><img src={deleteIcon} style={{height:"1.5rem",width:"1.5rem",paddingBottom:"0.3rem"}}/></button>    
    </div>
                </div>
              )
            })
          }
          
            
          </div>
        </div>
            
    </div>
  )
}

export default ManageAdmin