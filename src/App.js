import React, { useState } from "react";
//import { getAccount } from "simple-web3";
import {ethers} from "ethers";
//import Artifact from "../artifacts/contracts/GoldenMan.sol/GoldenMan.json";
import './App.css'
import { CONTRACT_ABI, CONTRACT_ADDRESS, GAS_LIMIT } from "./config";



function App() 
{

  const [loading, setLoading] = useState(false)
  const mintsAnNFT = async () => {

  try {
    setLoading(true)
//     let ACCOUNT = await getAccount()
// Connect web3
const provider = new ethers.providers.Web3Provider(window.ethereum);

const accounts = await provider.listAccounts();
console.log(accounts[0]);
const ACCOUNT = accounts[0];

const signer = provider.getSigner();


const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    CONTRACT_ABI,
    signer
);


    await contract.mint().send({
      from: ACCOUNT,
      gasLimit: GAS_LIMIT,
      value: 0
    })

      setLoading(false)
      alert('Yayy! minted a GoldenMan')
    } catch (e) {
      setLoading(false)
      console.log(e)
    }
  }

 return (
   loading ? 
  <div className="App">
    <p>Get Ready to mint something cool</p>
   <h1>Minting a Cool NFT</h1>
  </div>
   :
   <div className="App">
    <h1>Mint my NFT</h1>
   <button onClick={mintsAnNFT}>Mint❤️‍🔥❤️‍🔥</button>
  </div >
 );
}

export default App;
