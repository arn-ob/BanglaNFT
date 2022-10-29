import { message } from "antd";
import React, { useState } from "react";
import Web3 from "web3";
import Web3Utils from 'web3-utils';

import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../constants";

import axios from "axios";
import { rPost } from "ssr-fetch";

export default function Tenet({ tenet }) {

    const [walletAddress, setWalletAddress] = useState();

    const ether = '0.000001';

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


    const writeData = async (item) => {

        message.destroy();
        message.loading("Please wait...")

        await connectMeta();

        const contract = getContract();

        message.destroy();

        contract.methods
            .ChangeState(100)
            .send({
                from: walletAddress,
                value: Web3Utils.toWei(ether, 'ether'),
            })
            .then(async (res) => {
                await rPost('/trax', { 
                    from: walletAddress, 
                    coin: ether, 
                    userdetails: JSON.stringify(item), 
                    blockRec: JSON.stringify(res), 
                    date: new Date(),
                })    
                console.log(JSON.stringify(res));
            })
            .catch((err) => console.log(err));
    };


    return (
        <div className="bg-opacity-10">
            <div className="grid grid-cols-1 md:lg:xl:grid-cols-4 group">
                {
                    Array.isArray(tenet) && tenet.length !== 0 && tenet.map(item => {
                        return (
                             <div className="border m-2 shadow p-10 flex flex-col items-center text-center group">
                                {console.log(item)}
                            
                                <span className="p-5 rounded-full bg-red-300 text-white shadow-lg shadow-red-200">
                                    <img
                                        className="h-10 w-10"
                                        src="https://img.icons8.com/office/16/000000/human-head.png"
                                    />
                                </span>

                                <p className="text-xl font-medium text-slate-700 mt-3">
                                    {item.fst_name}
                                </p>
                                <p className="mt-2 text-sm text-slate-500">
                                    Total ETH: 0.000001
                                </p>

                                <div className="mt-2">
                                    <button 
                                        className="inline-block w-full px-2 py-2 font-medium text-center text-white transition duration-200 bg-gray-600 rounded-lg hover:bg-gray-500 ease" 
                                        onClick={() => writeData(item)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}