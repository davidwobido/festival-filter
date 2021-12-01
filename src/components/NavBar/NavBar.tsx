import styles from "./NavBar.module.css";
// import FF_Logo_small from "../../../lib/FF_Logo_small.svg";

function NavBar() {
  return (
    <div className={styles.wrapper}>
      <a>Back</a>
      <img className={styles.logo} src="../../../lib/FF_Logo_small.svg" />
      <div>Burger</div>
    </div>
  );
}

export default NavBar;
