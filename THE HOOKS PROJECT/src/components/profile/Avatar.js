import { Avatar as ChakraAvatar } from "@chakra-ui/react";
import { PROTECTED } from "lib/routes";
import { Link } from "react-router-dom";

export default function Avatar({ user, size = "xl", overrideAvatar = null }) {
  return (
    <ChakraAvatar
      as={Link}
      to={`${PROTECTED}/profile/${user.id}`}
      name={user.username}
      size={size}
      src={overrideAvatar || user.avatar}
      _hover={{ cursor: "pointer", opacity: "0.8" }}
    />
  );
}
