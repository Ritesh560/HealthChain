import React, { useEffect } from "react"
import { useWeb3 } from "../../context/Web3Context"
import { useNavigate } from "react-router-dom"
import healthChainImg from "../../libs/icons/healthChain.jpeg"

import styles from "./Home.module.scss"

const Home = () => {
  const { connected, account, user } = useWeb3()
  const navigate = useNavigate()
  useEffect(() => {
    if (connected && (user.type === "Doctor" || user.type === "Patient")) {
      navigate("/dashboard")
    }
  }, [])
  return (
    <div className={styles.homeContainer}>
      <div className={styles.left}>
        <img src={healthChainImg} alt="" />
      </div>
      <div className={styles.right}>
        <h2>Welcome to the Future of Health Records Management</h2>
        <p>It is a revolutionary Decentralized Health Records Platform, where you are in control of your health journey. Say goodbye to the hassle of redundant tests and fragmented records. With our system, you can effortlessly store, manage, and share your complete medical history. Empower yourself and your healthcare providers to make informed decisions, ensuring the best care possible. Join us in reshaping the future of healthcare through secure, private, and decentralized health records management.</p>
      </div>
    </div>
  )
}

export default Home
