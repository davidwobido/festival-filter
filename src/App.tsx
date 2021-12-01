import "./globals.css";
import styles from "./App.module.css";
import { Outlet } from "react-router";
import NavBar from "./components/NavBar/NavBar";
// import Loading from "./pages/Loading/Loading";

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
