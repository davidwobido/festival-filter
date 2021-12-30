import { useState } from "react";
import { useEffect } from "react";
import styles from "./FestivalCardSmall.module.css";
import LocationIcon from "../../../lib/Icon_Location.svg";
import DateIcon from "../../../lib/Icon_Date.svg";
import { FestivalCardSmallProps } from "../../../types";

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
    <div className={styles.wrapper}>
      <h5>{name}</h5>
      <div className={styles["location-wrapper"]}>
        <img src={LocationIcon} alt="Location" />
        <span className={styles.location}> {location}</span>
      </div>
      <div className={styles["date-wrapper"]}>
        <img src={DateIcon} alt="Date" />
        <span className={styles.date}>
          {begin} {end}
        </span>
      </div>
      <a onClick={() => setQuery(name)} className={styles.more}>
        More
      </a>
    </div>
  );
}

export default FestivalCardSmall;
