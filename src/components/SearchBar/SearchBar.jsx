import React from "react"
import styles from "./SearchBar.module.scss"
import { ReactComponent as Search } from "../../libs/icons/search.svg"

function SearchBar({ className }) {
  return (
    <div className={styles.searchBar + " " + { ...className }}>
      <Search className={styles.searchIcon} />
      <input type="text" className={styles.input} />
    </div>
  )
}

export default SearchBar
