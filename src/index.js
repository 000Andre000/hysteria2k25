import React from 'react';
import ReactDOM from 'react-dom';
import '../src/template/onepirate/css/index.css';
import App from './App';
import reportWebVitals from './template/Vitals/reportWebVitals';
import { sendToVercelAnalytics } from './template/Vitals/vitals';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
