import React from "react";
import ReactDOM from "react-dom";
import "./globals.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/Start/Start";
import NameInput from "./pages/NameInput/NameInput";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="StartPage" element={<StartPage />} />
          <Route path="NameInput" element={<NameInput />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
