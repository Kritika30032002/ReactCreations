import { Text, Center} from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Center borderTopEndRadius='50%' mt='8' py='20px' bg='blue.700' color='white'>
        <Text fontSize='15px'>Copyright &copy; 2022. All rights reserved.</Text>
      </Center>
    </>
  )
}

export default Footer