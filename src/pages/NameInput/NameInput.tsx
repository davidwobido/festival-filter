import React, { useState } from "react";
import AddUser from "../../components/AddUser/AddUser";
import styles from "./NameInput.module.css";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div className={styles.wrapper}>
      <span className={styles.preline}>Who are you?</span>
      <h2>Please tell us your name:</h2>
      <AddUser />
      <h2>{name}</h2>
      <a className="skip">Show all festivals</a>
    </div>
  );
}
export default NameInput;
