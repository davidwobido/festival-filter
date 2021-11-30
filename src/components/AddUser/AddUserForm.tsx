import { FormEvent, useEffect, useState } from "react";
import styles from "./AddUser.module.css";

function AddUser() {
  const [user, setUser] = useState(
    localStorage.getItem("LocalStorageValue") || ""
  );

  useEffect(() => {
    localStorage.setItem("LocalStorageValue", user);
  }, [user]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(user);
  }

  return (
    <div>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <input
          type="text"
          value={user}
          onChange={(event) => setUser(event.target.value)}
          className={styles.input}
        ></input>
        <button type="submit" className={styles.button}></button>
      </form>
    </div>
  );
}
export default AddUser;
