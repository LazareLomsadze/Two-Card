import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import '../src/input.css';
// import { Provider } from "react-redux";

ReactDOM.render(
  // <Provider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  // </Provider>, 
  ,
  document.getElementById("root")
);
