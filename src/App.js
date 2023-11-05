import DoctorDashboard from "./components/DoctorDashboard/DoctorDashboard";
import Login from "./components/Login/Login";

import { Web3Provider } from "./context/Web3Context";
import styles from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className={styles.app}>
      <Web3Provider>
        <AuthProvider>
          <div className={styles.app}>
            <Login />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<DoctorDashboard />} />
            </Routes>
          </div>
        </AuthProvider>
      </Web3Provider>
      <Toaster />
    </div>
  );
}

export default App;
