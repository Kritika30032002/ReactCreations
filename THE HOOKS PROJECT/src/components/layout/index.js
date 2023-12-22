import { LOGIN } from "lib/routes";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "hooks/auth";
import Navbar from "components/layout/Navbar";
import Sidebar from "components/layout/Sidebar";
import { Box, Flex } from "@chakra-ui/react";

export default function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && pathname.startsWith("/protected") && !user) {
      navigate(LOGIN);
    }
  }, [pathname, user, isLoading]);

  if (isLoading) return "Loading auth user...";

  return (
    <>
      <Navbar />
      <Flex pt="16" pb="12" mx="auto" w="full" maxW="1200px">
        <Box w="900px">
          <Outlet />
        </Box>
        <Sidebar />
      </Flex>
    </>
  );
}
