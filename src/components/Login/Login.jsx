import React from "react"
import styles from "./Login.module.scss"
import NavBar from "../NavBar/NavBar"

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <NavBar loggedIn={false} />
      <div className="loginPage"></div>
    </div>
  )
}

export default Login
