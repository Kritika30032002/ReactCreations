import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
  } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/auth';
import { DASHBOARD, LOGIN, REGISTER } from 'lib/routes';
  export default function Landing() {
    const navigate = useNavigate();
    const { user, isLoading } = useAuth();

    useEffect(() => {
    if (user) {
      navigate(DASHBOARD);
    }
    }, [user, isLoading]);

    const logIn = () => navigate(LOGIN);
    const signUp = () => navigate(REGISTER);
    if (isLoading || !user) return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            The Hook{' '}
            <Text as={'span'} color={'teal.400'}>
              Connecting Happiness
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
          The major goal of “THE HOOK” is to create a platform where we link two human lives with the aim to bring happiness and joy in them. Here we try to link the underprivileged orphaned children with the lonely, disadvantaged elderly.

          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'teal'}
              bg={'teal.400'}
              _hover={{ bg: 'teal.500' }}
              onClick={logIn}
              >
              Log In
            </Button>
            <Button rounded={'full'} px={6} onClick={signUp}>
              Create Account
            </Button>
          </Stack>
          <Flex w={'full'} justifyContent={'center'}>
            {/* <Illustration
              height={{ sm: '24rem', lg: '28rem' }}
              mt={{ base: 12, sm: 16 }}
            /> */}            
            <img src="./home.svg"></img>
          </Flex>
        </Stack>
      </Container>
    );
  }
  
  export const Illustration = (props) => {
    return (
      <Icon
        width="100%"
        viewBox="0 0 702 448"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        >
        <img src="../../../public/home.svg"></img>
      </Icon>
    );
  };