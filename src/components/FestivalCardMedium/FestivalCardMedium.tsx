import Button from "../Buttons/Button";
import styles from "./FestivalCardMedium.module.css";
import LocationIcon from "../../../lib/Icon_Location.svg";
import DateIcon from "../../../lib/Icon_Date.svg";
import { useEffect, useState } from "react";
import { FestivalCardMediumProps } from "../../../types";

function FestivalCardMedium({
  name,
  location,
  begin,
  end,
  allacts,
  price,
  value,
  color,
  toSearch,
}: FestivalCardMediumProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    toSearch(query);
  }, [query]);

  return (
    <div className={styles.container}>
      <div className={styles[color]}>
        <span className={styles.match}>{value}%</span>
        <h4 className={styles.name}>{name}</h4>
        <div className={styles["location-wrapper"]}>
          <img src={LocationIcon} alt="Location" />
          <span className={styles.location}>{location}</span>
        </div>
        <div className={styles["date-wrapper"]}>
          <img src={DateIcon} alt="Date" />
          <span className={styles.date}>
            {begin}—{end}
          </span>
        </div>
        <span className={styles.artists}>{allacts}</span>
        <span className={styles.price}>{price} €</span>
        <div className={styles.button}>
          <Button onClick={() => setQuery(name)} size="small" text="More" />
        </div>
      </div>
    </div>
  );
}

export default FestivalCardMedium;
