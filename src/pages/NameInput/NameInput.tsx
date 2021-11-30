import React from "react";
import AddUser from "../../components/AddUser/AddUserForm";
import styles from "./NameInput.module.css";

function NameInput() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <span className={styles.preline}>Who are you?</span>
          <h2>Please tell us your name:</h2>
          <AddUser />
        </div>
        <footer className={styles.footer}>
          <a className={styles.skip}>Show all festivals</a>
        </footer>
      </div>
    </>
  );
}
export default NameInput;
