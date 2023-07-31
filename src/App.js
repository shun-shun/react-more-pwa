import {BrowserRouter, Link} from 'react-router-dom' 

import { Router } from './router/Router'
import React from 'react';
import './App.css';


export const App = () => {
  return (
    <BrowserRouter>
      <Link to="/">HOME</Link>
      <br />
      <Link to="/page1">Page1</Link>
      <br />
      <Link to="/page2">Page2</Link>
      <Router />
    </BrowserRouter>
  );
}