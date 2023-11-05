import React, { useState } from "react";
import styles from "./Illness.module.scss";
import Modal from "../../libs/Modal/Modal";
import { ReactComponent as ImageFile } from "../../libs/icons/image_file.svg";
import { ReactComponent as Share } from "../../libs/icons/share_icon.svg";
import { ReactComponent as Download } from "../../libs/icons/download.svg";
import { ReactComponent as Close } from "../../libs/icons/close.svg";
import CreateIllnessModal from "./components/CreateIllnessModal/CreateIllnessModal";

const Illness = ({ isCreateModal, setIsCreateModal }) => {
  const [selectedIllness, setSelectedIllness] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const handleCardClick = () => {
    setSelectedIllness("abcd");
  };

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className={styles.illnessCards}>
      {[...Array(5)].map((cur) => (
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
      ))}

      <Modal
        onClose={() => setSelectedIllness("")}
        showCloseButton
        isModal={!!selectedIllness?.length}
        className={styles.recordsModal}
      >
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
        {!!selectedFile ? (
          <div className={styles.uploadOptions}>
            <div className={styles.selectedRecord}>
              <div className={styles.left}>
                <div className={styles.icon}>
                  <ImageFile />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{selectedFile?.name}</h3>
                </div>
              </div>
              <div
                className={styles.shareAndDelete}
                onClick={() => setSelectedFile()}
              >
                <Close />
              </div>
            </div>
            <div className={styles.upload}>Upload</div>
          </div>
        ) : (
          <>
            <label htmlFor="inputFile" className={styles.create}>
              Create new record
            </label>
            <input
              type="file"
              id="inputFile"
              className={styles.inputFile}
              onChange={handleFileUpload}
            />
          </>
        )}
      </Modal>

      <CreateIllnessModal
        isModal={isCreateModal}
        setIsModal={setIsCreateModal}
      />
    </div>
  );
};

export default Illness;
