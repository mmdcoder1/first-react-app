//React modules
import React from "react";
import ReactDOM from "react-dom/client";

//Cmponents
import App from "./App";
import './base.css';

//Router
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </React.StrictMode>
);