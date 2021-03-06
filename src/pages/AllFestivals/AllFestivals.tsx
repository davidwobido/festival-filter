import { useEffect, useState } from "react";
import FestivalCardLarge from "../../components/FestivalCardLarge/FestivalCardLarge";
import FestivalCardSmall from "../../components/FestivalCardSmall/FestivalCardSmall";
import { FestivalCardSmallProps, FestivalCardLargeProps } from "../../../types";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./AllFestivals.module.css";

function AllFestivals() {
  const [festivals, setFestivals] = useState<FestivalCardSmallProps[]>([]);
  const [search, setSearch] = useState("");
  const [selectedFestival, setSelectedFestival] =
    useState<FestivalCardLargeProps | null>(null);
  const [query, setQuery] = useState<string>("");

  // Search function
  const searchFestivals = festivals?.filter((festival) =>
    festival.name.toLocaleLowerCase().includes(search.toLowerCase())
  );

  // Fetch all festivals
  useEffect(() => {
    async function getFestivals() {
      const response = await fetch("api/festivals");
      const body = await response.json();
      setFestivals(body);
    }
    getFestivals();
  }, []);

  // Large Festivalcard
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
      <main className={styles.main}>
        {!selectedFestival && (
          <>
            <section className={styles.text}>
              <h1>All Festivals</h1>
              <span className={styles.intro}>
                Here’s an overview of all festivals in our database sorted by
                name.
              </span>
            </section>
            <section className={styles.search}>
              <SearchBar onSearch={setSearch} />
            </section>
            {searchFestivals?.length === 0 && (
              <p className={styles["no-match"]}>
                Sorry we couldn’t find a match. <br />
                <br />
                We are constantly working to improve our database. Come back
                again later.
              </p>
            )}

            <section className={styles.list}>
              {searchFestivals?.map((festival) => (
                <FestivalCardSmall
                  key={festival.name}
                  name={festival.name}
                  location={festival.location}
                  begin={festival.begin}
                  end={festival.end}
                  toSearch={setQuery}
                />
              ))}
            </section>
          </>
        )}

        <section>
          {selectedFestival && (
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
          )}
        </section>
      </main>
    </div>
  );
}
export default AllFestivals;
