import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

import {CoinList,fetchCoins} from './config/api'
const crypto=createContext()
const CryptoContext = ({children}) => {
    const [currency, setcurrency] = useState("INR")
    const [symbol, setsymbol] = useState("₹")
    const [coins, setcoins] = useState([]);
    const [loading, setloading] = useState(false);
    const [user, setuser] = useState(null);
    
    const [alert, setalert] = useState({
      open:false,
      message: "",
      type:"success",
    })
    const fetchCoins=async()=>{
      setloading(true);
      const {data} =await axios.get(CoinList(currency));
      setcoins(data);
      setloading(false);
  }
    useEffect(()=>{
if(currency==="INR")
setsymbol("₹")
else if(currency==="USD")
setsymbol("$")
    },[currency])
  return (
   <crypto.Provider value={{currency,symbol,setcurrency,coins,loading,fetchCoins,alert,setalert}}>
 {children}
   </crypto.Provider>
  )
}

export default CryptoContext;

export const Cryptostate=()=>{
    return useContext(crypto);
}
