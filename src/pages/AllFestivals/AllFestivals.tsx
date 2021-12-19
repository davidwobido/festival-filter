import { useEffect, useState } from "react";
import FestivalCardLarge, {
  FestivalCardLargeProps,
} from "../../components/FestivalCardLarge/FestivalCardLarge";
import FestivalCardSmall, {
  FestivalCardSmallProps,
} from "../../components/FestivalCardSmall/FestivalCardSmall";
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
      {!selectedFestival && (
        <>
          <section className={styles.text}>
            <h1>All Festivals</h1>

            <span className={styles.intro}>
              Here’s an overview of all festivals in our database sorted by
              name.
            </span>
          </section>
          <SearchBar onSearch={setSearch} />
          <section className={styles.list}>
            {searchFestivals?.length === 0 && (
              <span className={styles["no-documents"]}>
                No Docouments found
              </span>
            )}

            {searchFestivals?.map((festival) => (
              // eslint-disable-next-line react/jsx-key
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
    </div>
  );
}
export default AllFestivals;
