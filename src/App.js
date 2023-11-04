import DoctorDashboard from "./components/DoctorDashboard/DoctorDashboard"
import Login from "./components/Login/Login"

import styles from "./App.module.scss"

function App() {
  return (
    <div className={styles.app}>
      <Login />
      <DoctorDashboard />
    </div>
  )
}

export default App
