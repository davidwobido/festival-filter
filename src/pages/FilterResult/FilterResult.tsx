import { useEffect, useState } from "react";
import styles from "./FilterResult.module.css";
import FestivalCardMedium from "../../components/FestivalCardMedium/FestivalCardMedium";
import { FestivalCardMediumProps } from "../../components/FestivalCardMedium/FestivalCardMedium";

type FestivalPlaceholderTypes = {
  _id: string;
  name?: string;
  location?: string;
  begin?: string;
  end?: string;
  visitors?: number;
  acts?: number;
  price?: number;
  allacts?: string;
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
  value?: number;
};

type genrePlaceholderType = {
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
  const [prefilteredFestivals, setPrefilteredFestivals] =
    useState<FestivalPlaceholderTypes[]>();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    localStorage.getItem("SelectedGenres")
  );
  const [selectedGenresState, setSelectedGenresState] = useState<string[]>();

  const [done, setDone] = useState<boolean>(false);
  const [bestFitFestivals] = useState([]);
  const [mediumFitFestivals] = useState([]);
  let total;
  let selectedGenres: string[] | undefined;
  console.log("searchQuery_00", searchQuery);

  function getGenres() {
    const selectedGenresString = localStorage.getItem("SelectedGenres");
    selectedGenres = searchQuery?.split("+");
    console.log(typeof selectedGenres, "selectedGenres_split", selectedGenres);
    setSearchQuery(selectedGenresString);
    setSelectedGenresState(selectedGenres);
  }

  async function fetchPrefilteredFestivals() {
    const response = await fetch(`/api/festivals/${searchQuery}`);
    const body = await response.json();
    setPrefilteredFestivals(body);
    console.log("body", body, typeof body);
    console.log("prefilteredfestivals", prefilteredFestivals);
  }

  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    fetchPrefilteredFestivals();
  }, [searchQuery]);

  function filterFunction() {
    let genreCounter: number;
    let festivalCounter: number;
    let genreValue: number;
    let result: number[] = [];
    console.log("filter");
    console.log(
      "selectedGenres",
      selectedGenresState,
      "prefilteredFestivals",
      prefilteredFestivals
    );
    if (
      selectedGenresState &&
      selectedGenresState != undefined &&
      prefilteredFestivals &&
      prefilteredFestivals != undefined
    ) {
      console.log("filter2");

      // Loop through festivals
      for (
        festivalCounter = 0;
        festivalCounter <= prefilteredFestivals.length;
        festivalCounter++
      ) {
        const festivalPlaceholder: FestivalPlaceholderTypes =
          prefilteredFestivals[festivalCounter];
        console.log("festivalPlaceholder", festivalPlaceholder);
        console.log("prefilteredFestivals", prefilteredFestivals);

        // Loop through genres to extract each genre value
        for (
          genreCounter = 0;
          genreCounter <= selectedGenresState.length;
          genreCounter++
        ) {
          const genrePlaceholder: keyof genrePlaceholderType =
            selectedGenresState[genreCounter];

          genreValue = festivalPlaceholder[genrePlaceholder];

          console.log("ERROR_festivalPlaceholder", festivalPlaceholder);
          console.log("ERROR_genrePlaceholder", genrePlaceholder);

          if (genreCounter < selectedGenresState.length) {
            result.push(genreValue);
          }
          if (genreCounter === selectedGenresState.length) {
            total = result.reduce(function (a, b) {
              return a + b;
            });
            result = [0];

            if (total >= 50 && total < 75) {
              // Add total fitting value to Object
              Object.assign(festivalPlaceholder, { value: total });
              mediumFitFestivals.push(festivalPlaceholder);
              console.log("mediumFitFestivals:", mediumFitFestivals);
            }
            if (total >= 75) {
              Object.assign(festivalPlaceholder, { value: total });
              bestFitFestivals.push(festivalPlaceholder);
              console.log("bestFitFestivals:", bestFitFestivals);
            }

            if (total > 100) {
              total = 100;
            }

            // console.log(festivalPlaceholder?.name, total);

            setDone(true);
          }
        }
      }
    }
  }

  useEffect(() => {
    filterFunction();
  }, [prefilteredFestivals]);

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

      {bestFitFestivals?.map((festival: FestivalCardMediumProps) => (
        <FestivalCardMedium
          key={festival.key}
          name={festival.name}
          location={festival.location}
          begin={festival.begin}
          end={festival.end}
          price={festival.price}
          allacts={festival.allacts}
          value={festival.value}
        />
      ))}
      {mediumFitFestivals?.map((festival: FestivalCardMediumProps) => (
        <FestivalCardMedium
          key={festival.key}
          name={festival.name}
          location={festival.location}
          begin={festival.begin}
          end={festival.end}
          price={festival.price}
          allacts={festival.allacts}
          value={festival.value}
        />
      ))}

      {!done && (
        <span className={styles.intro}>sorry no festivals fit to you</span>
      )}
      {done && bestFitFestivals}
      {done && mediumFitFestivals}
    </div>
  );
}
export default festivalFilter;

// metal?: number;
// reggae?: number;
// pop?: number;
// classic?: number;
// jazz?: number;
// punk?: number;
// indie?: number;
// rock?: number;
// hiphop?: number;
