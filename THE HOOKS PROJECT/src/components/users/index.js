import { SimpleGrid } from "@chakra-ui/react";
import { useUsers } from "hooks/users";
import User from "./User";

export default function Users() {
  const { users, isLoading } = useUsers();

  if (isLoading) return "Loading...";

  return (
    <SimpleGrid columns={[2, 3, 4]} spacing={[2, 3]} px="10px" py="6">
      {users?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </SimpleGrid>
  );
}
