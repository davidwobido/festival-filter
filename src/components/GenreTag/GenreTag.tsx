import styles from "./GenreTag.module.css";
import "../../globals.css";
import { GenreTagProps } from "../../../types";

function GenreTag({ tag, onClick }: GenreTagProps): JSX.Element {
  return (
    <button
      className={`${styles.tag} ${
        tag.selected
          ? styles["tag--state-selected"]
          : styles["tag--state-unselected"]
      }`}
      onClick={() => onClick(tag.id)}
    >
      {tag.text}
    </button>
  );
}

export default GenreTag;
