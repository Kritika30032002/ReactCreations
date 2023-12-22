import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import Avatar from "components/profile/Avatar";
import UsernameButton from "components/profile/UsernameButton";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "hooks/auth";
import { useDeleteComment } from "hooks/comments";
import { useUser } from "hooks/users";
import { FaTrash } from "react-icons/fa";

export default function Comment({ comment }) {
  const { text, uid, date, id } = comment;
  const { user, isLoading: userLoading } = useUser(uid);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { deleteComment, isLoading: deleteLoading } = useDeleteComment(id);

  if (userLoading) return "Loading...";

  return (
    <Box px="4" py="2" maxW="600px" mx="auto" textAlign="left">
      <Flex pb="2">
        <Avatar user={user} size="sm" />
        <Box flex="1" ml="4">
          <Flex borderBottom="1px solid" borderColor="teal.100" pb="2">
            <Box>
              <UsernameButton user={user} />
              <Text fontSize="xs" color="gray.500">
                {formatDistanceToNow(date)} ago
              </Text>
            </Box>
            {!authLoading && authUser.id === uid && (
              <IconButton
                size="sm"
                ml="auto"
                icon={<FaTrash />}
                colorScheme="red"
                variant="ghost"
                isRound
                onClick={deleteComment}
                isLoading={deleteLoading}
              />
            )}
          </Flex>
          <Box pt="2" fontSize="sm">
            <Text>{text}</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
