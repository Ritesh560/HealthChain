import React, { useContext, useEffect, useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import styles from "./DoctorDashboard.module.scss"
import Illness from "../Illness/Illness"
import { Web3Context } from "../../context/Web3Context"
import { ReactComponent as EmptyState } from "../../libs/icons/empty_state.svg"

const DoctorDashboard = () => {
  const [isCreateModal, setIsCreateModal] = useState(false)
  const [patients, setPatients] = useState([])
  const { getAllPatients, user, connectedAccount } = useContext(Web3Context)
  const [selectedPatient, setSelectedPatient] = useState(user?.role === "Patient" ? connectedAccount : "")

  useEffect(() => {
    const init = async () => {
      const p = await getAllPatients()
      console.log(p)
      setPatients(p)
    }
    init()
  }, [])

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <p className={styles.title}>
          {user?.role === "Doctor" && <span onClick={() => setSelectedPatient("")}>{"< Back"}</span>}
          <p> All {!!selectedPatient.length ? "sickness records" : "patients"}</p>
        </p>
        <SearchBar />
        {!!selectedPatient.length && user?.role === "Patient" && (
          <div className={styles.addSickness} onClick={() => setIsCreateModal(true)}>
            + Add New
          </div>
        )}
      </div>

      {!!selectedPatient.length ? (
        <Illness isCreateModal={isCreateModal} setIsCreateModal={setIsCreateModal} />
      ) : (
        <>
          {patients?.length ? (
            <div className={styles.patientsCards}>
              {patients.map((a) => (
                <div className={styles.card} onClick={() => setSelectedPatient("abcd")}>
                  <div className={styles.userImg}>
                    <img src="data:image/png;base64,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" alt="user" />
                  </div>
                  <div className={styles.userInfo}>
                    <p className={styles.name}>Ritesh kumar</p>
                    <p className={styles.age}>Age: 21</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.EmptyState}>
              <EmptyState />
              <p>No patients</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default DoctorDashboard
