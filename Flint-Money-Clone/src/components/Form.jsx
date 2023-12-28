import { Stack, Button, Input} from "@chakra-ui/react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Form = () => {
  return (
    <Stack direction={{base: 'column', lg: 'row'}} spacing="6" justify="space-between">
        <Input
            size="lg"
            borderColor="whiteAlpha.400"
            focusBorderColor="whiteAlpha.600"
            borderRadius="25px"
            bg="blackAlpha.500"
            type="email"
            placeholder="Enter your email"
        />
        <Button
            px="20"
            py="6"
            borderRadius="25px"
            color="black"
            _hover={{
                boxShadow:
                "rgb(88, 88, 88) 0px 0px 25px, rgb(88, 88, 88) 0px 0px 50px",
            }}
            rightIcon={<MdOutlineArrowRightAlt style={{ fontSize: "35px" }} />}
        >
            Start earning
        </Button>
    </Stack>
  )
}

export default Form