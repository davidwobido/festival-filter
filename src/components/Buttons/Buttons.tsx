import styles from "./Buttons.module.css";
import "../../globals.css";

function Buttons() {
  return (
    <div className={styles.wrapper}>
      <button className={styles["button-default"]}>Button</button>
      <button className={styles["button-wide"]}>Button</button>
      <button className={styles["button-small"]}>Button</button>
    </div>
  );
}
export default Buttons;
