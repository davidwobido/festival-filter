import { useState } from "react";
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

type GenrePlaceholderType = {
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
  const [done, setDone] = useState<boolean>(false);
  const [bestFitFestivals] = useState([]);
  const [mediumFitFestivals] = useState([]);
  let total;
  let prefilteredFestivals: FestivalPlaceholderTypes[];

  const selectedGenresString = localStorage.getItem("SelectedGenres");
  console.log("selectedGenresString", selectedGenresString);

  //string to Array
  const selectedGenres: string[] | undefined = selectedGenresString?.split("+");

  async function fetchPrefilteredFestivals() {
    const response = await fetch(`/api/festivals/${selectedGenresString}`);
    prefilteredFestivals = await response.json();

    let genreCounter: number;
    let festivalCounter: number;
    let genreValue: number;
    let result: number[] = [];

    if (
      selectedGenres &&
      selectedGenres != undefined &&
      prefilteredFestivals &&
      prefilteredFestivals != undefined &&
      done === false
    ) {
      // Loop through festivals
      for (
        festivalCounter = 0;
        festivalCounter < prefilteredFestivals.length;
        festivalCounter++
      ) {
        const festivalPlaceholder: FestivalPlaceholderTypes =
          prefilteredFestivals[festivalCounter];
        console.log(
          "prefilteredFestivals.length",
          prefilteredFestivals.length,
          "FC:",
          festivalCounter,
          "festivalPlaceholder",
          festivalPlaceholder
        );

        // Loop through genres to extract each genre value
        for (
          genreCounter = 0;
          genreCounter <= selectedGenres.length;
          genreCounter++
        ) {
          const genrePlaceholder: keyof GenrePlaceholderType =
            selectedGenres[genreCounter];
          console.log("GC:", genreCounter);
          genreValue = festivalPlaceholder[genrePlaceholder];

          if (genreCounter < selectedGenres.length) {
            result.push(genreValue);
          }
          if (genreCounter === selectedGenres.length) {
            total = result.reduce(function (a, b) {
              return a + b;
            });
            result = [0];

            if (total >= 50 && total < 75) {
              // Add total fitting value to Object
              Object.assign(festivalPlaceholder, { value: total });
              if (mediumFitFestivals.includes(festivalPlaceholder) === false) {
                mediumFitFestivals.push(festivalPlaceholder);
              }
            }
            if (total >= 75) {
              Object.assign(festivalPlaceholder, { value: total });
              if (bestFitFestivals.includes(festivalPlaceholder) === false) {
                bestFitFestivals.push(festivalPlaceholder);
              }
            }

            // console.log(festivalPlaceholder?.name, total);

            setDone(true);
            console.log("bestFitFestivals:", bestFitFestivals);
            console.log("mediumFitFestivals:", mediumFitFestivals);
          }
        }
      }
    }
  }
  fetchPrefilteredFestivals();
  // filterFunction();

  // useEffect(() => {
  //   festivalFilter();
  // }, []);

  return (
    <div className={styles.wrapper}>
      <section className={styles.text}>
        <h1>Filtered!</h1>
        <span className={styles.intro}>
          Here are your festival suggestions sorted by matching your choice.{" "}
        </span>
      </section>
      <h2>{total}</h2>

      {/* <button onClick={() => fetchPrefilteredFestivals()}>DO</button> */}

      {done && <h2>test state done</h2>}
      {mediumFitFestivals && <h2>test state medium</h2>}
      {mediumFitFestivals && <h2>test state best</h2>}

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
      {!done && (
        <span className={styles.intro}>sorry no festivals fit to you</span>
      )}
      {mediumFitFestivals.map((festival: FestivalCardMediumProps) => (
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

      {!bestFitFestivals && !mediumFitFestivals && (
        <span className={styles.intro}>sorry no festivals fit to you</span>
      )}
      {/* {done && bestFitFestivals}
      {done && mediumFitFestivals} */}
    </div>
  );
}
export default festivalFilter;
