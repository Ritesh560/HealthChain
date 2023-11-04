import React from "react"
import styles from "./Illness.module.scss"

const Illness = () => {
  return (
    <div className={styles.illnessCards}>
      <div className={styles.card}>
        <div className={styles.disease}>
          <h4>Disease</h4>
          <p>Cancer</p>
        </div>
        <div className={styles.doctor}>
          <h4>Doctor</h4>
          <p>bharat</p>
        </div>
        <div className={styles.date}>
          <h4>Date</h4>
          <p>5 april 2022</p>
        </div>
      </div>
    </div>
  )
}

export default Illness
