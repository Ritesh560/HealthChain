import DoctorDashboard from "./components/DoctorDashboard/DoctorDashboard"
import Login from "./components/Login/Login"

import { Web3Provider } from "./context/Web3Context"
import styles from "./App.module.scss"
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <div className={styles.app}>
      <Web3Provider>
        <div className={styles.app}>
          {/* <Login /> */}
          <NavBar loggedIn={true} />
          <DoctorDashboard />
        </div>
      </Web3Provider>
    </div>
  )
}

export default App
