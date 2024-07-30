import React from 'react'
import { ethers, Contract } from 'ethers';
import stakingABI from '../ABI/stakingABI.json';
import stakingTokenABI from '../ABI/stakingTokenABI.json';

export const connectWallet = async() => {

  try{
    let {signer, provider, stakingContract, stakingTokenContract, chainId} = {};
    if(!window.ethereum){
      throw  new Error("Install Metamask!");
    }
    const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
    const chainIdHex = await window.ethereum.request({method: 'eth_chainId'});

    chainId = parseInt(chainIdHex, 16);
    let selectedAccount = accounts[0];
    if(!selectedAccount)throw new Error ("Add account to your wallet!");

    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
    const stakingContractAddress = '0xc737e150056fF49A6048a746E4f3A924c1Ddb416';
    const stakingTokenContractAddress = '0xCd0c1f0214a028e762aF024f68883FEbA01dF920';

    stakingContract = new Contract(stakingContractAddress, stakingABI, signer);
    stakingTokenContract = new Contract(stakingTokenContractAddress, stakingTokenABI, signer);
    return {signer, selectedAccount, stakingContract, stakingTokenContract, chainId};
  }catch(error){
    console.log("Error connecting to metamask!");
  }
}

