import React, { useState } from 'react'

 function Counter() {
    const [count,setCount]=useState(0)
     const increment=()=>{
        setCount(count+10)



     }
  return (
    <div>
        <h3>{count}</h3>
        
        <button onClick={increment}>increment</button>
        
        </div>
  )
}
export default Counter