import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import PostsList from "components/post/PostsList";
import { usePosts, useEvents } from "hooks/posts";
import { useUser } from "hooks/users";
import { useParams } from "react-router-dom";
import Avatar from "./Avatar";
import { format } from "date-fns";
import EditProfile from "./EditProfile";
import { useAuth } from "hooks/auth";
import { FaStar } from "react-icons/fa";

export default function Profile() {
  const { id } = useParams();
  const { posts, isLoading: postsLoading } = usePosts(id);
  const { posts: volunteer, isLoading: volunteerLoading } = useEvents(id);
  const { user, isLoading: userLoading } = useUser(id);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log("Volunteers", volunteer);
  if (userLoading) return "Loading...";

  const numStar = volunteer.length
    ? volunteer.length.toFixed(0) > 5
      ? 5
      : volunteer.length.toFixed(0)
    : 0;

  const stars = [];
  for (let i = 0; i < numStar; i++) {
    stars.push(<Icon as={FaStar} key={i} color="yellow.500" marginLeft={0} />);
  }
  console.log("numStar", numStar);
  return (
    <Stack spacing="5">
      <Flex p={["4", "6"]} pos="relative" align="center">
        <Avatar size="2xl" user={user} />

        {!authLoading && authUser.id === user.id && (
          <Button
            pos="absolute"
            mb="2"
            top="6"
            right="6"
            colorScheme="teal"
            onClick={onOpen}
          >
            Change avatar
          </Button>
        )}

        <Stack ml="10">
          <HStack spacing="10">
            <Text fontSize="2xl">{user.username}</Text>
            <div>{stars}</div>
          </HStack>
          <HStack spacing="10">
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Posts: {posts.length}
            </Text>
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Volunteering: {volunteer.length}
            </Text>
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Joined: {format(user.date, "MMMM YYY")}
            </Text>
          </HStack>
        </Stack>

        <EditProfile isOpen={isOpen} onClose={onClose} />
      </Flex>
      <Divider />

      {!authUser.ngo && volunteerLoading ? (
        <Text>Posts are loading...</Text>
      ) : (
        <Box border="1px" borderColor="gray.200" m={2}>
          <Heading size={"md"} ml={"5"} mt={5}>
            Volunteering Activity
          </Heading>
          <PostsList posts={volunteer} />
        </Box>
      )}

      {postsLoading ? (
        <Text>Posts are loading...</Text>
      ) : (
        <Box border="1px" borderColor="gray.200" m={2}>
          <Heading size={"md"} ml={"5"} mt={5}>
            Posts
          </Heading>
          <PostsList posts={posts} />
        </Box>
      )}
    </Stack>
  );
}
