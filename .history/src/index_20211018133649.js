import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { withRouter } from 'react-router';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </withRouter>,
  document.getElementById('root')
);


