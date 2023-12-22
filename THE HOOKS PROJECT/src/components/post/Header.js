import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Avatar from "components/profile/Avatar";
import { useUser } from "hooks/users";
import { formatDistanceToNow, set } from "date-fns";
import UsernameButton from "components/profile/UsernameButton";
import { useVolunteer } from "hooks/posts";
import { useAuth } from "hooks/auth";

export default function Header({ post }) {
  const { uid, date, eventDate, id, volunteer: volunteers } = post;
  const { user, isLoading } = useUser(uid);
  const { user: authUser } = useAuth();
  let volunteered = false;
  if (volunteers) {
    volunteered = volunteers.includes(authUser?.id);
  }
  const config = { id: id, isLiked: volunteered, uid: authUser?.id };
  const { volunteer, isLoading: volunteering } = useVolunteer(config);
  if (isLoading) return "Loading...";

  return (
    <Flex
      alignItems="center"
      borderBottom="2px solid"
      borderColor="teal.100"
      p="3"
      bg="gray.50"
    >
      <Avatar user={user} size="md" />

      <Box ml="4">
        <UsernameButton user={user} />
        <Text fontSize="sm" color="gray.500">
          {formatDistanceToNow(date)} ago
        </Text>
      </Box>

      {!authUser.ngo && eventDate && (
        <Button
          ml="auto"
          colorScheme={volunteered ? "red" : "teal"}
          size="sm"
          onClick={volunteer}
        >
          {volunteered ? "Unvolunteer" : "Volunteer"}
        </Button>
      )}
    </Flex>
  );
}
