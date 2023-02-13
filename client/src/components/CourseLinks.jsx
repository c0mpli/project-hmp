import React from 'react'
import axios from 'axios'
import sample from '../imgs/sampleProgram.png'

function CourseLinks(props) {
    const videos = props.data
    const courseArr = props.data[props.day]
    //console.log(props.id)
    //console.log(props.day,courseArr)

    function handleClick(key,value){
        //console.log(props.data)
        axios.post('https://docwebsite.adityasurve1.repl.co/user/updatecourseprogress',{
            userId:localStorage.getItem('token'),
            courseId:props.id,
            link:value
        },{headers:{"token":localStorage.getItem('token')},auth:{"user":{"_id":localStorage.getItem('token')}}})  
        .then(response=>{
            console.log(response.data)
        })
        .catch(error=>{console.log(error)})
    }
  return (
    <div className='linksWrapper'>
    {
        courseArr?.map((value,key)=>{
            return(
                <div className='videoWrapper'>
                    <a href={value} target="_blank" onClick={()=>handleClick(key,value)}>
                    <img src={sample}/>
                        WORKOUT {key+1}
                    </a>
                </div>
            )
        })
    }
    </div>
  )
}

export default CourseLinks