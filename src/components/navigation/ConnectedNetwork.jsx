import React, { useContext } from 'react'
import { Web3Context } from '../Wallet'

const ConnectedNetwork = () => {
    const {chainId} = useContext(Web3Context);
  return (
    <div>
      <p>Chain ID: {chainId}</p>
    </div>
  )
}

export default ConnectedNetwork
