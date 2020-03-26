import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(): React.ReactNode {
  const [x, setX] = useState(1);
  useEffect(() => {
    console.log(x);
  }, [x]);
  return (
    <div
      className="App"
      onClick={e => {
        console.log(e);
      }}
    >
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          onClick={e => {
            console.log(e);
          }}
        />
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to reload.
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
