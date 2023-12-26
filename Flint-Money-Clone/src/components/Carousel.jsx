import { Stack, keyframes, Box, Image } from "@chakra-ui/react"

import binance from '../assets/binance.png';
import coinbase from '../assets/coinbase.png';
import ftx from '../assets/ftx.png';
import polygon from '../assets/polygon.png';
import solana from '../assets/solana.png';

const Carousel = () => {

    const rotate = keyframes`
    0% { transform: translate(7px); }
    25% { transform: translate(14px); }
    50% { transform: translate(21px); }
    75% { transform: translate(14px); }
    100% { transform: translate(7px); }
  `;

  const styles = {
    pos: 'absolute',
    w: '80px',
    h: '80px',
    maxH: '12vw',
    maxW: '12vw',
    animation: `${rotate} 2s linear infinite`
  }

  return (
    <Stack pos='absolute' left='130px' w='100%' h='50%' border='1px dashed grey' borderRadius='50% 60%' transform='rotate(10deg)' >
        <Image sx={styles} src={ftx} alt='ftx' title='ftx' top='-12%' left='54%' />
        <Image sx={styles} src={solana} alt='solana' title='solana' top='-12%' left='22%' />
        <Image sx={styles} src={binance} alt='binance' title='binance' top='36%' left='-6%' />
        <Image sx={styles} src={coinbase} alt='coinbase' title='coinbase' top='76%' left='20%' />
        <Image sx={styles} src={polygon} alt='polygon' title='polygon' top='80%' left='56%' />
    </Stack>
  )
}

export default Carousel