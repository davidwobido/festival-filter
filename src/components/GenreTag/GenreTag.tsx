import styles from "./GenreTag.module.css";
import "../../globals.css";

type GenreTagProps = {
  text: string;
  selected: boolean;
  onClick?: () => void;
};

function GenreTag({ text, selected }: GenreTagProps): JSX.Element {
  return (
    <button className={selected ? styles.tag_selected : styles.tag_unselected}>
      {text}
    </button>
  );
}

export default GenreTag;
