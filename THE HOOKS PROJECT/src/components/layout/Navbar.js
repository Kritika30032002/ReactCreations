import { Button, Flex, Link } from "@chakra-ui/react";
import { DASHBOARD } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useLogout } from "hooks/auth";

export default function Navbar() {
  const { logout, isLoading } = useLogout();

  return (
    <Flex
      shadow="sm"
      pos="fixed"
      width="full"
      borderTop="6px solid"
      borderTopColor="teal.400"
      height="16"
      zIndex="3"
      justify="center"
      bg="white"
    >
      <Flex px="4" w="full" align="center" maxW="1200px">
        <Link color="teal" as={RouterLink} to={DASHBOARD} fontWeight="bold">
          Home
        </Link>
        <Button
          ml="auto"
          colorScheme="teal"
          size="sm"
          onClick={logout}
          isLoading={isLoading}
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
}
