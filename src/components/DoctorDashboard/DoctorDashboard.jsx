import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import styles from "./DoctorDashboard.module.scss"

const DoctorDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <p className={styles.title}>All patients</p>
        <SearchBar />
      </div>
    </div>
  )
}

export default DoctorDashboard
