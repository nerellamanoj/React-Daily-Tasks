import React, { Component } from "react";
import Counter from "./counter";


class Custombutton extends Component {
  state = {
    issubcribe: false,
    text1: "subcribe",
    text2: "subcribed",
  };
  changeSubscribe = () => {
    console.log("clicked");
    this.setState({
      issubcribe: !this.state.issubcribe
    });
  };

  render() {
    return (
      <>
        <button style={
        {
          color:this.state.issubcribe?"red":"green"
        }

        } onClick={this.changeSubscribe}>
          {this.state.issubcribe ? this.state.text2 : this.state.text1}
        </button>
        {this.state.issubcribe ? 
        <>
          <h3>welcome user</h3>
          <Counter/>
          
          </>

         : 
          <h3>please subscribe to see the content</h3>
        }
      </>
    );
  }
}
export default Custombutton;
