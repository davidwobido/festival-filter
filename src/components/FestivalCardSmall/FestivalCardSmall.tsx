import styles from "./FestivalCardSmall.module.css";

export type FestivalCardSmallProps = {
  name: string;
  location: string;
  begin: string;
  end: string;
};

function FestivalCardSmall({
  name,
  location,
  begin,
  end,
}: FestivalCardSmallProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h5>{name}</h5>
        <div className={styles["location-wrapper"]}>
          <img src="../../../lib/Icon_Location.svg" />
          <span className={styles.location}> {location}</span>
        </div>
        <div className={styles["date-wrapper"]}>
          <img src="../../../lib/Icon_Date.svg" />
          <span className={styles.date}>
            {begin} {end}
          </span>
        </div>
        <a>More</a>
      </div>
    </div>
  );
}

export default FestivalCardSmall;
