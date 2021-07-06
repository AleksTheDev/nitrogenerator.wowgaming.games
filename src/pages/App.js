import ReactLogo from "../resources/react-logo.svg";
import "../css/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ReactLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
