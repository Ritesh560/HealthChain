import React, { useState } from "react"
import styles from "./Login.module.scss"
import NavBar from "../NavBar/NavBar"
import Modal from "../../libs/Modal/Modal"

import { ReactComponent as DoctorIcon } from "../../libs/icons/image_file.svg"
import { ReactComponent as PatientIcon } from "../../libs/icons/image_file.svg"
import Select from "../../libs/Select/Select"

const Login = () => {
  const [isModal, setModal] = useState(true)
  const [info, setInfo] = useState({
    type: "doctor",
    name: "",
    age: 0,
    gender: "male",
    hospital: "",
  })

  return (
    <div className={styles.loginContainer}>
      <NavBar loggedIn={false} />
      <div className={styles.loginPage}></div>

      <Modal onClose={() => setModal(false)} isModal={isModal} className={styles.signupModal}>
        <h2 className={styles.title}>Create account</h2>
        <div className={styles.inputs}>
          <div className={styles.role}>
            <h4>Role</h4>
            <div className={styles.roles}>
              <div className={info.type === "doctor" && styles.selected} onClick={() => setInfo((prev) => ({ ...prev, type: "doctor" }))}>
                <DoctorIcon />
                <p>Doctor</p>
              </div>
              <div className={info.type === "patient" && styles.selected} onClick={() => setInfo((prev) => ({ ...prev, type: "patient" }))}>
                <PatientIcon />
                <p>Patient</p>
              </div>
            </div>
          </div>
          <div className={styles.name}>
            <h4>Name</h4>
            <input type="text" placeholder="Type your name" className={styles.textInput} onChange={(e) => setInfo((prev) => ({ ...prev, name: e.target.value }))} />
          </div>

          <div className={styles.age}>
            <h4>Age</h4>
            <input type="number" placeholder="Type your age" className={styles.textInput} onChange={(e) => setInfo((prev) => ({ ...prev, age: e.target.value }))} />
          </div>

          <div className={styles.gender}>
            <h4>Gender</h4>
            <input type="text" placeholder="Type your name" className={styles.textInput} onChange={(e) => setInfo((prev) => ({ ...prev, gender: e.target.value }))} />
          </div>

          <div className={styles.hospitalName}>
            <h4>Hospital name</h4>
            <input type="text" placeholder="Type your hospital name" className={styles.textInput} onChange={(e) => setInfo((prev) => ({ ...prev, hospital: e.target.value }))} />
          </div>
        </div>
        <div className={styles.create}>Create account</div>
      </Modal>
    </div>
  )
}

export default Login
