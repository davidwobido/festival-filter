import React from "react";
import ReactDOM from "react-dom";
import "./globals.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/Start/Start";
import NameInput from "./pages/NameInput/NameInput";
import FilterPage from "./pages/Filter/FilterPage";
import FilterResult from "./pages/FilterResult/FilterResult";
import AllFestivals from "./pages/AllFestivals/AllFestivals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<StartPage />} />
          <Route path="login" element={<NameInput />} />
          <Route path="filter" element={<FilterPage />} />
          <Route path="filtered" element={<FilterResult />} />
          <Route path="all-festivals" element={<AllFestivals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector("#root")
);
