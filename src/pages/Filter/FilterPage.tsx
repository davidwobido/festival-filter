import styles from "./FilterPage.module.css";
import GenreTag from "../../components/GenreTag/GenreTag";
import Button from "../../components/Buttons/Button";
import { useState } from "react";

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

function SelectGenre(): JSX.Element {
  const [tags, setTags] = useState(initialTags);
  const [prefilteredFestivals, setPrefilteredFestivals] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");

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
  function getSelectedGenre(): void {
    const selectedGenres = tags
      .filter((tag) => tag.selected === true)
      .map((genre) => genre.text);
    const selectedGenresList = selectedGenres.join("+");
    console.log(`To search : ${selectedGenresList}`);
    setsearchQuery(selectedGenresList);
  }

  // Fetch prefiltered festivals
  async function getPrefilteredFestivals(): Promise<void> {
    const response = await fetch(`/api/festivals/${searchQuery}`);
    console.log(searchQuery);
    const body = await response.json();
    setPrefilteredFestivals(body);
    console.log(prefilteredFestivals);
  }

  // Match and filter festivals
  function filterFestival(): void {
    const selectedGenres = tags.filter((tag) => tag.selected === true);
    console.log("selectedGenres", selectedGenres);
    const mapGenres = selectedGenres.map((genre) => genre.text);
    console.log("mapGenres", mapGenres[0]);
    const matchSummands: number[] = [];
    let match: number;

    const counterFestivals = 0;
    let counterGenre;
    for (counterGenre = 0; counterGenre < mapGenres.length; counterGenre++) {
      console.log("ITERATION START");
      const searchedGenre = mapGenres[counterGenre];
      const result: number[] = [
        prefilteredFestivals[counterFestivals][searchedGenre],
      ];
      console.log(
        "FESTIVAL:",
        prefilteredFestivals[counterFestivals]["name"],
        "GENRE:",
        searchedGenre,
        "RESULT:",
        result
      );
      if (counterGenre < mapGenres.length) {
        matchSummands.push(...result);
      }
    }
    if (counterGenre === mapGenres.length) {
      console.log("matchSummands:", matchSummands);
      const reducer: any = (previousValue: number, currentValue: number) =>
        previousValue + currentValue;
      match = matchSummands.reduce(reducer);
      console.log("Festivalmatch:", match);
      if (match < 50) {
        console.log("will not be displayed");
      }
      if (match < 50 && match <= 70) {
        console.log("FestivalCardMedium yellow");
      }
      if (match > 70) {
        console.log("FestivalCardMedium green");
      }
      if (match > 100) {
        console.log("FestivalCardMedium yellow, display match as 100");
      }
    }
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

      <Button size="normal" text="filter" />
      <button type="submit" onClick={getSelectedGenre}>
        getSelectedGenre
      </button>
      <button type="submit" onClick={getPrefilteredFestivals}>
        getPrefilteredFestivals
      </button>
      <h2 onClick={filterFestival}>final filter</h2>
    </div>
  );
}
export default SelectGenre;
