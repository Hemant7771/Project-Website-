import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { AppProvider } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Auth0Provider
        domain="tabishkhan.us.auth0.com"
        clientId="5Rlt8vyjvJgQV8hd9eTIWjMkdD56XziR"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </AppProvider>
  </React.StrictMode>
);
