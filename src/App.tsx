import "./globals.css";
import styles from "./App.module.css";
import { Outlet } from "react-router";
import StartPage from "./pages/Start/Start";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.navbar}>Navbar Placeholder</div>
      <StartPage />
      <Outlet />
      <p> hi</p>
    </div>
  );
}

export default App;
