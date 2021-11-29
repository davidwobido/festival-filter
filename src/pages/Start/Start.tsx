import React from "react";
import styles from "./Start.module.css";
import Button from "../../components/Buttons/Button";

function StartPage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.content}>
        <span className={styles.preline}>Welcome</span>
        <h1 className={styles.headline}>
          We filter the best festivals for you.
        </h1>
        <Button size="normal" text="Enter" />
      </section>
    </div>
  );
}

export default StartPage;
