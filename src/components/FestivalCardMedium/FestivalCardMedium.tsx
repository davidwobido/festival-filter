import Button from "../Buttons/Button";
import styles from "./FestivalCardMedium.module.css";
type FestivalCardMediumProps = {
  name: string;
  location: string;
  begin: string;
  end: string;
  price: number;
  allacts: string;
};

function FestivalCardMedium({
  name,
  location,
  begin,
  end,
  allacts,
  price,
}: FestivalCardMediumProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.match}>100%</span>
        <h4 className={styles.name}>{name}</h4>
        <div className={styles["location-wrapper"]}>
          <img src="../../../lib/Icon_Location.svg" />
          <span className={styles.location}>{location}</span>
        </div>
        <div className={styles["date-wrapper"]}>
          <img src="../../../lib/Icon_Date.svg" />
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
