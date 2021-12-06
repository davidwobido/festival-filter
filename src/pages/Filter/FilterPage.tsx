import styles from "./FilterPage.module.css";
import GenreTag from "../../components/GenreTag/GenreTag";
import Button from "../../components/Buttons/Button";
import { useState } from "react";

const initialTags = [
  { text: "Pop", selected: false, id: 0 },
  { text: "HipHop", selected: false, id: 1 },
  { text: "Rock", selected: false, id: 2 },
  { text: "Indie", selected: false, id: 3 },
  { text: "Punk", selected: false, id: 4 },
  { text: "Metal", selected: false, id: 5 },
  { text: "Electronic", selected: false, id: 6 },
  { text: "Reggae", selected: false, id: 7 },
  { text: "Jazz", selected: false, id: 8 },
  { text: "Classical", selected: false, id: 9 },
];

function SelectGenre(): JSX.Element {
  const [tags, setTags] = useState(initialTags);

  function onTagClicked(id: number): void {
    const newTags = [...tags];
    const tag = newTags.find((tag) => tag.id === id);
    if (tag) {
      tag.selected = !tag.selected;
    }
    setTags(newTags);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.preline}>
          Hi {localStorage.getItem("ActiveUser")}
        </span>
        <h2>Choose your favorite genres:</h2>
        <section className={styles.tags}>
          {tags.map((tag) => (
            <GenreTag
              // text={tag.text} selected={tag.selected} instead of tag={tag} does not work
              tag={tag}
              key={tag.id}
              onClick={onTagClicked}
            />
          ))}
        </section>
      </div>
      <footer className={styles.footer}>
        <a className={styles.skip}>Show all festivals</a>
      </footer>
      <Button size="normal" text="filter" />
    </div>
  );
}
export default SelectGenre;
