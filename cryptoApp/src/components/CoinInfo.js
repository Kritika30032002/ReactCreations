import React from 'react'
import { useState } from 'react';
import { Cryptostate } from '../CryptoContext';
import { HistoricalChart } from '../config/api';
import axios from 'axios';
import { CircularProgress, createTheme, makeStyles } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { Line } from 'react-chartjs-2';
import { useEffect } from 'react';
import SelectButton from './SelectButton';
import { chartDays } from "../config/data";
import { CryptoState } from "../CryptoContext";
const CoinInfo = ({coin}) => {
  
  const [historicdata, sethistoricdata] = useState(null);
  const [days, setDays] = useState(1);
  const {currency} =Cryptostate();
  const [flag,setflag] = useState(false);
  const fetchHistoricalData=async()=>{
    const {data}=await axios.get(HistoricalChart(coin.id,days,currency))
    sethistoricdata(data.prices)
  }
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  const useStyles=makeStyles((theme)=>({
    container: {
    width: "75%",
    display: "flex",
    flexdirection: "column",
    alignitems:"center",
    marginTop:25,
    padding :40,
    [theme.breakpoints.down("md")]:{
      width: "100%",
      marginTop: 0,
      padding: 20
    },
  },
  }));
  // const fetchHistoricData = async () => {
  //   const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
  //   setflag(true);
  //   sethistoricdata(data.prices);
  // };

  console.log(coin);

  useEffect(() => {
    fetchHistoricalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);
console.log(historicdata);
  const classes=useStyles();
  return (

    <ThemeProvider theme={darkTheme}>
    <div className={classes.container}>
      {!historicdata || flag===false ? (
        <CircularProgress
          style={{ color: "gold" }}
          size={250}
          thickness={1}
        />
      ) : 
      (
        <>
          <Line
            data={{
              labels: historicdata.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: historicdata.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days ) in ${currency}`,
                  borderColor: "#EEBC1D",
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {chartDays.map((day) => (
              <SelectButton
                key={day.value}
                onClick={() => {setDays(day.value);
                  setflag(false);
                }}
                selected={day.value === days}
              >
                {day.label}
              </SelectButton>
            ))}
          </div>
        </>
      )}
    </div>
  </ThemeProvider>
);
};

export default CoinInfo;