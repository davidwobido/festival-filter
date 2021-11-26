import Button from "../Buttons/Button";
import styles from "./FestivalCardMedium.module.css";

function FestivalCardMedium() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.match}>100%</span>
        <h4 className={styles.name}>Festival</h4>
        <div className={styles["location-wrapper"]}>
          <img src="../../../lib/Icon_Location.svg" />
          <span className={styles.location}> Location</span>
        </div>
        <div className={styles["date-wrapper"]}>
          <img src="../../../lib/Icon_Date.svg" />
          <span className={styles.date}> Date</span>
        </div>
        <span className={styles.artists}>
          Artist 1, Artist 2, Artist 3, Artist 4, Artist 5, Artist 6, Artist 7,
          Artist 8, Artist 9, Artist 10
        </span>
        <span className={styles.price}>€€</span>
        <div className={styles.button}>
          <Button size="small" text="More" />
        </div>
      </div>
    </div>
  );
}

export default FestivalCardMedium;
