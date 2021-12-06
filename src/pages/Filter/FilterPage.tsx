import styles from "./FilterPage.module.css";
import GenreTag from "../../components/GenreTag/GenreTag";
import Button from "../../components/Buttons/Button";
import { useEffect, useState } from "react";

function SelectGenre() {
  const [selected, setActive] = useState<boolean>(false);

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  function handleClick() {
    selected ? setActive(false) : setActive(true);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <span className={styles.preline}>
            Hi {localStorage.getItem("ActiveUser")}
          </span>
          <h2>Choose your favorite genres:</h2>
          <section className={styles.tags}>
            <GenreTag text="Pop" selected={false} onClick={handleClick} />
            <GenreTag text="HipHop" selected={false} onClick={handleClick} />
            <GenreTag text="Rock" selected={false} />
            <GenreTag text="Indie" selected={false} />
            <GenreTag text="Punk" selected={false} />
            <GenreTag text="Metal" selected={false} />
            <GenreTag text="Electronic" selected={false} />
            <GenreTag text="Reggae" selected={false} />
            <GenreTag text="Jazz" selected={false} />
            <GenreTag text="Classical" selected={false} />
          </section>
        </div>
        <footer className={styles.footer}>
          <a className={styles.skip}>Show all festivals</a>
        </footer>
        <Button size="normal" text="filter" />
      </div>
    </>
  );
}
export default SelectGenre;
