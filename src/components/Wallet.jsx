import React, { Children } from 'react'
import { useState, useEffect } from 'react'
import { connectWallet } from '../utils/connectWallet';
import { handleAccountChange } from '../utils/handleAccountChange';
import { handleChainChange } from '../utils/handleChainChange';
import { createContext } from 'react';
export const Web3Context = createContext();
const Wallet = ({children}) => {

    const [state, setState] = useState({provider: null,
         selectedAccount: null,
          stakingContract: null,
           stakingTokenContract: null,
            chainId: null
         });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      window.ethereum.on('accountsChanged' , () => handleAccountChange(setState));
      window.ethereum.on('chainChanged', () => handleChainChange(setState));

      return () => {
        window.ethereum.removeListener('accountsChanged', () => handleAccountChange(setState));
        window.ethereum.removeListener('chainChanged', () => handleChainChange(setState));
      }

    }, [])
    const handleWallet = async () => {
        try {
            setIsLoading(true);
            const {provider,
                selectedAccount,
                 stakingContract,
                  stakingTokenContract,
                   chainId
                } = await connectWallet();
                
                setState({provider, selectedAccount, stakingContract, stakingTokenContract, chainId});
        }catch(error){}
        finally{
          setIsLoading(false);
        }
       
    } 
  return (
    <div>
      <Web3Context.Provider value = {state}>{children}</Web3Context.Provider>
      {isLoading && <p>Loading...</p>}
      <button onClick={handleWallet} type = 'button'>Connect Wallet</button>
    </div>
  )
}

export default Wallet
