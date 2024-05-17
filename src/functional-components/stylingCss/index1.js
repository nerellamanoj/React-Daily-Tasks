import React from "react";
// import "./custom-text-style.css"
// import "../../App.css"
import styles from "./style.module.css"


function Manoj() {
  const customtext = {
    color: "white",
    fontFamily: "sans-serif",
    backgroundColor: "green",
    width: 100,
  };
  return (
    <>
       {/* <h1 style={customtext}>Manoj</h1>
      <h3 className="Nerella">Hello world manoj</h3>
      <h3 className="Nerella">Hello world manoj</h3>
      <h3 className="Nerella">Hello world manoj</h3> */}
      <h3 className={styles.h3Text}>Hello manoj modules </h3> 
    </>
  );
}

export default Manoj;
