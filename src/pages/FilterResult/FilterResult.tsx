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
  const [done, setDone] = useState<boolean>(false);
  const [bestFitFestivals, setBestFitFestivals] = useState([]);
  const [mediumFitFestivals, setMediumFitFestivals] = useState([]);
  let total;

  function getGenres() {
    const selectedGenresString = localStorage.getItem("SelectedGenres");
    const selectedGenres = selectedGenresString?.split(",");
    setSelectedGenresState(selectedGenres);

    // Get selected genre tags and set them as search Query
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
            // console.log("01_result", genreValue, result);
          }
          if (genreCounter === mappedGenres.length) {
            total = result.reduce(function (a, b) {
              return a + b;
            });
            result = [0];

            if (total >= 50 && total < 70) {
              console.log("festival placeholder:", festivalPlaceholder);
              setMediumFitFestivals(
                <FestivalCardMedium
                  name={festivalPlaceholder.name}
                  location={festivalPlaceholder.location}
                  begin={festivalPlaceholder.begin}
                  end={festivalPlaceholder.end}
                  price={festivalPlaceholder.price}
                  allacts={festivalPlaceholder.allacts}
                />
              );
            }
            if (total >= 70) {
              console.log("festival placeholder:", festivalPlaceholder);
              setBestFitFestivals(
                <FestivalCardMedium
                  name={festivalPlaceholder.name}
                  location={festivalPlaceholder.location}
                  begin={festivalPlaceholder.begin}
                  end={festivalPlaceholder.end}
                  price={festivalPlaceholder.price}
                  allacts={festivalPlaceholder.allacts}
                />
              );
            }

            if (total > 100) {
              total = 100;
            }

            console.log(festivalPlaceholder.name, total);

            setDone(true);
          }
        }
      }
    }
  }

  useEffect(() => {
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
      <h2>{total}</h2>

      <button onClick={() => getGenres()}>DO</button>
      {/* <h2>{bestFitFestivals}</h2>
      <h2>{mediumFitFestivals}</h2> */}

      {!done && (
        <span className={styles.intro}>sorry no festivals fit to you</span>
      )}
      {done && bestFitFestivals}

      {done && mediumFitFestivals}
    </div>
  );
}
export default festivalFilter;
