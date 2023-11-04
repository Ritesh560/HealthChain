import DoctorDashboard from "./components/DoctorDashboard/DoctorDashboard"
import Login from "./components/Login/Login"

import styles from "./App.module.scss"
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <div className={styles.app}>
      <Login />
      {/* <NavBar loggedIn={true} />
      <DoctorDashboard /> */}
    </div>
  )
}

export default App
