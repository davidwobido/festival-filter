import Button from "../Buttons/Button";
import styles from "./FestivalCardLarge.module.css";

function FestivalCardLarge() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.header}>
          <h3 className={styles.title}>Festival</h3>
          <img src="../../../lib/Icon_Close.svg" className={styles.close} />
        </section>
        <section className={styles.list}>
          <div className={styles.column}>
            <span className={styles.item}>Location</span>
            <span className={styles.item}>Date</span>
            <span className={styles.item}>Visitors</span>
            <span className={styles.item}>Acts</span>
            <span className={styles.item}>Price</span>
            <a className={styles.url}>Official website</a>
          </div>
          <div className={styles.column}>
            <span className={styles.item}>Value</span>
            <span className={styles.item}>Value</span>
            <span className={styles.item}>Value</span>
            <span className={styles.item}>Value</span>
            <span className={styles.item}>Value</span>
          </div>
        </section>
        <section className={styles.acts}>
          <h4>Acts</h4>
          <p>All the acts</p>
        </section>
        <div className={styles.button}>
          <Button size="small" text="Back to top" />
        </div>
      </div>
    </div>
  );
}
export default FestivalCardLarge;
