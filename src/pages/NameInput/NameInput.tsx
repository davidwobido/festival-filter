import React from "react";
import AddUser from "../../components/AddUser/AddUserForm";
import styles from "./NameInput.module.css";

function NameInput() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.preline}>Who are you?</span>
      <h2>Please tell us your name:</h2>
      <AddUser />
      <a className="skip">Show all festivals</a>
    </div>
  );
}
export default NameInput;
