import { useState } from "react";
import styles from "./AddUser.module.css";

function AddUser() {
  const [user, setUser] = useState("");

  function handleSubmit() {
    event.preventDefault();
    console.log(user);
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input
        type="text"
        value={user}
        onChange={(event) => setUser(event.target.value)}
        className={styles.input}
      ></input>
      <button type="submit" className={styles.button}></button>
    </form>
  );
}
export default AddUser;
