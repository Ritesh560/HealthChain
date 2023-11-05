import React, { useState } from "react"
import styles from "./Illness.module.scss"
import Modal from "../../libs/Modal/Modal"
import { ReactComponent as ImageFile } from "../../libs/icons/image_file.svg"
import { ReactComponent as Share } from "../../libs/icons/share_icon.svg"
import { ReactComponent as Download } from "../../libs/icons/download.svg"
import CreateIllnessModal from "./components/CreateIllnessModal/CreateIllnessModal"

const Illness = () => {
  const [selectedIllness, setSelectedIllness] = useState("")
  const [isCreateModal, setIsCreateModal] = useState(false)

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
          {[...Array(20)].map((cur) => (
            <div className={styles.record}>
              <div className={styles.left}>
                <div className={styles.icon}>
                  <ImageFile />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>Report 1</h3>
                  <p className={styles.hex}>3d5d5d64f1dd3f6d4f12d</p>
                </div>
              </div>
              <p className={styles.date}>1 April 2022</p>
              <div className={styles.shareAndDelete}>
                <Share />
                <Download />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.create}>Create new record</div>
      </Modal>

      <CreateIllnessModal isModal={isCreateModal} setIsModal={setIsCreateModal} />
    </div>
  )
}

export default Illness
