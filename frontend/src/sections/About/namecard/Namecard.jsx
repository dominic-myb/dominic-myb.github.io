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

import profilePic from '@/assets/profile-picture.jpg';
import CV from '@/assets/downloads/DOMINIC-ESGUERRA-CV.pdf';
import { useEffect, useState } from 'react';

function SocialLink({ link, Component }) {
  return (
    <Button onClick={() => window.open(link, '_blank')}>
      <Component size="20" />
    </Button>
  );
}

function Namecard() {
  const [isWaving, setIsWaving] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsWaving((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
      borderRadius="xl"
      bg="rgba(255, 255, 255, 0.05)"
      backdropFilter="blur(12px)"
      border="1px solid rgba(255, 255, 255, 0.1)"
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
                Hi, I'm Dominic
                <span
                  cursor="pointer"
                  className={`wave ${isWaving ? 'hand-wave' : ''}`}
                >
                  👋
                </span>
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
              {[
                { link: 'https://github.com/dominic-myb', component: FaGithub },
                {
                  link: 'https://leetcode.com/desguerra246/',
                  component: SiLeetcode,
                },
                {
                  link: 'https://www.linkedin.com/in/dominic-esguerra/',
                  component: FaLinkedin,
                },
              ].map((item, idx) => (
                <SocialLink
                  key={idx}
                  link={item.link}
                  Component={item.component}
                ></SocialLink>
              ))}
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
