import react, { Component, PureComponent } from "react";
import Child from "./child";

class ParentComponent extends PureComponent{   
  state = {
    count: 0,
  };

  incrementCont = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrementCont = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  resetCont = () => {
    this.setState({
      count: 0,
    });
  };
 
  render() {
    
    return (
      <>
      <h3>Count{this.state.count}</h3>
        <button onClick={this.incrementCont}>IncrementCount</button>

        <button onClick={this.decrementCont}>DecrementCount</button>
        <button onClick={this.resetCont}>ResetCount</button>
      <Child count={this.state.count}/>
      
      </>

      
    );
  }
}
export default ParentComponent;
