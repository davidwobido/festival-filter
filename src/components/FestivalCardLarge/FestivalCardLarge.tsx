import styles from "./FestivalCardLarge.module.css";
import CloseIcon from "../../../lib/Icon_Close.svg";

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
  close?: () => void;
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
  close,
}: FestivalCardLargeProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.header}>
          <h3 className={styles.title}>{name}</h3>
          <img
            src={CloseIcon}
            alt="Close"
            className={styles.close}
            onClick={close}
          />
        </section>

        <section className={styles.list}>
          <div className={styles.column}>
            <span className={styles.item}>Location</span>
            <span className={styles.item}>Date</span>
            <span className={styles.item}>Visitors</span>
            <span className={styles.item}>Acts</span>
            <span className={styles.item}>Price</span>
            <a href={website} className={styles.url}>
              Website
            </a>
          </div>
          <div className={styles.column}>
            <span className={styles.item}>{location}</span>
            <span className={styles.item}>
              {begin} — {end}
            </span>
            <span className={styles.item}>{visitors}</span>
            <span className={styles.item}>{price} €</span>
            <span className={styles.item}>{acts}</span>
          </div>
        </section>
        <section className={styles.acts}>
          <h4>Acts</h4>
          <p>{allacts}</p>
        </section>
      </div>
    </div>
  );
}
export default FestivalCardLarge;
