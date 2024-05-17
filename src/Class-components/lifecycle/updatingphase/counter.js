import { Component } from "react";

class UpdatingCounter extends Component {
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
  componentDidUpdate() {
    document.title = `hello world ${this.state.count}`;
  }

  render() {
    return (
      <>
        <h3>Counter exampple</h3>
        <h3>count{this.state.count}</h3>
        <button onClick={this.incrementCont}>IncrementCount</button>

        <button onClick={this.decrementCont}>DecrementCount</button>
        <button onClick={this.resetCont}>ResetCount</button>
      </>
    );
  }
}
export default UpdatingCounter;
