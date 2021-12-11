import Button from "../Buttons/Button";
import styles from "./FestivalCardLarge.module.css";

export type FestivalCardLargeProps = {
  name: string;
  location: string;
  begin: string;
  end: string;
  visitors: number;
  acts: number;
  price: number;
  allacts: string;
  website: string;
};

function FestivalCardLarge({
  name,
  location,
  begin,
  end,
  visitors,
  acts,
  price,
  allacts,
  website,
}: FestivalCardLargeProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.header}>
          <h3 className={styles.title}>{name}</h3>
          <img src="../../../lib/Icon_Close.svg" className={styles.close} />
        </section>

        <section className={styles.list}>
          <div className={styles.column}>
            <span className={styles.item}>Location</span>
            <span className={styles.item}>Date</span>
            <span className={styles.item}>Visitors</span>
            <span className={styles.item}>Acts</span>
            <span className={styles.item}>Price</span>
            <a href={website} className={styles.url}>
              Official Website
            </a>
          </div>
          <div className={styles.column}>
            <span className={styles.item}>{location}</span>
            <span className={styles.item}>
              {begin} — {end}
            </span>
            <span className={styles.item}>{visitors}</span>
            <span className={styles.item}>{price}</span>
            <span className={styles.item}>{acts}</span>
          </div>
        </section>
        <section className={styles.acts}>
          <h4>Acts</h4>
          <p>{allacts}</p>
        </section>
        <div className={styles.button}>
          <Button size="small" text="Back to top" />
        </div>
      </div>
    </div>
  );
}
export default FestivalCardLarge;
