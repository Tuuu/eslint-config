import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './center.css';

const Center: React.FunctionComponent = () => {
  return (
    <div className="center">
      <header className="center-header">
        <img src={logo} className="center-logo" alt="logo" />
        <Link to="/" className="center-link">
          前往首页
        </Link>
      </header>
    </div>
  );
};

export default Center;
