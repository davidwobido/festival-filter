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

  // Get selected genre tags
  function getSelectedGenre(): void {
    const selectedGenres = tags
      .filter((tag) => tag.selected === true)
      .map((genre) => genre.text);
    const selectedGenresList = selectedGenres.join("+");
    console.log(`To search : ${selectedGenresList}`);
    setsearchQuery(selectedGenresList);
  }

  useEffect(() => {
    async function getPrefilteredFestivals(): Promise<void> {
      const response = await fetch(`/api/festivals/${searchQuery}`);
      const body = await response.json();
      setPrefilteredFestivals(body);

      // Match and filter prefiltered festivals
      async (): Promise<void> => {
        await getPrefilteredFestivals();
        const selectedGenres = tags.filter((tag) => tag.selected === true);
        const mapGenres = selectedGenres.map((genre) => genre.text);
        let counterFestivals: number;
        let counterGenre: number;
        const matchSummands: number[] = [];
        let match: number;
        // Iterate festivals
        for (
          counterFestivals = 0;
          counterFestivals < prefilteredFestivals.length;
          counterFestivals++
        ) {
          // Iterate each festival with selected genres
          for (
            counterGenre = 0;
            counterGenre < mapGenres.length;
            counterGenre++
          ) {
            const searchedGenre = mapGenres[counterGenre];
            const result: number[] = [
              prefilteredFestivals[counterFestivals][searchedGenre],
            ];
            if (counterGenre < mapGenres.length) {
              matchSummands.push(...result);
            }
          }

          if (counterGenre === mapGenres.length) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const reducer: any = (
              previousValue: number,
              currentValue: number
            ) => previousValue + currentValue;
            match = matchSummands.reduce(reducer);

            console.log(
              "Festivalmatch:",
              prefilteredFestivals[counterFestivals]["name"],
              match
            );
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
              console.log("FestivalCardMedium green, display match as 100");
            }
          }
        }
      };
    }
    getPrefilteredFestivals();
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
        getSelectedGenre
      </button>
    </div>
  );
}
export default SelectGenre;
