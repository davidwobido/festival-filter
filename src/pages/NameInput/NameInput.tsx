import React from "react";
import AddUser from "../../components/AddUser/AddUserForm";
import styles from "./NameInput.module.css";
import LogoLarge from "../../../lib/FF_Logo_large.svg";

function NameInput() {
  return (
    <div className={styles.wrapper}>
      <img src={LogoLarge} className={styles.logo} />

      <div className={styles.content}>
        <span className={styles.preline}>Who are you?</span>
        <h2>Please tell us your name:</h2>
        <AddUser navigateTo="/filter" />
      </div>
    </div>
  );
}
export default NameInput;
