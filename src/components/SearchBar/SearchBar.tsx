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
    <input
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="Enter search"
      className={styles.searchBar}
    />
  );
}

export default SearchBar;
