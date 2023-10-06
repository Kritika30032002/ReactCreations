import React from 'react';
import { render } from 'react-dom';
import './App.css'; // You should use 'index.css' instead of 'App.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

// Remove this line, it's not necessary
// const root = ReactDOM.createRoot(document.getElementById('root'));

// Replace ReactDOM.render with render
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// The rest of your code remains the same
reportWebVitals();
