import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./NameInput.module.css";

function NameInput() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.preline}>Who are you?</span>
      <h2>Please tell us your name:</h2>
      <SearchBar onSearch={console.log} />
      <a className="skip">Show all festivals</a>
    </div>
  );
}
export default NameInput;
