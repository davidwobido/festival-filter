import { useState } from "react";
import { useEffect } from "react";
import styles from "./FestivalCardSmall.module.css";

export type FestivalCardSmallProps = {
  name: string;
  location: string;
  begin: string;
  end: string;
  toSearch: (value: string) => void;
};

function FestivalCardSmall({
  name,
  location,
  begin,
  end,
  toSearch,
}: FestivalCardSmallProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    toSearch(query);
  }, [query]);

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
        <a onClick={() => setQuery(name)} className={styles.more}>
          More
        </a>
      </div>
    </div>
  );
}

export default FestivalCardSmall;
