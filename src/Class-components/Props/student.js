import React from "react";

const Student = (props) => {
  return (
    <div className="student">
 
{props.children}
        <p>Name: {props.name}</p> 

      <p>age: {props.age}</p>
      <p>Student: {props.isstudent ? "yes" : "no"}</p> 
    </div>
  );
};
export default Student;
