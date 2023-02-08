import React from 'react'
import axios from 'axios'

function CourseLinks(props) {
    const videos = props.data.videos
    const courseArr = videos[props.week].day[props.day]
    //console.log(props.day,courseArr)

    function handleClick(key,value){
        //console.log(props.data)
        axios.get('https://docwebsite.adityasurve1.repl.co/user/updatecourseprogress',{
            userId:localStorage.getItem('token'),
            courseId:props.data._id,
            link:value
        },{headers:{"token":localStorage.getItem('token')},auth:{"user":{"_id":localStorage.getItem('token')}}})  
        .then(response=>{
            console.log(response.data)
        })
        .catch(error=>{console.log(error)})
    }
  return (
    <div>
    {
        courseArr?.map((value,key)=>{
            return(
                <div>
                    <a href={value} target="_blank" onClick={()=>handleClick(key,value)}>Video {key+1}</a>
                </div>
            )
        })
    }
    </div>
  )
}

export default CourseLinks