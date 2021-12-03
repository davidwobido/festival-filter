import "./globals.css";
import styles from "./App.module.css";
import { Outlet } from "react-router";
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
