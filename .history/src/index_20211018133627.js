import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { withRouter } from 'react-router';
import App from './App';


ReactDOM.render(
  <withRouter>
    <App />
  </withRouter>,
  document.getElementById('root')
);


