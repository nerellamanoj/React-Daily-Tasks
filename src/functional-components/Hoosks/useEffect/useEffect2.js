import axios from "axios";
import { useEffect, useState } from "react";

const UseEffect2 = () => {
  const [ProductListing, setProductListing] = useState(0);
  const [count, setCount] = useState(0);

  const CountIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  useEffect(() => {
    document.title= ` count ${count}`;
  });


  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    setProductListing(response.data.product);
    console.log(response);
  };

  return (
    <>
      <h3>productListing</h3>
      <h3>{count}</h3>
      <button onClick={CountIncrement}>increment count</button>
    </>
  );
};
export default UseEffect2;
