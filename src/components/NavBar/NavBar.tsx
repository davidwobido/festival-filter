import styles from "./NavBar.module.css";
import Logo from "../../../lib/FF_Logo_small.svg";

function NavBar() {
  return (
    <div className={styles.wrapper}>
      <a>Back</a>
      <img className={styles.logo} src={Logo} alt="Logo" />
      <p>Placeholder</p>
    </div>
  );
}

export default NavBar;
