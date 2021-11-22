import { useEffect, useState } from "react";

import "./globals.css";
import styles from "./App.module.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function doFetch() {
      const response = await fetch("/api/hello");
      const result = await response.json();
      setMessage(result.message);
    }
    doFetch();
  }, []);

  return (
    <div className={styles.app}>
      <header className={styles["app-header"]}>
        <p className={styles.text}>Welcome to your new project 💥 {message}</p>
      </header>
    </div>
  );
}

export default App;
