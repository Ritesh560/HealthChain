import { createContext, useContext, useEffect, useState } from "react";
import { useWeb3 } from "./Web3Context";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const { healthChainInstance, account } = useWeb3();
  const navigate = useNavigate();

  const init = async () => {
    if (healthChainInstance) {
      const res = await healthChainInstance.methods.getStatus().call();
      console.log(account, res);
      if (res === "Doctor" || res === "Patient") {
        if (res === "Doctor") {
          const res = await healthChainInstance.methods.getDoctor.call();
          setUser(res);
        } else {
          const res = await healthChainInstance.methods.getPatient.call();
          setUser(res);
        }
        navigate("/dashboard");
      }
    }
  };
  useEffect(() => {
    init();
  }, [healthChainInstance]);

  return (
    <AuthContext.Provider value={{ user, setUser, init }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
