import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Todos />
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
      <footer>
        <p>Made By: Sreeman</p>
      </footer>
    </div>
  );
}

export default App;
