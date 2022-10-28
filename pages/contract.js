import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Web3Utils from 'web3-utils';

import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../constants";


export default function Home() {

  const [walletAddress, setWalletAddress] = useState();

  useEffect(() => {
    connectMeta();
  }, []);

  let provider = typeof window !== "undefined" && window.ethereum;

  const connectMeta = async () => {
    try {
      if (!provider) return alert("Please Install MetaMask");

      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length) {
        setWalletAddress(accounts[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getContract = () => {
    const web3 = new Web3(provider);

    return new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
  };


  const writeData = () => {
    const contract = getContract();

    contract.methods
      .ChangeState(100)
      .send({
        from: walletAddress,
        value: Web3Utils.toWei('0.00005', 'ether'),
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };


  return (
    <>


      <div className="container">
        <div>
          <button className="btn" onClick={writeData}>
            MetaMask-Test
          </button>
        </div>
      </div>
    </>

  );
}
