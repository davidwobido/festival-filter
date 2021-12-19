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
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("ActiveUser", user);
  }, [user]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigate(navigateTo);
  }

  return (
    <div>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setUser(event.target.value)}
          className={styles.input}
        ></input>
        {!user ? (
          <></>
        ) : (
          <button type="submit" className={styles.button}></button>
        )}
      </form>
    </div>
  );
}
export default AddUser;
