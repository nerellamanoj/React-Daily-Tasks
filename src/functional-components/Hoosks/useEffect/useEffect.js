import { useEffect,useState } from "react";
import axios from "axios";

const UseEffect = () => {
  const [productListing, setProductListing] = useState([]);
  const [count,setCount]=useState(0)
  const[age,setAge]=useState(50)

  const IncrementCount=()=>{
    setCount(count+1)

  }
  const IncrementAge=()=>{
    setAge(age+1)

  }

  useEffect(() => {
    console.log("useeffect Rendering");
    fetchProducts();
  }, [count,age]);

  const fetchProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");

    setProductListing(response.data.products);

    console.log(response);
  };


  return (
    <>
      <h1>UseEffect example 1</h1>
      <h2 >Count:{count}</h2>
      <button onClick={IncrementCount}>click increment count</button>
      <h3>Increment Age{age}</h3>
      <button onClick={IncrementAge}>click to increment age</button>
    </>
  );
};
export default UseEffect;
