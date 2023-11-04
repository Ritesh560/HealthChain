import React from "react"
import styles from "./SearchBar.module.scss"
import { ReactComponent as Search } from "../../../libs/icons/search.svg"

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <Search />
      <input type="text" className="input" />
    </div>
  )
}

export default SearchBar
