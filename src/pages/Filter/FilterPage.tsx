import styles from "./FilterPage.module.css";
import GenreTag from "../../components/GenreTag/GenreTag";
import { useEffect, useState } from "react";

// Genre tags
const initialTags = [
  { text: "pop", selected: false, id: 0 },
  { text: "hiphop", selected: false, id: 1 },
  { text: "rock", selected: false, id: 2 },
  { text: "indie", selected: false, id: 3 },
  { text: "punk", selected: false, id: 4 },
  { text: "metal", selected: false, id: 5 },
  { text: "electronic", selected: false, id: 6 },
  { text: "reggae", selected: false, id: 7 },
  { text: "jazz", selected: false, id: 8 },
  { text: "classic", selected: false, id: 9 },
];

function SelectGenre() {
  const [tags, setTags] = useState(initialTags);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  // Select Tag
  function onTagClicked(id: number): void {
    const newTags = [...tags];
    const tag = newTags.find((tag) => tag.id === id);
    if (tag) {
      tag.selected = !tag.selected;
    }
    setTags(newTags);
  }

  // Get tags and map them to an string[]
  function getSelectedGenre(): void {
    const selectedGenresLocal: string[] = tags
      .filter((tag) => tag.selected === true)
      .map((genre) => genre.text);
    setSelectedGenres(selectedGenresLocal);
  }

  useEffect(() => {
    localStorage.setItem("SelectedGenres", selectedGenres.toString());
  }, [selectedGenres]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span className={"text-preline"}>
          Hi {localStorage.getItem("ActiveUser")}
        </span>
        <h2>Choose your favorite genres:</h2>
        <section className={styles.tags}>
          {tags.map((tag) => (
            <GenreTag tag={tag} key={tag.id} onClick={onTagClicked} />
          ))}
        </section>
      </div>
      <button
        className={styles.filterbutton}
        onClick={() => getSelectedGenre()}
      >
        Filter
      </button>
    </div>
  );
}
export default SelectGenre;
