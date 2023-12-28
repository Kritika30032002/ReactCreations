import { Flex, VStack, Heading, Text } from "@chakra-ui/react";

import { partnerDetails } from "../data";
import Carousel from "./Carousel";

const Partners = () => {
  return (
    <>
      <Flex
        h="85vh"
        bg="black"
        w="100%"
        color="white"
        align="center"
        direction={{base:'column', lg: 'row'}}
        justify="space-between"
        gap={{base: '5', lg: '0'}}
      >
        <VStack pl="10%" pr="10" w={{base: '80%', lg:'50%'}} align="left" spacing="10">
          <Heading fontSize={{base: '3xl', md: '2xl', lg: '5xl'}}>{partnerDetails[0].title}</Heading>
          <Text
            color="whiteAlpha.700"
            letterSpacing="0.5px"
            lineHeight="2"
            fontSize={{base: 'md', md: 'lg', lg: 'xl'}}
          >
            {partnerDetails[0].text}
          </Text>
        </VStack>
        <VStack
          w={{base: '100%', lg:'50%'}}
          h='100%'
          pos="relative"
          overflow="hidden"
          align="flex-end"
          justify="center"
        >
          <Carousel />
        </VStack>
      </Flex>
    </>
  );
};

export default Partners;
