import {
  HStack,
  VStack,
  Button,
  Text,
  Heading,
  Stack,
  Box,
  Image,
} from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";

import { bannerData } from "../data";
import Apartment1Lg from "../assets/images/apartments/a1lg.png";
import Apartment6Lg from "../assets/images/apartments/a6lg.png";

const Banner = () => {
  return (
    <>
      <Stack direction="row" my='6' overflow='hidden'>
        <VStack
          flexGrow='1'
          px={{ sm: "6", md: "10" }}
          py={{ sm: '8',  md: "16" }}
          bg="blue.100"
          justify="center"
          align="left"
          borderRadius="xl"
        >
          <Heading fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}>
            Find Real Estate That Suits You.
          </Heading>
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            fugit illo? Delectus, voluptas unde quae cupiditate at amet beatae
            totam!
          </Text>
          <Box pt="3" pb="8">
            <Button>Get Started</Button>
          </Box>
        </VStack>

        <VStack justify='center'>
          <Box h='100%' display={{ base: "none", lg: "block", xl:'none' }} >
            <Image
              src={Apartment1Lg}
              alt="house"
              h='100%'
              objectFit='cover'
            />
          </Box>
          <Box h='50%' display={{ base: "none", xl: "block" }}>
            <Image
              src={Apartment1Lg}
              alt="house"
              style={{height: '100%', width: '100%', objectFit: 'contain'}}
            />
          </Box>
          <Box h='50%' display={{ base: "none", xl: "block" }}>
            <Image
              src={Apartment6Lg}
              alt="house"
              style={{height: '100%', width: '100%', objectFit: 'contain'}}
            />
          </Box>
        </VStack>
      </Stack>
    </>
  );
};

export default Banner;
