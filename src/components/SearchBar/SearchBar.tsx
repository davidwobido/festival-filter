import React, { FormEvent, useState } from "react";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  onSearch: (value: string) => void;
};

function SearchBar({ onSearch }: SearchBarProps): JSX.Element {
  const [value, setValue] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSearch(value);
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
