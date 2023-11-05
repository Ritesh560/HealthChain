import React, { useState, useEffect } from "react";
import * as ethers from "ethers";
import { contractAbi, contractAddress } from "../utils/constants";
export const Web3Context = React.createContext();

const { ethereum } = window;

const getEthererumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );

  return transactionContract;
};

export const Web3Provider = ({ children }) => {
  const [user, setUser] = useState({});
  const [connectedAccount, setConnectedAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please Install metamask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setConnectedAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
      console.log(accounts);
    } catch (error) {
      throw new Error("No ethereum object.");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please Install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setConnectedAccount(accounts[0]);
      console.log("connected", accounts);
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object.");
    }
  };
  const getStatus = async () => {
    try {
      const contract = getEthererumContract();
      const data = await contract.getStatus();
      setUser({ role: data });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPatients = async () => {
    try {
      const contract = getEthererumContract();
      const data = await contract.getAllPatients();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const createDoctor = async (name, age, gender, hospital) => {
    try {
      const contract = getEthererumContract();
      const transaction = await contract.createDoctor(
        name,
        age,
        gender,
        hospital,
        {
          gasPrice: ethers.utils.parseUnits("50", "gwei"),
          gasLimit: 1000000,
        }
      );
      const transactionReceipt = await transaction.wait();
      if (transactionReceipt.status !== 1) {
        alert("error message");
        return;
      }
      console.log(transactionReceipt);
    } catch (error) {
      console.log(error);
    }
  };

  const createPatient = async (name, age, gender) => {
    try {
      const contract = getEthererumContract();
      const transaction = await contract.createPatient(name, age, gender, {
        gasPrice: ethers.utils.parseUnits("50", "gwei"),
        gasLimit: 1000000,
      });
      const transactionReceipt = await transaction.wait();
      if (transactionReceipt.status !== 1) {
        alert("error message");
        return;
      }
      console.log(transactionReceipt);
    } catch (error) {
      console.log(error);
    }
  };

  const getDoctor = async () => {
    try {
      const contract = getEthererumContract();
      const data = await contract.getDoctor();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPatient = async () => {
    try {
      const contract = getEthererumContract();
      const data = await contract.getPatient();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <Web3Context.Provider
      value={{
        connectWallet,
        connectedAccount,
        getStatus,
        getAllPatients,
        createDoctor,
        createPatient,
        getDoctor,
        getPatient,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
