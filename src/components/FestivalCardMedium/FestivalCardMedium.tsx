import Button from "../Buttons/Button";
import styles from "./FestivalCardMedium.module.css";
import LocationIcon from "../../../lib/Icon_Location.svg";
import DateIcon from "../../../lib/Icon_Date.svg";

export type FestivalCardMediumProps = {
  name: string;
  location: string;
  begin: string;
  end: string;
  price: number;
  allacts: string;
  value?: number;
  color: "green" | "orange";
};

function FestivalCardMedium({
  name,
  location,
  begin,
  end,
  allacts,
  price,
  value,
  color,
}: FestivalCardMediumProps) {
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
          <Button size="small" text="More" />
        </div>
      </div>
    </div>
  );
}

export default FestivalCardMedium;
