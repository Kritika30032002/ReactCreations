import { makeStyles } from '@material-ui/core'
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import React, { useEffect, useState } from 'react'
import { Cryptostate } from '../../CryptoContext'
import { TrendingCoins} from '../../config/api'
import AliceCarousel from 'react-alice-carousel'

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  //its simply a regex to include commas between digits
const useStyles=makeStyles((theme)=>({
    carousel: {
        height: "50%",
        display: "flex",
        alignItems :"center"

    },
    carouselItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        textTransform: "uppercase",
        color: "white",
      },
}))
const Carousel = () => {
    const [trending, settrending] = useState([])
    const classes=useStyles()

    const {currency,symbol}=Cryptostate();
    const fetchTrendingCoins=async()=>{
   const {data}=await axios.get(TrendingCoins(currency));
   settrending(data);
    };
    console.log(trending);
    useEffect(()=>{
    fetchTrendingCoins();
    },[])

    const items=trending.map((coin)=>{
        let profit =coin.price_change_percentage_24h>=0

        return (
            <a className={classes.carouselItem} href={`/coins/${coin.id}`}>
            <img src={coin?.image}
            alt={coin.name}
            height="80"
            style={{ marginBottom: 10}}
            />
                <span>
                {coin?.symbol}
                &nbsp;
                <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
                {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
                </span>
                </span>
                <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
            </a>
        )
    })
    const responsive={
        0:{
            items:2
        },
        512: {
            items: 4,
        },
    };
  return (
    <div className={classes.carousel}>
      <AliceCarousel disableButtonsControls mouseTracking infinite autoPlayInterval={1000} animationDuration={1500} disableDotsControls responsive={responsive} autoPlay items={items}/>
    
    </div>
  )
}

export default Carousel
