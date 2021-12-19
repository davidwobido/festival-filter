import styles from "./NavBar.module.css";
import Logo from "../../../lib/FF_Logo_small.svg";
import Back from "../../../lib/Icon_Back.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("ActiveUser");

  function handleClick() {
    setMenu(!menu);
  }

  function handleLogOutClick() {
    localStorage.setItem("ActiveUser", "");
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles.navbarbackground}></div>
      <div className={` ${menu ? styles.surface : ""} `} />
      <Link to="/filter" className={styles.back} onClick={() => navigate(-1)}>
        <img className={styles.backicon} src={Back} /> Back
      </Link>

      <img
        src={Logo}
        className={styles.logo}
        onClick={() => navigate("/filter")}
      />

      <ul className={`${styles.navlinks} ${menu ? "" : styles.open} `}>
        <li>
          <Link
            to="/filter"
            className={styles.link}
            onClick={() => handleClick()}
          >
            Filter
          </Link>
        </li>
        <li>
          <Link
            to="/filtered"
            className={styles.link}
            onClick={() => handleClick()}
          >
            Filter Result
          </Link>
        </li>
        <li>
          <Link
            to="/all-festivals"
            className={styles.link}
            onClick={() => handleClick()}
          >
            All Festivals
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className={`${styles.link} ${styles.user}`}
            onClick={() => handleLogOutClick()}
          >
            Logout {loggedInUser}
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
