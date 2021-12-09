import styles from "./FilterPage.module.css";
import GenreTag from "../../components/GenreTag/GenreTag";
import Button from "../../components/Buttons/Button";
import { useState } from "react";

// Genre tags
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
  { text: "Classic", selected: false, id: 9 },
];

// let counter = 1;

function SelectGenre(): JSX.Element {
  const [tags, setTags] = useState(initialTags);
  const [prefilteredFestivals, setPrefilteredFestivals] = useState([]);

  // Select Tag
  function onTagClicked(id: number): void {
    const newTags = [...tags];
    const tag = newTags.find((tag) => tag.id === id);
    if (tag) {
      tag.selected = !tag.selected;
    }
    setTags(newTags);
  }

  // Get selected genre
  function FilterFunction(): void {
    const selectedGenres = tags
      .filter((tag) => tag.selected === true)
      .map((genre) => genre.text);
    const selectedGenresList = selectedGenres.join("+");
    console.log(`Hi List : ${selectedGenresList}`);
  }

  // Fetch prefiltered festivals
  async function getFilteredFestivals() {
    // const response = await fetch(`api/festivals/${selectedGenresList}`);
    const response = await fetch("api/festivals/metal+reggae");
    console.log("jhi");
    const body = await response.json();
    setPrefilteredFestivals(body);
    console.log(prefilteredFestivals);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span className={"text-preline"}>
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
        <a>Show all festivals</a>
      </footer>
      <Button size="normal" text="filter" />
      <button type="submit" onClick={FilterFunction}>
        FestivalFilter
      </button>
      <button type="submit" onClick={getFilteredFestivals}>
        Show filteredFestivals
      </button>
    </div>
  );
}
export default SelectGenre;

// const reducer: any = (previousValue: number, currentValue: number) =>
// previousValue + currentValue;
// const fitting = percentage.reduce(reducer);

// if (fitting > 100) {
// console.log("100%");
// } else {
// console.log(fitting);
