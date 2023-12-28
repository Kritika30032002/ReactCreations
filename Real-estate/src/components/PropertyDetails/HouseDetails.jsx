import { Stack, VStack, Heading, Text, Box, HStack, Image, Input, Textarea, Button } from "@chakra-ui/react"
import { BiBed, BiBath, BiArea } from "react-icons/bi";

import { useContext } from "react";
import { useParams } from "react-router-dom";

import { HouseContext } from "../../context/HouseContext";
import Form from "./Form";

const HouseDetails = () => {

  const {propertyId} = useParams();
  const { houses } = useContext(HouseContext);

  const searchedHouse = houses.find(house=> house.id== propertyId)

  return (
    <>
      <Stack direction={{base: 'column', md: 'row'}} justify='space-between' align={{md: 'center'}}  my='28px'>
        <Box>
          <Heading fontSize='22px'>{searchedHouse.name}</Heading>
          <Text fontSize='15px'>{searchedHouse.address}</Text>
        </Box>
        
        <HStack>
          <Text px='3' borderRadius='full' bg='green.300'>{searchedHouse.type}</Text>
          <Text px='3' borderRadius='full' bg='purple.300'>{searchedHouse.country}</Text>
        </HStack>

        <Text fontWeight="extrabold" fontSize="20px" color="blue.500">Rs. {searchedHouse.price}</Text>
      </Stack>

      <Stack direction={{base:'column', lg: 'row'}} gap='6' align='flex-start'>
        <VStack align='left' maxW='640px'>
          <Image src={searchedHouse.imageLg} alt='house' />

          <Stack py='10px' spacing={{sm: '3', md: '5'}} direction={{base: 'column', md: 'row'}}>
            <HStack>
                <BiBed style={{ color: "#D53F8C" }} />
                <Text fontSize="14px">{searchedHouse.bedrooms} Bedrooms</Text>
            </HStack>

            <HStack>
                <BiBath style={{ color: "#D53F8C" }} />
                <Text fontSize="14px">{searchedHouse.bathrooms} Bathrooms</Text>
            </HStack>

            <HStack>
                <BiArea style={{ color: "#D53F8C" }} />
                <Text fontSize="14px">{searchedHouse.surface}</Text>
            </HStack>
          </Stack>
        
          <Text fontSize='15px'>{searchedHouse.description}</Text>
      
        </VStack>
        
        <Form searchedHouse={searchedHouse} />
      </Stack>
    </>
  )
}

export default HouseDetails;