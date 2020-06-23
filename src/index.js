import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {TourProvider} from './TourContext';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import App from './App';


ReactDOM.render(
  <TourProvider>
  <Router>
     <App />
  </Router>
  </TourProvider>
  ,
  document.getElementById('root')
);

