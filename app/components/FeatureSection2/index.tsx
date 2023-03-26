import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    Box,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function FeatureSection() {
    return (
      <Box w={'full'} backgroundColor={'#F2F0EF'} mt={12}>
        <Container maxW={'5xl'} py={20}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={12}>
            <Stack spacing={4}>
              <Heading>A digital Product design agency</Heading>
              <Text fontSize={'lg'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider />
                }>
                <Feature
                  icon={
                    <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                  }
                  iconBg={'yellow.100'}
                  text={'Business Planning'}
                />
                <Feature
                  icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                  iconBg={'green.100'}
                  text={'Financial Planning'}
                />
                <Feature
                  icon={
                    <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                  }
                  iconBg={'purple.100'}
                  text={'Market Analysis'}
                />
              </Stack>
            </Stack>
            <Flex>
              <Image
                rounded={'md'}
                alt={'feature image'}
                src={
                  'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                }
                objectFit={'cover'}
              />
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }