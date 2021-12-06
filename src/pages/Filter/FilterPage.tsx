import styles from "./FilterPage.module.css";
import GenreTag from "../../components/GenreTag/GenreTag";
import Button from "../../components/Buttons/Button";

function SelectGenre() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <span className={styles.preline}>
            Hi {localStorage.getItem("ActiveUser")}
          </span>
          <h2>Choose your favorite genres:</h2>
          <section className={styles.tags}>
            <GenreTag text="Pop" />
            <GenreTag text="HipHop" />
            <GenreTag text="Rock" />
            <GenreTag text="Indie" />
            <GenreTag text="Punk" />
            <GenreTag text="Metal" />
            <GenreTag text="Electronic" />
            <GenreTag text="Reggae" />
            <GenreTag text="Jazz" />
            <GenreTag text="Classical" />
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
