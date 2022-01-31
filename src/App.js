import logo from './logo.svg';
import './App.css';

function App() {

  const name = "Josh";
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
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

        <p>Test Test Check check</p>

        <ul>
          <li>Tony</li>
          <li>Walter</li>
          <li>Saul</li>
        </ul>





      </header>



      <div>
        <p>Created by {name}</p>
        <p>Copyright {year}</p>

      </div>
    </div>
  );
}

export default App;
