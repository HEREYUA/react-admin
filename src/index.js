import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import store from './store/store'
import {Provider} from 'mobx-react'
ReactDOM.render(
  <BrowserRouter>
  <Provider {...store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

reportWebVitals();
