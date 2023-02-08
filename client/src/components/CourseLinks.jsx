import React from 'react'
import { Link } from 'react-router-dom'

function CourseLinks(props) {
    const videos = props.data
    const courseArr = videos[props.week].day[props.day]
    console.log(props.day,courseArr)

    function handleClick(){
        
    }
  return (
    <>
    {
        courseArr?.map((value,key)=>{
            return(
                <a href={value} target="_blank" onClick={handleClick}>Video {key+1}</a>
            )
        })
    }
    </>
  )
}

export default CourseLinks