import styles from "./NavBar.module.css";
import Logo from "../../../lib/FF_Logo_small.svg";
import Back from "../../../lib/Icon_Back.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [menu, setMenu] = useState(false);

  function handleClick() {
    setMenu(!menu);
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles.navbarbackground}></div>
      <div className={` ${menu ? styles.surface : ""} `} />
      <Link to="/filter" className={styles.back}>
        <img className={styles.backicon} src={Back} /> Back
      </Link>
      <img src={Logo} className={styles.logo} />
      <ul
        className={`${styles.navlinks} ${menu ? "" : styles.open} `}
        onClick={() => handleClick()}
      >
        <li>
          <Link className={styles.link} to="/filter">
            Filter
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            to="/all-festivals"
            onClick={() => handleClick()}
          >
            All Festivals
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/" onClick={() => handleClick()}>
            About
          </Link>
        </li>
        <li>
          <Link className={`${styles.link} ${styles.user}`} to="/login">
            Change User
          </Link>
        </li>
      </ul>
      <div className={styles.burger} onClick={() => handleClick()}>
        <div className={`${menu ? styles.lineone : ""} `}></div>
        <div className={`${menu ? styles.linetwo : ""} `}></div>
        <div className={`${menu ? styles.linethree : ""} `}></div>
      </div>
    </nav>
  );
}

export default NavBar;

// <div className={styles.wrapper}>
//   <a>Back</a>
//   <p>Placeholder</p>
// </div>>
