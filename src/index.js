import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Routes from './Routes';

import './Resources/css/app.css';

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
