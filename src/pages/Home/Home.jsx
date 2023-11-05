import React, { useEffect } from "react";
import { useWeb3 } from "../../context/Web3Context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { connected, account, user } = useWeb3();
  const navigate = useNavigate();
  useEffect(() => {
    if (connected && (user.type === "Doctor" || user.type === "Patient")) {
      navigate("/dashboard");
    }
  }, []);
  return <div>Home</div>;
};

export default Home;
