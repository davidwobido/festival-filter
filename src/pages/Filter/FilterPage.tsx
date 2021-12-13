import styles from "./FilterPage.module.css";
import GenreTag from "../../components/GenreTag/GenreTag";
import { useEffect, useState } from "react";
// import FestivalCardMedium from "../../components/FestivalCardMedium/FestivalCardMedium";

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
  const [prefilteredFestivals, setPrefilteredFestivals] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");
  // const [stateResult, setStateResult] = useState(0);
  // const [finalResult, setfinalResult] = useState();

  // Select Tag
  function onTagClicked(id: number): void {
    const newTags = [...tags];
    const tag = newTags.find((tag) => tag.id === id);
    if (tag) {
      tag.selected = !tag.selected;
    }
    setTags(newTags);
  }

  // Get selected genre tags and set them as search Query
  function getSelectedGenre(): void {
    const selectedGenres = tags
      .filter((tag) => tag.selected === true)
      .map((genre) => genre.text);

    const selectedGenresList = selectedGenres.join("+");
    console.log(`To search : ${selectedGenresList}`);
    setsearchQuery(selectedGenresList);
  }

  useEffect(() => {
    async function festivalFilter(): Promise<void> {
      let genreCounter: number;
      let genreValue: number;
      const result = [];

      //fetch of prefiltered festivals
      const response = await fetch(`/api/festivals/${searchQuery}`);
      const body = await response.json();
      setPrefilteredFestivals(body);
      console.log(prefilteredFestivals);

      // Extract genres to String Array
      const selectedGenres = tags.filter((tag) => tag.selected === true);
      const mappedGenres = selectedGenres.map((genre) => genre.text);

      // example first festival (Will loop through all later on)
      const festivalPlaceholder = prefilteredFestivals[1];

      // Loop through genres to extract each genre value
      for (
        genreCounter = 0;
        genreCounter <= mappedGenres.length;
        genreCounter++
      ) {
        const genrePlaceholder = mappedGenres[genreCounter];
        genreValue = festivalPlaceholder[genrePlaceholder];

        if (genreCounter < mappedGenres.length) {
          // Add numbers to an array
          result.push(genreValue);
          console.log("result", result);

          // Sum the numbers from the Array
          // result += arr[i];

          // result.splice(genreValue);
          // await setStateResult(genreValue + stateResult);
          // console.log(stateResult);
          // Festival: result
          console.log(
            festivalPlaceholder.name,
            ":",
            genrePlaceholder,
            ":",
            genreValue
          );
        }
        if (genreCounter === mappedGenres.length) {
          const total = result.reduce(function (a, b) {
            return a + b;
          });
          console.log(festivalPlaceholder.name, total);
          localStorage.setItem(`${festivalPlaceholder}`, total);
        }
      }
    } // when looped through all festival:
    festivalFilter();
  }, [searchQuery]);

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
      <button type="submit" onClick={getSelectedGenre}>
        filter
      </button>
      {/* Show <FestivalCardMedium /> when festivalFilter is done */}
    </div>
  );
}
export default SelectGenre;
