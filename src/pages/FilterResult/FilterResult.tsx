import { useEffect, useState } from "react";
import styles from "./FilterResult.module.css";
import FestivalCardMedium from "../../components/FestivalCardMedium/FestivalCardMedium";
import { Link } from "react-router-dom";
import FestivalCardLarge, {
  FestivalCardLargeProps,
} from "../../components/FestivalCardLarge/FestivalCardLarge";

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
  value: number;
};

type GenrePlaceholderTypes = {
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
  const [bestFitFestivals, setBestFitFestivals] = useState<
    FestivalPlaceholderTypes[]
  >([]);
  const [mediumFitFestivals, setMediumFitFestivals] = useState<
    FestivalPlaceholderTypes[]
  >([]);

  async function filterFunction(): Promise<void> {
    const selectedGenresString = localStorage.getItem("SelectedGenres");
    const selectedGenres = selectedGenresString?.split(",");

    // Get selected genre tags and set them as search Query
    const selectedGenresList = selectedGenres?.join("+");

    let genreCounter: number;
    let festivalCounter: number;
    let genreValue: number | undefined;
    let result: number[] = [];

    //fetch prefiltered festivals
    const response = await fetch(`/api/festivals/${selectedGenresList}`);
    const prefilteredFestivals = await response.json();

    if (selectedGenres) {
      const mappedGenres = selectedGenres;

      const newMediumFitFestivals = [...mediumFitFestivals];
      const newBestFitFestivals = [...bestFitFestivals];
      // Loop through festivals
      for (
        festivalCounter = 0;
        festivalCounter < prefilteredFestivals.length;
        festivalCounter++
      ) {
        const festivalPlaceholder = prefilteredFestivals[
          festivalCounter
        ] as FestivalPlaceholderTypes;

        // Loop through genres to extract each genre value
        for (
          genreCounter = 0;
          genreCounter <= mappedGenres.length;
          genreCounter++
        ) {
          const genrePlaceholder: string = mappedGenres[genreCounter];
          genreValue =
            festivalPlaceholder[
              genrePlaceholder as keyof GenrePlaceholderTypes
            ];

          if (genreValue && genreCounter < mappedGenres.length) {
            result.push(genreValue);
          }
          if (genreCounter === mappedGenres.length) {
            const total = result.reduce(function (a, b) {
              return a + b;
            });
            result = [0];

            if (total >= 50 && total < 75) {
              Object.assign(festivalPlaceholder, { value: total });
              if (
                newMediumFitFestivals
                  .map((festival) => festival.name)
                  .includes(festivalPlaceholder.name) === false
              ) {
                newMediumFitFestivals.push(festivalPlaceholder);
              }
            }
            if (total >= 75) {
              if (total > 100) {
                Object.assign(festivalPlaceholder, { value: 100 });
              } else if (total <= 100) {
                Object.assign(festivalPlaceholder, { value: total });
              }
              // Check if festival is already in Array
              if (
                newBestFitFestivals
                  .map((festival) => festival.name)
                  .includes(festivalPlaceholder.name) === false
              ) {
                newBestFitFestivals.push(festivalPlaceholder);
              }
            }
            newBestFitFestivals.sort((a, b) => b.value - a.value);
            newMediumFitFestivals.sort((a, b) => b.value - a.value);
          }
        }
      }
      setDone(true);

      setBestFitFestivals(newBestFitFestivals);
      setMediumFitFestivals(newMediumFitFestivals);
    }
  }

  // Check if one Festival will be displayed
  let printFestival;

  if (mediumFitFestivals.length !== 0 || bestFitFestivals.length !== 0) {
    printFestival = true;
  } else printFestival = false;

  useEffect(() => {
    filterFunction();
  }, []);

  // Large Festivalcard

  // const [festivals, setFestivals] = useState<FestivalCardSmallProps[]>([]);
  const [selectedFestival, setSelectedFestival] =
    useState<FestivalCardLargeProps | null>(null);

  const [query, setQuery] = useState<string | "">("");
  useEffect(() => {
    async function clickedFestival() {
      if (query != "") {
        const response = await fetch(`/api/festivals/name/${query}`);
        const body = await response.json();
        setSelectedFestival(body);
      }
    }
    clickedFestival();
  }, [query]);

  function close() {
    setSelectedFestival(null);
  }

  return (
    <div className={styles.wrapper}>
      <main>
        {!printFestival && !done && !selectedFestival && (
          <p className={styles.loading}>Filter is working ...</p>
        )}

        {!printFestival && done && !selectedFestival && (
          <p className={styles["no-match"]}>
            Sorry we couldn’t find a match.
            <br />
            <br />
            We are constantly working to improve our database. Come back again
            later.
          </p>
        )}

        {printFestival && done && !selectedFestival && (
          <div>
            <section className={styles.text}>
              <h1>Filtered!</h1>
              <span className={styles.intro}>
                Here are your festival suggestions sorted by matching your
                choice.
              </span>
            </section>
            <section className={styles.list}>
              {bestFitFestivals.map((festival) => (
                <FestivalCardMedium
                  key={festival.name}
                  name={festival.name}
                  location={festival.location}
                  begin={festival.begin}
                  end={festival.end}
                  price={festival.price}
                  allacts={festival.allacts}
                  value={festival.value}
                  color="green"
                  toSearch={setQuery}
                />
              ))}
              {mediumFitFestivals.map((festival) => (
                <FestivalCardMedium
                  key={festival.name}
                  name={festival.name}
                  location={festival.location}
                  begin={festival.begin}
                  end={festival.end}
                  price={festival.price}
                  allacts={festival.allacts}
                  value={festival.value}
                  color="orange"
                  toSearch={setQuery}
                />
              ))}
            </section>
          </div>
        )}
        {printFestival && done && selectedFestival && (
          <section className={styles.festivalcardlarge}>
            <FestivalCardLarge
              close={() => close()}
              key={selectedFestival.name}
              name={selectedFestival.name}
              location={selectedFestival.location}
              begin={selectedFestival.begin}
              end={selectedFestival.end}
              visitors={selectedFestival.visitors}
              acts={selectedFestival.acts}
              price={selectedFestival.price}
              allacts={selectedFestival.allacts}
              website={selectedFestival.website}
            />
          </section>
        )}
      </main>
      <footer className={styles.footer}>
        <Link to="/all-festivals" className={styles.skip}>
          Show all festivals
        </Link>
      </footer>
    </div>
  );
}
export default festivalFilter;
