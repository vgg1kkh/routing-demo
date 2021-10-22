import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import { BrowserRouter,withRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <withRouter(App) />
  </BrowserRouter>,
  document.getElementById('root')
);


