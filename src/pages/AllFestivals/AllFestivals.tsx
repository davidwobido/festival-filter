import { useEffect, useState } from "react";
import FestivalCardSmall, {
  FestivalCardSmallProps,
} from "../../components/FestivalCardSmall/FestivalCardSmall";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./AllFestivals.module.css";

function AllFestivals() {
  const [festivals, setFestivals] = useState<FestivalCardSmallProps[]>([]);

  async function getFestivals() {
    const response = await fetch("api/festivals");
    const body = await response.json();
    console.log(body);
    setFestivals(body.festivals);
  }

  useEffect(() => {
    getFestivals();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1>All Festivals</h1>
      <span className={styles.intro}>
        Here’s an overview of all festivals in our database sorted by name.
      </span>
      <SearchBar onSearch={console.log} />
      <div>
        {festivals?.map((data) => (
          // eslint-disable-next-line react/jsx-key
          <FestivalCardSmall
            name={data.name}
            location={data.location}
            begin={data.begin}
            end={data.end}
          />
        ))}
      </div>
    </div>
  );
}
export default AllFestivals;
