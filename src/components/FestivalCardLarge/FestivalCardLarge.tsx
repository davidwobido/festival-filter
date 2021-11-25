import Button from "../Buttons/Button";
import styles from "./FestivalCardLarge.module.css";

function FestivalCardLarge() {
  return (
    <div className={styles.wrapper}>
      <h3>Melt!</h3>
      <section className={styles.list}>
        <div className={styles.row}>
          <span>Location</span>
          <span>Value</span>
        </div>
        <div className={styles.row}>
          <span>Date</span>
          <span>Value</span>
        </div>
        <div className={styles.row}>
          <span>Visitors</span>
          <span>Value</span>
        </div>
        <div className={styles.row}>
          <span>Acts</span>
          <span>Value</span>
        </div>
        <div className={styles.row}>
          <span>Price</span>
          <span>Value</span>
        </div>
        <div className={styles.row}>
          <span>URL</span>
        </div>
      </section>
      <h4>Acts</h4>
      <p>Alle the acts</p>
      <Button size="small" text="Back to top" />
    </div>
  );
}
export default FestivalCardLarge;
