import React from "react";

const Filter = (props) => {
  const filterBox = props.filterData
  const  category = props.category;
  const setCategory = props.setCategory

  function filterHandler(title){
    setCategory(title)
  }

  return(
    <div>
      {
        filterBox.map((id) =>{
          return(
            <button onClick={() =>filterHandler(id.title)}>{id.title}</button>
          )
        })
      }
    </div>
  )

}
export default Filter;
