import { Box, Button, Center, Flex, Icon, Text } from "@chakra-ui/react";
import Header from "./Header";
import Actions from "./Actions";
import Payment from "utils/payment";
import { useState } from "react";
import { FaCalendar } from "react-icons/fa";

export default function Post({ post }) {
  const { text } = post;
  const [showDonation, setShowDonation] = useState(true);
  return (
    <Box p="2" maxW="600px" textAlign="left">
      <Box border="2px solid" borderColor="gray.100" borderRadius="md">
        <Header post={post} />

        <Box p="2" minH="100px">
          <Text wordBreak="break-word" fontSize="md">
            {text}
          </Text>

          {post.event && (
            <Flex
              alignItems={"baseline"}
              alignContent={"center"}
              justifyContent={"space-between"}
              mt={4}
            >
              <Box
                border={"1px green solid"}
                color={"green"}
                fontWeight={"semibold"}
                rounded={"md"}
                width={"max-content"}
                p={1}
                colorScheme="green"
              >
                <Icon as={FaCalendar} mr={2} />
                {post.eventDate.split("T")[0]}
              </Box>
              <Button
                colorScheme="green"
                size="sm"
                mt={4}
                // onClick={
                //   showDonation ? setShowDonation(false) : setShowDonation(true)
                // }
              >
                <a href="https://fir-9-82868.web.app/payment">
                  {showDonation ? "Donate" : "Remove Donation"}
                </a>
              </Button>
            </Flex>
          )}
        </Box>

        <Actions post={post} />
      </Box>
    </Box>
  );
}
