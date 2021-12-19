import React, { useEffect, useState } from "react";
import styles from "./Start.module.css";
import Button from "../../components/Buttons/Button";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import LogoLarge from "../../../lib/FF_Logo_large.svg";

function StartPage() {
  const [isReady, setIsReady] = useState(false);
  const loggedInUser = localStorage.getItem("ActiveUser");

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 2600);
  }, []);

  if (!isReady) {
    return <Loading />;
  }

  return (
    <div className={styles.wrapper}>
      <img src={LogoLarge} className={styles.logo} />
      <section className={styles.content}>
        <span className={styles.preline}>Select. Filter. Match. </span>
        <h1 className={styles.headline}>Find your favourite festivals </h1>
        <Link to={loggedInUser ? "/filter" : "/login"}>
          <Button size="normal" text="Enter" />
        </Link>
      </section>
    </div>
  );
}

export default StartPage;
