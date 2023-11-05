import Spinner from "../../libs/Spinner/Spinner";
import React, { useContext, useEffect, useState } from "react";
import styles from "./Login.module.scss";
import Modal from "../../libs/Modal/Modal";

import { ReactComponent as DoctorIcon } from "../../libs/icons/image_file.svg";
import { ReactComponent as PatientIcon } from "../../libs/icons/image_file.svg";
import Select from "../../libs/Select/Select";
import { Web3Context } from "../../context/Web3Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isModal, setModal] = useState(false);

  const { connectedAccount, connectWallet } = useContext(Web3Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (connectedAccount) {
      navigate("/dashboard");
    }
  }, [connectedAccount]);

  const [info, setInfo] = useState({
    type: "Doctor", //Patient
    name: "",
    age: 0,
    gender: "M",
    hospital: "",
  });

  return (
    <div className={styles.loginContainer}>
      {!connectedAccount && (
        <div className={styles.navBarContainer}>
          <div className={styles.logo}>HealthChain</div>

          <div className={styles.loggedOut} onClick={connectWallet}>
            {loading ? <Spinner /> : "Connect"}
          </div>
        </div>
      )}
      <Modal
        onClose={() => setModal(false)}
        isModal={isModal}
        className={styles.signupModal}
      >
        <h2 className={styles.title}>Create account</h2>
        <div className={styles.inputs}>
          <div className={styles.role}>
            <h4>Role</h4>
            <div className={styles.roles}>
              <div
                className={info.type === "Doctor" && styles.selected}
                onClick={() => setInfo((prev) => ({ ...prev, type: "Doctor" }))}
              >
                <DoctorIcon />
                <p>Doctor</p>
              </div>
              <div
                className={info.type === "Patient" && styles.selected}
                onClick={() =>
                  setInfo((prev) => ({ ...prev, type: "Patient" }))
                }
              >
                <PatientIcon />
                <p>Patient</p>
              </div>
            </div>
          </div>
          <div className={styles.name}>
            <h4>Name</h4>
            <input
              type="text"
              placeholder="Type your name"
              className={styles.textInput}
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>

          <div className={styles.age}>
            <h4>Age</h4>
            <input
              type="number"
              placeholder="Type your age"
              className={styles.textInput}
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, age: e.target.value }))
              }
            />
          </div>

          <div className={styles.gender}>
            <h4>Gender</h4>
            {/* <input type="text" placeholder="Type your name" className={styles.textInput} onChange={(e) => setInfo((prev) => ({ ...prev, gender: e.target.value }))} /> */}
            <Select
              value={info.gender}
              options={[
                { label: "Male", value: "M" },
                { label: "Female", value: "F" },
              ]}
              onChange={(val) => {
                setInfo((prev) => ({ ...prev, gender: val }));
              }}
            />
          </div>

          {info.type === "Doctor" && (
            <div className={styles.hospitalName}>
              <h4>Hospital name</h4>
              <input
                type="text"
                placeholder="Type your hospital name"
                className={styles.textInput}
                onChange={(e) =>
                  setInfo((prev) => ({ ...prev, hospital: e.target.value }))
                }
              />
            </div>
          )}
        </div>
        <div className={styles.create}>
          {true ? <Spinner /> : "Create account"}
        </div>
      </Modal>
    </div>
  );
};

export default Login;
