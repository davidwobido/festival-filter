import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.wrapper}>
      <a>Back</a>
      <img className={styles.logo} src="../../../lib/FF_Logo_small.svg" />
      <p>Placeholder</p>
    </div>
  );
}

export default NavBar;
