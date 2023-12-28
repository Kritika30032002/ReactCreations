import { VStack, Flex, Stack, Heading, Text, Image } from "@chakra-ui/react";

import { featureDetails } from "../data";
import image from '../assets/img.png'

const Features = () => {
  return (
    <Flex bg="black" px="8%" pt='8%' w="100%" color='white' gap={{md: '5', lg: ''}}>
      <Stack w="50%" display={{base: 'none', lg: 'block'}}>
        <VStack w="100%" position="sticky" top="10px" h="100vh" justify='center'>
            <Image src={image} alt='image' boxSize='300px'  />
        </VStack>
      </Stack>
      <VStack w={{base: '100%', lg: '50%'}} >
        {
            featureDetails.map(item=> 
                <VStack key={item.title} w='100%' h={{ base: '50%', lg: '100vh'}} justify='center' align='left' p='6%' spacing='6'>
                    <Heading letterSpacing='-2px' fontSize={{base: '3xl', lg: '4xl', xl: '5xl'}}>{item.title}</Heading>
                    <Text color='whiteAlpha.600' fontSize={{base: 'md', md: 'lg', lg: 'xl'}}>{item.text}</Text>
                </VStack>
            )
        }
      </VStack>
    </Flex>
  );
};

export default Features;
