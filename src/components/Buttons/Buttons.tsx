import styles from "./Buttons.module.css";
import "../../globals.css";

function Buttons() {
  return (
    <div className={styles.wrapper}>
      <button className={styles["button-default"]}>Enter</button>
    </div>
  );
}
export default Buttons;
