import { FormEvent, useEffect, useState } from "react";
import styles from "./AddUser.module.css";

function AddUser() {
  const [user, setUser] = useState(
    localStorage.getItem("LocalStorageValue") || ""
  );
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("LocalStorageValue", user);
  }, [user]);

  // User is still displayed as logged in when refreshing the page
  useEffect(() => {
    user && setLoggedInUser(user);
  }, []);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoggedInUser(user);
    console.log(user);
  }

  function deleteUser() {
    setUser("");
    setLoggedInUser("");
  }

  return (
    <div>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setUser(event.target.value)}
          className={styles.input}
        ></input>
        <button type="submit" className={styles.button}></button>
      </form>
      {loggedInUser ? (
        <button className={styles["reset-active"]} onClick={deleteUser}>
          Delete {loggedInUser}
        </button>
      ) : (
        <button className={styles["reset-inactive"]}>No user logged in</button>
      )}
    </div>
  );
}
export default AddUser;
