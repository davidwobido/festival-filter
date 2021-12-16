import React from "react";
import ReactDOM from "react-dom";
import "./globals.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector("#root")
);
