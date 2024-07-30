import React from 'react'
import { Web3Context } from '../Wallet';
 import { useContext } from 'react';
const ConnectedAccount = () => {
    const {selectedAccount} = useContext(Web3Context);

  return (
    <div>
      <p>Connected Account: {selectedAccount}</p>
    </div>
  )
}

export default ConnectedAccount
