import "./globals.css";
import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
// import "./globals.css";
// import styles from "./App.module.css";
// import { Route, Routes } from "react-router-dom";
// import StartPage from "./pages/Start/Start";
// import NameInput from "./pages/NameInput/NameInput";
// import FilterPage from "./pages/Filter/FilterPage";
// import FilterResult from "./pages/FilterResult/FilterResult";
// import AllFestivals from "./pages/AllFestivals/AllFestivals";

// function App() {
//   return (
//     <div className={styles.app}>
//       <Routes>
//         <Route path="/" element={<StartPage />} />
//         <Route path="/login" element={<NameInput />} />
//         <Route path="/filter" element={<FilterPage />} />
//         <Route path="/filtered" element={<FilterResult />} />
//         <Route path="/all-festivals" element={<AllFestivals />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
