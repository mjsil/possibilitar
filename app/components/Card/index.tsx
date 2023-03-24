import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Container,
  Flex,
  Button
} from '@chakra-ui/react';
import Image from 'next/image';

import unb from '../../../assets/unb.png';

export default function blogPostWithImage() {
  return (
    <Box backgroundColor={'#F2F0EF'} mt={12}>
      <Container maxW={'7xl'} py={20}>
        <Stack spacing={4}>
          <Heading>Explore top courses</Heading>
        </Stack>
        <Flex flexWrap="wrap" mt={12} gridGap={6} justify="center">
          <Box
            maxW={'280px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'md'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            <Box
              h={'150px'}
              bg={'gray.100'}
              mt={-6}
              mx={-6}
              mb={6}
              pos={'relative'}
              align={'center'}>
              <Avatar
                size={'2xl'}
                src={
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg/640px-Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg.png'
                }
                alt={'Author'}
                css={{
                  border: '2px solid white',
                }}
              />
            </Box>
            <Stack>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Ciência da Computação
              </Heading>
              <Text
                color={'orange.400'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}>
                UnB
              </Text>
              <Text color={'gray.500'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              </Text>
            </Stack>
          </Box>

          <Box
            maxW={'280px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'md'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            <Box
              h={'150px'}
              bg={'gray.100'}
              mt={-6}
              mx={-6}
              mb={6}
              pos={'relative'}
              align={'center'}>
              <Avatar
                size={'2xl'}
                src={
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg/640px-Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg.png'
                }
                alt={'Author'}
                css={{
                  border: '2px solid white',
                }}
              />
            </Box>
            <Stack>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Ciência da Computação
              </Heading>
              <Text
                color={'orange.400'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}>
                UnB
              </Text>
              <Text color={'gray.500'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              </Text>
            </Stack>
          </Box>
          <Box
            maxW={'280px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'md'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            <Box
              h={'150px'}
              bg={'gray.100'}
              mt={-6}
              mx={-6}
              mb={6}
              pos={'relative'}
              align={'center'}>
              <Avatar
                size={'2xl'}
                src={
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg/640px-Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg.png'
                }
                alt={'Author'}
                css={{
                  border: '2px solid white',
                }}
              />
            </Box>
            <Stack>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Ciência da Computação
              </Heading>
              <Text
                color={'orange.400'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}>
                UnB
              </Text>
              <Text color={'gray.500'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              </Text>
            </Stack>
          </Box>
          <Box
            maxW={'280px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'md'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            <Box
              h={'150px'}
              bg={'gray.100'}
              mt={-6}
              mx={-6}
              mb={6}
              pos={'relative'}
              align={'center'}>
              <Avatar
                size={'2xl'}
                src={
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg/640px-Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg.png'
                }
                alt={'Author'}
                css={{
                  border: '2px solid white',
                }}
              />
            </Box>
            <Stack>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Ciência da Computação
              </Heading>
              <Text
                color={'orange.400'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}>
                UnB
              </Text>
              <Text color={'gray.500'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              </Text>
            </Stack>
          </Box>
        </Flex>
        <Stack mt={12} align='center'>
          <Button colorScheme='orange' variant='outline'>
            Explore more Executive Education
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}