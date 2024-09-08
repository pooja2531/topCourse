import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
  const data = props.cardPart
  const liked = props.liked;
  const setLiked = props.setLiked;
  console.log("liked", data)

  function likedHandler(){
    if(liked.includes(data.id)){
      setLiked((prev) => prev.filter((cid) => cid !== data.id))
      toast.warning("Remove from liked")
    }else{
      if(liked.length === 0){
         setLiked([data.id])
      }else{
        setLiked((prev) => [...prev, data.id])
      }
      toast.success("Added in liked")
    }
    
  }
  return(
    <div>
      <div>
        <img src={data.image.url}></img>
      </div>

      <div>
        <FcLike onClick={likedHandler}></FcLike>
      </div>

      <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>

      

    </div>
  )
 
}

export default Card;
