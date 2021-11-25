import Button from "../Buttons/Button";
import styles from "./FestivalCardLarge.module.css";

function FestivalCardLarge() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3 className={styles.title}>Melt!</h3>
          <img src="../../../lib/Icon_Close.svg" className={styles.close} />
        </div>
        <section className={styles.list}>
          <div className={styles.column}>
            <span className={styles.item}>Location</span>
            <span className={styles.item}>Date</span>
            <span className={styles.item}>Visitors</span>
            <span className={styles.item}>Acts</span>
            <span className={styles.item}>Price</span>
            <span className={styles.url}>Link to official website</span>
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
          <p>Alle the acts</p>
        </section>
        <Button size="small" text="Back to top" />
      </div>
    </div>
  );
}
export default FestivalCardLarge;
