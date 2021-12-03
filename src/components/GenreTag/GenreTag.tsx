import styles from "./GenreTag.module.css";
import "../../globals.css";
import { useState } from "react";

type GenreTagProps = {
  text: string;
};

function GenreTag({ text }: GenreTagProps): JSX.Element {
  const [selected, setActive] = useState<boolean>(false);

  function handleClick() {
    selected ? setActive(false) : setActive(true);
  }

  return (
    <button
      className={selected ? styles.tag_selected : styles.tag_unselected}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default GenreTag;
