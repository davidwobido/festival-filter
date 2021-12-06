import styles from "./GenreTag.module.css";
import "../../globals.css";

type GenreTagProps = {
  tag: {
    text: string;
    selected: boolean;
    id: number;
  };
  handleClick: (value: number) => void;
};

function GenreTag({ tag, handleClick }: GenreTagProps): JSX.Element {
  return (
    <button
      className={tag.selected ? styles.tag_selected : styles.tag_unselected}
      onClick={() => handleClick(tag.id)}
    >
      {tag.text}
    </button>
  );
}

export default GenreTag;
