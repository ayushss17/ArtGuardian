import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Components/redux/redux";
import { MetamaskProvider } from "./Components/NavigationBar/MetaMaskContext";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <MetamaskProvider> 
   <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  </MetamaskProvider>
,
  document.getElementById('root')
);