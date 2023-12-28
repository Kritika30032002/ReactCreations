import {Box} from "@chakra-ui/react";

const Shades = () => {
  return (
    <>
        <Box
          position="absolute"
          left='5%'
          bottom="-20%"
          bgGradient="radial-gradient(rgb(209 111 151 / 30%),transparent, transparent);"
          w="70%"
          h="100%"
        ></Box>
        <Box
          position="absolute"
          right='5%'
          bottom="-20%"
          bgGradient="radial-gradient(rgb(91 128 200 / 30%),transparent, transparent);"
          w="70%"
          h="100%"
        ></Box>
    </>
  )
}

export default Shades