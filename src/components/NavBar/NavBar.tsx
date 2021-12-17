import styles from "./NavBar.module.css";
import Logo from "../../../lib/FF_Logo_small.svg";
import Back from "../../../lib/Icon_Back.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setMenu(!menu);
  }
  function handleLogoClick() {
    navigate("/filter");
  }
  function handleBackClick() {
    navigate("/navigate(-1)");
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles.navbarbackground}></div>
      <div className={` ${menu ? styles.surface : ""} `} />
      <Link to="/filter" className={styles.back}>
        <img
          className={styles.backicon}
          src={Back}
          onClick={() => handleBackClick}
        />{" "}
        Back
      </Link>

      <img
        src={Logo}
        className={styles.logo}
        onClick={() => handleLogoClick()}
      />

      <ul
        className={`${styles.navlinks} ${menu ? "" : styles.open} `}
        onClick={() => handleClick()}
      >
        <li>
          <Link to="/filter" className={styles.link}>
            Filter
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
          <Link to="/" className={styles.link} onClick={() => handleClick()}>
            About
          </Link>
        </li>
        <li>
          <Link to="/login" className={`${styles.link} ${styles.user}`}>
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
