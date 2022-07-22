import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const Count = () => {
  useEffect(() => {
    console.log('<Count />', Date.now());
  }, []);

  return (<p>123</p>);
};

function App() {
  useEffect(() => {
    console.log('<App />', Date.now());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Count />
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
      </header>
    </div>
  );
}

export default App;
