import React, { useState } from "react";
import Card from "./card"
import { SiEyeem } from "react-icons/si";

function Cards(props) {
  const courses = props.courses
  const [liked, setLiked] = useState([]);
  const category = props.category
  console.log("asdfgh", category)
  
  function getCourse(){
    if(category.title === "All"){
      const allCourse = [];
      Object.values(courses).map((data) =>{
        data.map((course) =>{
          allCourse.push(course)
        })
      })
      return allCourse
    } else{
      return courses[category]
    }
   
  }
  

  return (
    <div>
      {
         getCourse().map((cardPart) =>{
          return(
            <Card cardPart = {cardPart} liked = {liked} setLiked = {setLiked}></Card>
          )
         })
      }

    </div>
  )
}
export default Cards;