import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import logo from './logo.svg';
import './App.css';

const App: React.FunctionComponent = () => {
  useEffect(() => {
    Axios.get('/mock/44/test')
      .then(res => {
        console.log(res.data.data.name);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/center" className="App-link">
          前往个人中心
        </Link>
        {/* <button type="button">点我</button> */}
      </header>
    </div>
  );
};

export default App;
