import React, { useState } from "react"
import styles from "./Illness.module.scss"
import Modal from "../../libs/Modal/Modal"
import { ReactComponent as Icon } from "../../libs/icons/search.svg"

const Illness = () => {
  const [selectedIllness, setSelectedIllness] = useState("")

  const handleCardClick = () => {
    setSelectedIllness("abcd")
  }

  return (
    <div className={styles.illnessCards}>
      <div className={styles.card} onClick={handleCardClick}>
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

      <Modal onClose={() => setSelectedIllness("")} showCloseButton isModal={!!selectedIllness?.length} className={styles.recordsModal}>
        <h2 className={styles.title}>Records</h2>
        <div className={styles.records}>
          <div className={styles.record}>
            <div className={styles.left}>
              <div className={styles.icon}>
                <Icon />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>Report 1</h3>
                <p className={styles.hex}>3d5d5d64f1dd3f6d4f12d</p>
              </div>
            </div>
            <p className={styles.date}>1 April 2022</p>
            <div className={styles.shareAndDelete}>
              <Icon />
              <Icon />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Illness
