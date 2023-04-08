import logo from "../logo.svg";
import "../App.css";

const StartPoint = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://fmt.com.do"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's get started
        </a>
      </header>
    </div>
  );
};

export default StartPoint;
