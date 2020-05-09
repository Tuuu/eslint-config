import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const App: React.FunctionComponent = () => {
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
        <Link to="/center" className="App-link">
          前往个人中心
        </Link>
      </header>
    </div>
  );
};

export default App;
