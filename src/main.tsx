import React from "react";
import ReactDOM from "react-dom";
import "./globals.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/Start/Start";
import NameInput from "./pages/NameInput/NameInput";
import FilterPage from "./pages/Filter/FilterPage";
import FilterResult from "./pages/FilterResult/FilterResult";
import AllFestivals from "./pages/AllFestivals/AllFestivals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<NameInput />} />
        <Route path="/" element={<App />}>
          <Route path="/filter" element={<FilterPage />} />
          <Route path="/filtered" element={<FilterResult />} />
          <Route path="/all-festivals" element={<AllFestivals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector("#root")
);
