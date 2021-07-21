import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Counter} from './reducer_example';

ReactDOM.render(
  <React.StrictMode>
    <Counter />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
