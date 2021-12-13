import styles from "./FilterPage.module.css";
import GenreTag from "../../components/GenreTag/GenreTag";
import { useEffect, useState } from "react";
// import FestivalCardMedium from "../../components/FestivalCardMedium/FestivalCardMedium";

type FestivalPlaceholderTypes = {
  id: string;
  name: string;
  location: string;
  begin: string;
  end: string;
  visitors: number;
  acts: number;
  price: number;
  allacts: string;
  electronic?: number;
  metal?: number;
  reggae?: number;
  pop?: number;
  classic?: number;
  jazz?: number;
  punk?: number;
  indie?: number;
  rock?: number;
  hiphop?: number;
};

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
      let festivalCounter: number;
      let genreValue: number;
      let result: number[] = [];

      //fetch of prefiltered festivals
      const response = await fetch(`/api/festivals/${searchQuery}`);
      const body = await response.json();
      setPrefilteredFestivals(body);
      console.log(prefilteredFestivals);

      // Extract genres to String Array
      const selectedGenres = tags.filter((tag) => tag.selected === true);
      const mappedGenres = selectedGenres.map((genre) => genre.text);

      // Loop through festivals
      for (
        festivalCounter = 0;
        festivalCounter <= prefilteredFestivals.length;
        festivalCounter++
      ) {
        const festivalPlaceholder: FestivalPlaceholderTypes =
          prefilteredFestivals[festivalCounter];
        console.log(festivalPlaceholder);
        // Loop through genres to extract each genre value
        for (
          genreCounter = 0;
          genreCounter <= mappedGenres.length;
          genreCounter++
        ) {
          const genrePlaceholder: string = mappedGenres[genreCounter];
          genreValue = festivalPlaceholder[genrePlaceholder];

          if (genreCounter < mappedGenres.length) {
            result.push(genreValue);
            console.log("01_result", genreValue, result);
          }
          if (genreCounter === mappedGenres.length) {
            const total = result.reduce(function (a, b) {
              return a + b;
            });
            result = [0];
            // Save result to local storage
            console.log(festivalPlaceholder.name, total);
            // localStorage.setItem(`${festivalPlaceholder.name}`, total);
            // localStorage.getItem(Immergut);
          }
        }
      }
    }
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
