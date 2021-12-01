// import { useEffect, useState } from "react";
import "./globals.css";
import styles from "./App.module.css";
import { Outlet } from "react-router";

function App() {
  // useEffect(() => {
  //   async function doFetch() {
  //     const response = await fetch("/api/hello");
  //     const result = await response.json();
  //     setMessage(result.message);
  //   }
  //   doFetch();
  // }, []);

  return (
    <div className={styles.app}>
      <div className={styles.navbar}>Navbar Placeholder</div>
      <Outlet />
    </div>
  );
}

export default App;
