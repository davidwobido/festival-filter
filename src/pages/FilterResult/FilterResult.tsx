import { useEffect, useState } from "react";
import styles from "./FilterResult.module.css";

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

    console.log(
      "selectedGenres",
      selectedGenres,
      "Typeof",
      typeof selectedGenres
    );

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

      // Extract genres to String Array
      // const selectedGenres = tags.filter((tag) => tag.selected === true);
      // const mappedGenres = selectedGenres.map((genre) => genre.text);

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

              // Save result to local storage
              // localStorage.setItem(`${festivalPlaceholder.name}`, total);
              // localStorage.getItem(Immergut);
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
    </div>
  );
}
export default festivalFilter;

// import { useEffect, useState } from "react";
// import styles from "./FilterResult.module.css";

// type FestivalPlaceholderTypes = {
//   id: string;
//   name: string;
//   location: string;
//   begin: string;
//   end: string;
//   visitors: number;
//   acts: number;
//   price: number;
//   allacts: string;
//   electronic?: number;
//   metal?: number;
//   reggae?: number;
//   pop?: number;
//   classic?: number;
//   jazz?: number;
//   punk?: number;
//   indie?: number;
//   rock?: number;
//   hiphop?: number;
// };

// function festivalFilter() {
//   const [prefilteredFestivals, setPrefilteredFestivals] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   console.log("01  prefilteredFestivals", prefilteredFestivals);

//   let genreCounter: number;
//   let festivalCounter: number;
//   let genreValue: number;
//   let result: number[] = [];
//   let selectedGenres: string[];

//   // String to Array
//   async function test() {
//     const selectedGenresString = localStorage.getItem("SelectedGenres");
//     selectedGenres = selectedGenresString?.split(",");
//     console.log("____selectedGenres", selectedGenres);

//     // Get selected genre tags and set them as search Query

//     const selectedGenresList = selectedGenres.join("+");
//     console.log(`To search : ${selectedGenresList}`);
//     setSearchQuery(selectedGenresList);
//     console.log("searchquery", searchQuery);
//   }

//   useEffect(() => {
//     test();
//   }, []);

//   //fetch prefiltered festivals
//   async function fetchFestivals(): Promise<void> {
//     const response = await fetch(`/api/festivals/${searchQuery}`);
//     const body = await response.json();
//     setPrefilteredFestivals(body);
//     console.log("02_prefiltered festivals", prefilteredFestivals);

//     // Loop through festivals
//     for (
//       festivalCounter = 0;
//       festivalCounter <= prefilteredFestivals.length;
//       festivalCounter++
//     ) {
//       const festivalPlaceholder: FestivalPlaceholderTypes =
//         prefilteredFestivals[festivalCounter];
//       console.log("prefilteredFestivals", prefilteredFestivals);

//       // Loop through genres to extract each genre value
//       for (
//         genreCounter = 0;
//         genreCounter <= selectedGenres.length;
//         genreCounter++
//       ) {
//         const genrePlaceholder: string = selectedGenres[genreCounter];
//         console.log("genrePlaceholder", genrePlaceholder);
//         console.log("festivalPlaceholder", festivalPlaceholder);

//         genreValue = festivalPlaceholder[genrePlaceholder];

//         if (genreCounter < selectedGenres.length) {
//           result.push(genreValue);
//           // console.log("01_result", genreValue, result);
//         }
//         if (genreCounter === selectedGenres.length) {
//           let total = result.reduce(function (a, b) {
//             return a + b;
//           });
//           result = [0];
//           if (total > 100) {
//             total = 100;
//           }
//           console.log(festivalPlaceholder.name, total);
//         }
//       }
//     }
//   }
//   useEffect(() => {
//     fetchFestivals();
//   }, [searchQuery]);

//   return (
//     <div className={styles.wrapper}>
//       <section className={styles.text}>
//         <h1>Filtered!</h1>
//         <span className={styles.intro}>
//           Here are your festival suggestions sorted by matching your choice.{" "}
//         </span>
//       </section>
//     </div>
//   );
// }
// export default festivalFilter;
