import React from 'react'
import { useContext, useEffect, useState } from 'react';
import {Web3Context} from '../Wallet';
import { ethers } from 'ethers';
const StakedAmount = () => {
  const {stakingContract, selectedAccount} = useContext(Web3Context);
  const [stakedAmount, setStakedAmount] = useState('0');
  console.log(selectedAccount, stakingContract)
  useEffect(()=>{
    const fetchStakedBalance = async() =>{
      try{
        const amountStaked = await stakingContract.stakedBalance(selectedAccount);
        console.log('staked amount:', amountStaked);
      }catch(error){
        alert(error)
      }
    }
    fetchStakedBalance()
  },[stakingContract])
  return (
    <div>
      
    </div>
  )
}

export default StakedAmount
