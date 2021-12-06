import { useEffect, useState } from "react";
import FestivalCardSmall, {
  FestivalCardSmallProps,
} from "../../components/FestivalCardSmall/FestivalCardSmall";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./AllFestivals.module.css";

function AllFestivals() {
  const [festivals, setFestivals] = useState<FestivalCardSmallProps[]>([]);
  const [search, setSearch] = useState("");

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
          />
        ))}
      </section>
    </div>
  );
}
export default AllFestivals;