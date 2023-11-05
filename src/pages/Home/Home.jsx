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
      <div className={styles.right}></div>
    </div>
  )
}

export default Home
