import styles from "./GenreTag.module.css";
import "../../globals.css";

type GenreTagProps = {
  tag: {
    text: string;
    selected: boolean;
    id: number;
  };
  onClick: (value: number) => void;
};

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
