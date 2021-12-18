import styles from "./FilterPage.module.css";
import GenreTag from "../../components/GenreTag/GenreTag";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Genre tags
const initialTags = [
  { text: "Electronic", selected: false, id: 0 },
  { text: "Pop", selected: false, id: 1 },
  { text: "Rock", selected: false, id: 2 },
  { text: "Indie", selected: false, id: 3 },
  { text: "Punk", selected: false, id: 4 },
  { text: "Metal", selected: false, id: 5 },
  { text: "Classic", selected: false, id: 6 },
  { text: "Reggae", selected: false, id: 7 },
  { text: "Jazz", selected: false, id: 8 },
  { text: "Hiphop", selected: false, id: 9 },
];

function SelectGenre() {
  const [tags, setTags] = useState(initialTags);
  const navigate = useNavigate();

  // Select Tag
  function onTagClicked(id: number): void {
    const newTags = [...tags];
    const tag = newTags.find((tag) => tag.id === id);
    if (tag) {
      tag.selected = !tag.selected;
    }
    setTags(newTags);
  }

  const trueTags = tags.filter((tag) => tag.selected === true);

  // Get tags and map them to an string[]
  function getSelectedGenre(): void {
    const selectedGenresLocal: string[] = tags
      .filter((tag) => tag.selected === true)
      .map((genre) => genre.text);
    // Set them as a lower case stringss local storage
    const selectedGenresLocalString = selectedGenresLocal.toString();
    localStorage.setItem(
      "SelectedGenres",
      selectedGenresLocalString.toLowerCase()
    );
  }

  function handleClick() {
    getSelectedGenre();
    navigate("/filtered");
  }
  console.log(tags);
  return (
    <>
      <main className={styles.wrapper}>
        <div className={styles.content}>
          <span className={"text-preline"}>
            Hi {localStorage.getItem("ActiveUser")}
          </span>
          <h2>Choose your favorite genres:</h2>
          <section className={styles.tags}>
            {tags.map((tag) => (
              <GenreTag tag={tag} key={tag.id} onClick={onTagClicked} />
            ))}
          </section>
        </div>
        <button
          onClick={() => handleClick()}
          className={`${styles.filterbutton} ${
            trueTags.length === 0 ? styles["filterbutton--inactive"] : ""
          }`}
        >
          Filter
        </button>
      </main>
      <footer className={styles.footer}>
        <Link to="/all-festivals" className={styles.skip}>
          Show all festivals
        </Link>
      </footer>
    </>
  );
}
export default SelectGenre;
