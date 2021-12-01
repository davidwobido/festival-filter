import React from "react";
import styles from "./Start.module.css";
import Button from "../../components/Buttons/Button";
import { Link } from "react-router-dom";

function StartPage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.content}>
        <span className={styles.preline}>Welcome</span>
        <h1 className={styles.headline}>
          We filter the best festivals for you.
        </h1>
        <Link to="/NameInput">
          <Button size="normal" text="Enter" />
        </Link>
      </section>
    </div>
  );
}

export default StartPage;
