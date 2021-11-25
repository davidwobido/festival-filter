import React, { useState } from "react";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  onSearch: (value: string) => void;
};

function SearchBar({ onSearch }: SearchBarProps): JSX.Element {
  const [value, setValue] = useState("");

  console.log(value);
  console.log(onSearch);

  return (
    <form className={styles.wrapper}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search"
        className={styles.input}
      />
      <button type="submit" className={styles.button} value="">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
