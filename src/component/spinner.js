import React from "react";
import "./spinner.css";

function Spinner() {
  return (
    <div className="flex flex-col gap-12 justify-center items-center">
      <div className="spinner"></div>
      <p>loading...</p>
    </div>
  );
}
export default Spinner;
