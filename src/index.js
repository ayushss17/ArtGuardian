import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./Components/NavBar";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);