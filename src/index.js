import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "Redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-o-hq4kv9.us.auth0.com"
      clientId="ShiSxYxMxt7tDZHJ5l3qVpZmF1No4tLP"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
