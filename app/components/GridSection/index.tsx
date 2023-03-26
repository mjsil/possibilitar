import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';
  import {
    FcAbout,
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
  } from 'react-icons/fc';
  
  interface CardProps {
    heading: string;
    description: string;
    icon: ReactElement;
    href: string;
  }
  
  const Card = ({ heading, description, icon, href }: CardProps) => {
    return (
      <Box
        maxW={{ base: 'full', md: '190px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}>
        <Stack align={'center'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={'gray.100'}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
          </Box>
        </Stack>
      </Box>
    );
  };
  
  export default function gridListWith() {
    return (
      <Box p={4}>
        <Container maxW={'5xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={'Heading'}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description={
                'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              }
              href={'#'}
            />
            <Card
              heading={'Heading'}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              }
              href={'#'}
            />
            <Card
              heading={'Heading'}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              }
              href={'#'}
            />
            <Card
              heading={'Heading'}
              icon={<Icon as={FcManager} w={10} h={10} />}
              description={
                'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              }
              href={'#'}
            />
          </Flex>
        </Container>
        <Stack mt={6} spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis.
          </Text>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn more
          </Button>
        </Stack>
      </Box>
    );
  }