import logo from './logo.svg';
import './App.css';
import Custombutton from './Class-components/button';
import Button from './functional-components/button';
// import List from './functional-components/lists/list';
// import FakeStore from './functional-components/lists/list';
// import FakeStore from './functional-components/lists/list';
import Fruits from './functional-components/lists/map';

function App() {
  return (
    <div className="App">
      {/* <Custombutton></Custombutton>
      <Button></Button>
       */}
       {/* <FakeStore></FakeStore> */}

       {/* <List/> */}
       <Fruits></Fruits>

       {/* <FakeStore></FakeStore> */}
    

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
