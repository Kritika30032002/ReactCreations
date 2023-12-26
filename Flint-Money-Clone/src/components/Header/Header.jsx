import { Box, Button, chakra, Container, Flex, HStack, Image, Text, useBreakpointValue} from "@chakra-ui/react";
import { BsArrowRightCircleFill } from "react-icons/bs";

import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import NavMobile from "./NavMobile";

const Header = () => {

  const isDesktop = useBreakpointValue({ base: false, xl: true });

  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? "white" : "",
    borderBottom: isActive ? "1px solid white" : "",
  });

  return (
    <chakra.header bg="black" color="white" zIndex='3' pos="fixed" w="100%" opacity='0.9' borderBottom='1px solid #564f4f' >
      <Container maxW="container.lg">
        <HStack py='5' align='center' justify='space-between'>

          <Link to="/">
            <Box mr="10">
              <Image
                objectFit="contain"
                boxSize="32px"
                src={logo}
                alt="logo"
              />
            </Box>
          </Link>

          {
            isDesktop ? (
              <Flex w='100%' justify='space-between'>
                <HStack
                  color="whiteAlpha.700"
                  fontSize="18px"
                  fontWeight="bold"
                  as="nav"
                  spacing="9"
                >
                  <NavLink style={navLinkStyles} to="/"> Home </NavLink>
                  <NavLink style={navLinkStyles} to="/about">About Us</NavLink>
                  <Text>FAQ</Text>
                  <Text>Roadmap</Text>
                  <Text>Interest</Text>
                  <Text>Blog</Text>
                </HStack>
    
                <Button
                  p="7"
                  bgColor="whiteAlpha.300"
                  rightIcon={<BsArrowRightCircleFill style={{ fontSize: "30px" }} />}
                  borderRadius="30px"
                  _hover={{ bg: "whiteAlpha.500" }}
                  _active={{ transform: "scale(0.98)"}}
                >
                  Start Earning
                </Button>
              </Flex>
            ) : (
              <NavMobile />
            )
          }


        </HStack>

      </Container>
    </chakra.header>
  );
};

export default Header;
