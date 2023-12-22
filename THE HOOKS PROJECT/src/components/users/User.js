import { Button, Code, VStack, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PROTECTED } from "lib/routes";
import Avatar from "components/profile/Avatar";
import { useEvents } from "hooks/posts";
import { FaStar } from "react-icons/fa";

export default function User({ user }) {
  const { id, username } = user;
  const { posts: volunteer, isLoading: volunteerLoading } = useEvents(id);

  const numStar = volunteer?.length
    ? volunteer?.length.toFixed(0) > 5
      ? 5
      : volunteer?.length.toFixed(0)
    : 0;

  const stars = [];
  for (let i = 0; i < numStar; i++) {
    stars.push(<Icon as={FaStar} key={i} color="yellow.500" marginLeft={0} />);
  }

  return (
    <VStack
      bg="gray.100"
      shadow="sm"
      rounded="md"
      textAlign="center"
      p="4"
      spacing="3"
    >
      <Avatar user={user} />
      <Code>@{username}</Code>
      <Link>
        <Button
          as={Link}
          to={`${PROTECTED}/profile/${id}`}
          size="sm"
          variant="link"
          colorScheme="teal"
        >
          View Profile
        </Button>
      </Link>
      <div>{stars}</div>
    </VStack>
  );
}
