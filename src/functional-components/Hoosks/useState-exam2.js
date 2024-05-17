import react, { useState } from "react";

const UseStateExample2 = () => {
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
  const addfruits = () => {
    const newfruits = [...fruits, "newfruit"];
    setFruits(newfruits)
  };

  return (
    <>
      <button onClick={addfruits}>Add fruits</button>
      {fruits.map((value, index) => (
        <h4 key={index}>{value}</h4>
      ))}
    </>
  );
};
export default UseStateExample2;
