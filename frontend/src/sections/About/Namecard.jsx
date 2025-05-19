import {
  HStack,
  VStack,
  Stack,
  Box,
  Image,
  Heading,
  Button,
  Text,
  GridItem,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';

import { AiFillCode } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { IoMdDownload } from 'react-icons/io';
import profilePic from '../../assets/profile-picture.jpg';
import CV from '../../assets/downloads/DOMINIC-ESGUERRA-CV.pdf';

function Namecard() {
  function downloadCV() {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'DOMINIC_ESGUERRA_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <GridItem
      className="block"
      rowSpan={useBreakpointValue({
        base: 1,
        sm: 1,
        md: 1,
        lg: 2,
      })}
      colSpan={useBreakpointValue({
        base: 1,
        sm: 1,
        md: 1,
        lg: 3,
      })}
      borderRadius="2xl"
      bg={useColorModeValue('#e5ded2', 'gray.700')}
    >
      <VStack
        h="full"
        p={10}
        py={{ base: 8, sm: 10, md: 10, lg: 4 }}
        mx="auto"
        justifyContent="center"
        gap={10}
      >
        <Stack
          direction={{
            base: 'row',
            sm: 'row',
            md: 'column',
            lg: 'row',
          }}
          className="no-select"
          overflow="hidden"
          gap={4}
          justifyContent="center"
          alignItems="center"
        >
          <Box className="profile-pic-container" cursor="pointer">
            <Image
              src={profilePic}
              alt="profile-picture"
              boxSize={{ base: '150px' }}
              maxWidth={150}
              borderRadius="full"
              objectFit="cover"
            />
          </Box>
          <VStack
            alignItems={{
              base: 'flex-start',
              sm: 'flex-start',
              md: 'center',
              lg: 'flex-start',
            }}
            gap={1}
          >
            <HStack>
              <Heading
                as="h1"
                className="lato"
                fontSize={{ base: '28px', sm: '38px', md: '32px' }}
              >
                Hi, I'm Dominic<span className="wave">👋</span>
              </Heading>
            </HStack>
            <HStack gap={1}>
              <FaLocationDot />
              <Text
                className="open-sans"
                fontSize={{ base: '14px', sm: '18px', md: '16px' }}
              >
                Cavite, Philippines
              </Text>
            </HStack>
            <HStack gap={1}>
              <AiFillCode />
              <Text
                className="open-sans"
                fontSize={{ base: '14px', sm: '18px', md: '16px' }}
              >
                Web Developer | MERN Stack
              </Text>
            </HStack>
            <HStack
              w="full"
              flexDirection="row"
              alignItems="center"
              gap={2}
              pt={2}
            >
              <Button
                onClick={() =>
                  window.open('https://github.com/dominic-myb', '_blank')
                }
              >
                <FaGithub size="20" />
              </Button>

              <Button
                onClick={() =>
                  window.open('https://leetcode.com/desguerra246/', '_blank')
                }
              >
                <SiLeetcode size="20" />
              </Button>

              <Button
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/dominic-esguerra/',
                    '_blank'
                  )
                }
              >
                <FaLinkedin size="20" />
              </Button>
              <Button onClick={() => downloadCV()}>
                <IoMdDownload />
                <Text> &nbsp;Resumé</Text>
              </Button>
            </HStack>
          </VStack>
        </Stack>
      </VStack>
    </GridItem>
  );
}

export default Namecard;
