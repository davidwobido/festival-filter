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
  const [festival, setFestival] = useState<FestivalCardLargeProps | null>(null);
  const [query, setQuery] = useState<string | null>(null);

  const searchFestivals = festivals?.filter((festival) =>
    festival.name.toLocaleLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    async function getFestivals() {
      const response = await fetch("api/festivals");
      const body = await response.json();
      setFestivals(body);
    }
    getFestivals();
  }, []);

  useEffect(() => {
    async function clickedFestival() {
      const response = await fetch(`/api/festivals/${query}`);
      const body = await response.json();
      setFestival(body);
      console.log(festival);
    }
    clickedFestival();
  }, [query]);

  return (
    <div className={styles.wrapper}>
      <section className={styles.text}>
        <h1>All Festivals</h1>
        <span className={styles.intro}>
          Here’s an overview of all festivals in our database sorted by name.
        </span>
      </section>
      <SearchBar onSearch={setSearch} />
      <section className={styles.list}>
        {searchFestivals?.length === 0 && (
          <span className={styles["no-documents"]}>No Docouments found</span>
        )}

        {searchFestivals?.map((festival) => (
          // eslint-disable-next-line react/jsx-key
          <FestivalCardSmall
            name={festival.name}
            location={festival.location}
            begin={festival.begin}
            end={festival.end}
            toSearch={setQuery}
          />
        ))}
      </section>
      <button onClick={() => setQuery(null)}> NULL</button>

      <section>
        {query && festival && (
          <FestivalCardLarge
            key=""
            name={festival.name}
            location={festival.location}
            begin={festival.begin}
            end={festival.end}
            visitors={festival.visitors}
            acts={festival.acts}
            price={festival.price}
            allacts={festival.allacts}
            website={festival.website}
          />
        )}
      </section>
    </div>
  );
}
export default AllFestivals;
