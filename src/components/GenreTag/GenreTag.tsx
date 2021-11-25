import styles from "./GenreTag.module.css";
import "../../globals.css";

type GenreTagProps = {
  text: string;
};

function GenreTag({ text }: GenreTagProps): JSX.Element {
  return <button className={styles.tag}>{text}</button>;
}

export default GenreTag;
