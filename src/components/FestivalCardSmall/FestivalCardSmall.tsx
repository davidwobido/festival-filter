import styles from "./FestivalCardSmall.module.css";

function FestivalCardSmall() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h5>Festival</h5>
        <span className={styles.genres}>Indie, House, Techno</span>
        <div className={styles["location-wrapper"]}>
          <img src="../../../lib/Icon_Location.svg" />
          <span className={styles.location}> Location</span>
        </div>
        <div className={styles["date-wrapper"]}>
          <img src="../../../lib/Icon_Date.svg" />
          <span className={styles.date}> Date</span>
        </div>
        <a>More</a>
      </div>
    </div>
  );
}

export default FestivalCardSmall;
