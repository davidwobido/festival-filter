import "./globals.css";
import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Div100vh from "react-div-100vh";

function App() {
  return (
    <Div100vh className={styles.app}>
      <NavBar />
      <Outlet />
    </Div100vh>
  );
}

export default App;
