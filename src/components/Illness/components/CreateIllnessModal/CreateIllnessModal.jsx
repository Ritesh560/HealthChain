import React, { useEffect, useState } from "react"
import Modal from "../../../../libs/Modal/Modal"
import styles from "./CreateIllnessModal.module.scss"

const CreateIllnessModal = ({ isModal, setIsModal }) => {
  return (
    <Modal onClose={() => setIsModal(false)} isModal={isModal} showCloseButton className={styles.createIllness}>
      <h2>Create new sickness record</h2>
      <div className={styles.inputs}>
        <div>
          <h4>Name</h4>
          <input type="text" className={styles.textInput} placeholder="Type the name of sickness" />
        </div>

        <div>
          <h4>Doctor address</h4>
          <input type="text" className={styles.textInput} placeholder="Type doctor's address here" />
        </div>
      </div>
      <div className={styles.create}>Create</div>
    </Modal>
  )
}

export default CreateIllnessModal
