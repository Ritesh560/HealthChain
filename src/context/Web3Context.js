import React, { createContext, useState, useContext, useEffect } from "react";
import initWeb3 from "./web3";
import { toast } from "react-hot-toast";
import HealthChainFactory from "../ethereum/artifacts/contracts/HealthChain.sol/HealthChain.json";

const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState("");
  const [doneCheckingForMetaMask, setDoneCheckingForMetaMask] = useState(false);
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  // const [isGoerliChain, setIsGoerliChain] = useState(false);
  const [healthChainInstance, setHealthChainInstance] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function initWeb3WithProvider() {
      if (web3 === null) {
        if (!cancelled) {
          setDoneCheckingForMetaMask(false);
          const web3Instance = await initWeb3();
          if (web3Instance) {
            setWeb3(web3Instance);
          } else {
            toast("Please install Metamask!");
          }

          // Transactions done in this app must be done on the Goerli test network.
          // try {
          //   const chainId = await window.ethereum.request({
          //     method: "eth_chainId",
          //   });
          //   console.log(chainId);
          //   if (chainId === "0x5") {
          //     setIsGoerliChain(true);
          //   } else {
          //     toast.error("Please change to Goerli Testnet");
          //   }
          // } catch (error) {
          //   toast.error(error.message);
          // }

          setDoneCheckingForMetaMask(true);
        }
      }
    }

    initWeb3WithProvider();

    return () => {
      cancelled = true;
    };
  }, [connected]);

  useEffect(() => {
    const init = async () => {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0 && window.ethereum.isConnected()) {
          setAccount(accounts[0]);
        }
      } catch (error) {
        console.error(error);
        // toast.error(error.message);
      }
    };

    init();
  }, [connected]);

  useEffect(() => {
    if (web3) {
      var instance = new web3.eth.Contract(
        HealthChainFactory.abi,
        "0x0981CA3177A191635e70d2d5d6bf6A3004462EF5" //deployed factory code
      );
      console.log(instance);
      setHealthChainInstance(instance);
    }
  }, [web3]);

  return (
    <Web3Context.Provider
      value={{
        web3,
        doneCheckingForMetaMask,
        connected,
        connecting,
        // isGoerliChain,
        setConnected,
        setConnecting,
        setDoneCheckingForMetaMask,
        // setIsGoerliChain,
        setWeb3,
        account,
        setAccount,
        healthChainInstance,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);
