import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const[color,setColor]=useState("black")

  const increment = () => {
    if (count < 100) {
        const newcount= count+1
      setCount(newcount);
      setColor(newcount % 2===0?"red":"yellow")
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);

    }
  };

  const reset = () => {
    setCount(0);
    setColor("black")
  };

  return (
    <>
      <h1 style={{color:color}}>{count}</h1>
      <button onClick={increment}>Count increment</button>
      <button onClick={decrement}>count decrement</button>
      <button onClick={reset}>reset</button>
    </>
  );
}
export default Counter;
