import DoctorDashboard from "./components/DoctorDashboard/DoctorDashboard";
import Login from "./components/Login/Login";

import styles from "./App.module.scss";
import * as ipfs from "./web3/ipfs";
import { Web3Provider } from "./context/Web3Context";

function App() {

  return (
    <Web3Provider>
      <div className={styles.app}>
        <Login />
        <DoctorDashboard />
      </div>
    </Web3Provider>
  );
}

export default App;
