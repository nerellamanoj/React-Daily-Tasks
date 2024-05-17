import { Component } from "react";

class UnMount extends Component {
  state = {
    isvisible: true,
  };
  changehandler=()=>{
    this.setState(

        {
            isvisible:!this.state.isvisible
              
              
        }
    )
  }




  render() {
    return (
      <>
        <h3>Unmount Example</h3>
        <button onClick={this.changehandler}>click to remove child</button>
        <Child />
        {this.state.isvisible ? <Child /> : <h3>no Child</h3>}
      </>
    );
  }
}
export default UnMount;

class Child extends Component {
    componentWillUnmount(){
        alert("alert")

    }
  render() {
    return (
      <>
        <h3>Child visible</h3>
      </>
    );
  }
}
