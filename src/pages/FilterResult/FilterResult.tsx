import { useEffect, useState } from "react";
import styles from "./FilterResult.module.css";
import FestivalCardMedium from "../../components/FestivalCardMedium/FestivalCardMedium";

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

function festivalFilter() {
  const [prefilteredFestivals, setPrefilteredFestivals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenresState, setSelectedGenresState] = useState<string[]>([]);

  function test() {
    const selectedGenresString = localStorage.getItem("SelectedGenres");
    const selectedGenres = selectedGenresString?.split(",");
    setSelectedGenresState(selectedGenres);

    // Get selected genre tags and set them as search Query
    //selectedGenres (3)['hiphop', 'electronic', 'reggae'] OBJEKT
    const selectedGenresList = selectedGenres?.join("+");
    console.log(
      "To search:",
      selectedGenresList,
      "typeof",
      typeof selectedGenresList
    );
    if (selectedGenresList) {
      setSearchQuery(selectedGenresList);
    }
    console.log("searchQuery", searchQuery);
  }
  useEffect(() => {
    async function filterFunction(): Promise<void> {
      let genreCounter: number;
      let festivalCounter: number;
      let genreValue: number;
      let result: number[] = [];

      //fetch prefiltered festivals
      const response = await fetch(`/api/festivals/${searchQuery}`);
      const body = await response.json();
      setPrefilteredFestivals(body);

      console.log("prefilteredFestivals", prefilteredFestivals);

      if (selectedGenresState) {
        const mappedGenres = selectedGenresState;
        console.log(typeof mappedGenres);

        // Loop through festivals
        for (
          festivalCounter = 0;
          festivalCounter <= prefilteredFestivals.length;
          festivalCounter++
        ) {
          const festivalPlaceholder: FestivalPlaceholderTypes =
            prefilteredFestivals[festivalCounter];

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
              let total = result.reduce(function (a, b) {
                return a + b;
              });
              result = [0];
              if (total > 100) {
                total = 100;
              }
              console.log(festivalPlaceholder.name, total);
            }
          }
        }
      }
    }
    filterFunction();
  }, [searchQuery]);

  return (
    <div className={styles.wrapper}>
      <section className={styles.text}>
        <h1>Filtered!</h1>
        <span className={styles.intro}>
          Here are your festival suggestions sorted by matching your choice.{" "}
        </span>
      </section>
      <button onClick={() => test()}>DO</button>
      {prefilteredFestivals?.map((festival) => (
        // eslint-disable-next-line react/jsx-key
        <FestivalCardMedium
          name={festival.name}
          location={festival.location}
          begin={festival.begin}
          end={festival.end}
          price={festival.price}
          allacts={festival.allacts}
        />
      ))}
    </div>
  );
}
export default festivalFilter;
