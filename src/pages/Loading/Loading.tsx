import styles from "./Loading.module.css";

function Loading() {
  return (
    <img
      className={styles.animation}
      src="../../utils.FF_Animation_loading.json"
      alt=""
    />
  );
}

export default Loading;
