import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddUser.module.css";

type NavigateToProps = {
  navigateTo: string;
};

function AddUser({ navigateTo }: NavigateToProps): JSX.Element {
  const [user, setUser] = useState(
    () => localStorage.getItem("ActiveUser") || ""
  );
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("ActiveUser", user);
  }, [user]);

  // User is still displayed as logged in when refreshing the page
  useEffect(() => {
    user && setLoggedInUser(user);
  }, []);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoggedInUser(user);
    navigate(navigateTo);
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
