import React, { useContext, useEffect, useState } from "react";
import Modal from "../../../../libs/Modal/Modal";
import styles from "./CreateIllnessModal.module.scss";
import { Web3Context } from "../../../../context/Web3Context";
import Spinner from "../../../../libs/Spinner/Spinner";

const CreateIllnessModal = ({ isModal, setIsModal }) => {
  const { addIllness } = useContext(Web3Context);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    doctor: "",
    id: `${Math.random() % 1000023}`,
  });

  const create = async () => {
    setLoading(true);
    await addIllness(data.id, data.name, data.doctor);
    setIsModal(false);
  };
  return (
    <Modal
      onClose={() => setIsModal(false)}
      isModal={isModal}
      showCloseButton
      className={styles.createIllness}
    >
      <h2>Create new sickness record</h2>
      <div className={styles.inputs}>
        <div>
          <h4>Name</h4>
          <input
            value={data.name}
            onChange={(e) => {
              setData((prev) => {
                return {
                  ...prev,
                  name: e.target.value,
                };
              });
            }}
            type="text"
            className={styles.textInput}
            placeholder="Type the name of sickness"
          />
        </div>

        <div>
          <h4>Doctor address</h4>
          <input
            value={data.doctor}
            onChange={(e) => {
              setData((prev) => {
                return {
                  ...prev,
                  doctor: e.target.value,
                };
              });
            }}
            type="text"
            className={styles.textInput}
            placeholder="Type doctor's address here"
          />
        </div>
      </div>
      <div className={styles.create} onClick={create}>
        {loading ? <Spinner /> : "Create"}
      </div>
    </Modal>
  );
};

export default CreateIllnessModal;
