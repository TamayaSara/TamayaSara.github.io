
import './TamayaSara.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./TamayaSara.jpg")} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Tamaya, I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/TamayaSara"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
