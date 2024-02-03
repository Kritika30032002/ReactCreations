import { useRef } from 'react';
import { FiMenu } from 'react-icons/fi';

import { Text, VStack, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Button, IconButton, useDisclosure, Center } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const NavMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  
  return (
    <>
        <IconButton variant='ghost' 
            _hover={{ bg: "whiteAlpha.500" }}
            _active={{ transform: "scale(0.98)"}}
            icon={<FiMenu fontSize='1.35rem' />}
            aria-label='Open Menu'
            onClick={onOpen} ref={btnRef}
        />
        <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent bg='black' color='white'>
                <DrawerCloseButton />
                <Center>
                <DrawerHeader>Menu</DrawerHeader>
                </Center>
                <DrawerBody mt='6'>
                    <VStack
                        as="nav"
                        spacing="9"
                    >
                        <NavLink to="/" onClick={onClose}> Home </NavLink>
                        <NavLink to="/about" onClick={onClose}>About Us</NavLink>
                        <Text>FAQ</Text>
                        <Text>Roadmap</Text>
                        <Text>Interest</Text>
                        <Text>Blog</Text>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default NavMobile