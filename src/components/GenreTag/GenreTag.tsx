import styles from "./GenreTag.module.css";
import "../../globals.css";
import { useState } from "react";

type GenreTagProps = {
  text: string;
};

function GenreTag({ text }: GenreTagProps): JSX.Element {
  const [active, setActive] = useState<boolean>(false);

  function handleClick() {
    active ? setActive(false) : setActive(true);
  }

  return (
    <button className={styles.tag} onClick={handleClick}>
      {text}
    </button>
  );
}

export default GenreTag;
