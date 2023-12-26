import { VStack, Stack} from "@chakra-ui/react";

const Intro = (props) => {
    return (
        <Stack bg="black" pt={{sm:'10px', lg: '30px'}} color="white" position='relative' overflow='hidden'>
          {props.shades}
          {props.images}
    
          <VStack h='100vh' align="center" justify="center">
            {props.content}
            
            <Stack direction="row" spacing="8" justify="space-between">
              {props.form}
            </Stack>
          </VStack>
        </Stack>
    );
}

export default Intro;