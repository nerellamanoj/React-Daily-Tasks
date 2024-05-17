import { Component } from "react";

class Counter1 extends Component{
    state={
        count:0
    }
    incrementCount=()=>{
        this.setState({
            count:this.state.count+1,
        })

        
    }
   
render(){
    return(
        <>
        <h3>count:{this.state.count}</h3>
        <button onClick={this.incrementCount}>IncrementCount</button>
        
        
        </>
    )
}
}










export default Counter1;