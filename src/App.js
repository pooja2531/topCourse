import "./App.css";
import React, { useEffect, useState } from "react";
import Cards from "./component/cards";
import Filter from "./component/filter";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./component/spinner";

function App() {
  const [loading, setLoader] = useState(true);
  const [courses, setCourses] = useState(null);
  const [category , setCategory] = useState(filterData[0])

  const getCourse = async () => {
    setLoader(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const output = data.data;
      setCourses(output);
    } catch (err) {
      toast.err("something went wrong");
    }
    setLoader(false);
  };

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <div>
      <h2>Top Courses</h2>
      <Filter filterData={filterData} category = {category} setCategory = {setCategory} ></Filter>
      <div>
          {
            loading ? <Spinner></Spinner> : <Cards courses= {courses} category = {category}/>
          }     
      </div>
    </div>
  );
}

export default App;
