import { Container, Heading, Box, Text, Image, Grid, GridItem, useBreakpointValue, useColorModeValue, HStack, VStack, SimpleGrid, Tooltip, Stack, Button } from '@chakra-ui/react';
import { AiFillCode } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profilePic from '../assets/profile-picture.jpg';
import html5 from '../assets/techstack/html-5.svg';
import css3 from '../assets/techstack/css-3.svg';
import javascript from '../assets/techstack/javascript.svg';
import react from '../assets/techstack/react.svg';
import nodejs from '../assets/techstack/nodejs-icon.svg';
import mongodb from '../assets/techstack/mongodb-icon.svg';
import mysql from '../assets/techstack/mysql.svg';
import php from '../assets/techstack/php.svg';
import cpp from '../assets/techstack/c-plusplus.svg';
import jquery from '../assets/techstack/jquery.svg';
import figma from '../assets/techstack/figma.svg';
import CV from '../assets/DOMINIC_ESGUERRA_CV.pdf';

function About() {
  function downloadCV() {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'DOMINIC_ESGUERRA_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <Container id={'about'} maxW={'container.lg'} h={'100vh'}>
      <Grid
        h={'full'}
        templateRows={useBreakpointValue({
          base: 'repeat(6, 1fr)',
          sm: 'repeat(5, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(5, 1fr)'
        })}
        templateColumns={useBreakpointValue({
          base: '1fr',
          sm: '1fr',
          md: '1fr',
          lg: 'repeat(5, 1fr)'
        })}
        gap={4}
      >
        <GridItem
          rowSpan={useBreakpointValue({
            base: 1,
            sm: 1,
            md: 1,
            lg: 2
          })}
          colSpan={useBreakpointValue({
            base: 1,
            sm: 1,
            md: 1,
            lg: 3
          })}
          borderRadius={'2xl'}
          bg={useColorModeValue('#e5ded2', 'gray.700')}
        >
          <VStack justifyContent={'center'} w={'90%'} h={'full'} p={4} mx={'auto'} gap={10} py={{ base: 8, sm: 10, md: 10, lg: 4 }}>
            <Stack direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }} className={'no-select'} overflow={'hidden'} gap={4} justifyContent={'center'} alignItems={'center'}>
              <Box className={'profile-pic-container'} cursor={'pointer'}>
                <Image
                  src={profilePic}
                  alt={'profile-picture'}
                  boxSize={{ base: '100px', sm: '150px' }}
                  maxWidth={150}
                  borderRadius={'full'}
                  objectFit={'cover'}
                />
              </Box>
              <VStack alignItems={{ base: 'center', sm: 'center', md: 'center', lg: 'flex-start' }} gap={1}>
                <HStack>
                  <Heading as={'h1'} className={'lato'} fontSize={{ base: '28px', sm: '38px' }}>Hi, I'm Dominic<span className='wave'>👋</span></Heading>
                </HStack>
                <HStack gap={1}>
                  <FaLocationDot />
                  <Text className={'open-sans'} fontSize={{ base: '14px', sm: '18px' }}>Cavite, Philippines</Text>
                </HStack>
                <HStack gap={1}>
                  <AiFillCode />
                  <Text className={'open-sans'} fontSize={{ base: '14px', sm: '18px' }}>Web Developer | MERN Stack</Text>
                </HStack>
                <HStack flexDirection={'row'} justifyContent={'space-between'} gap={4} pt={2}>
                  <FaGithub cursor={'pointer'} size={'20'} onClick={() => window.open('https://github.com/dominic-myb', '_blank')} />
                  <SiLeetcode cursor={'pointer'} size={'20'} onClick={() => window.open('https://leetcode.com/desguerra246/', '_blank')} />
                  <FaLinkedin cursor={'pointer'} size={'20'} onClick={() => window.open('https://www.linkedin.com/in/dominic-esguerra/', '_blank')} />
                  <Button onClick={() => downloadCV()}>Download Resume</Button>
                </HStack>
              </VStack>
            </Stack>
          </VStack>
        </GridItem>
        <GridItem
          rowSpan={useBreakpointValue({
            base: 1,
            sm: 1,
            md: 1,
            lg: 2
          })}
          colSpan={useBreakpointValue({
            base: 1,
            sm: 1,
            md: 1,
            lg: 2
          })}
          p={4}
          borderRadius={'2xl'}
          bg={useColorModeValue('#e5ded2', 'gray.700')}
        >
          <VStack w={{ base: '90%', sm: '90%', md: '90%', lg: 'full' }} h={'full'} mx={'auto'}>
            <Text as={'h2'} className={'open-sans'} fontSize={22}>Tech Stack</Text>
            <SimpleGrid columns={{ base: 3, sm: 4, md: 5, lg: 4 }} gap={4} w={'full'} placeItems={'center'}>
              {[
                { src: html5, alt: 'HTML5' },
                { src: css3, alt: 'CSS3' },
                { src: javascript, alt: 'JavaScript' },
                { src: react, alt: 'React' },
                { src: nodejs, alt: 'Node.js' },
                { src: mongodb, alt: 'MongoDB' },
                { src: mysql, alt: 'MySQL' },
                { src: php, alt: 'PHP' },
                { src: cpp, alt: 'C++' },
                { src: jquery, alt: 'jQuery' },
                { src: figma, alt: 'Figma' }
              ].map((tech, index) => (
                <Tooltip key={index} label={tech.alt} placement="top" hasArrow>
                  <Box
                    boxSize={'20'}
                    cursor={'pointer'}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="transform 0.3s ease-in-out"
                    _hover={{ transform: 'translateY(-10px)' }}
                  >
                    <Image src={tech.src} alt={tech.alt} boxSize={{ base: '70%', sm: '80%' }} objectFit="contain" />
                  </Box>
                </Tooltip>
              ))}
            </SimpleGrid>
          </VStack>
        </GridItem>
        <GridItem
          rowSpan={useBreakpointValue({
            base: 1,
            sm: 1,
            md: 1,
            lg: 3
          })}
          colSpan={useBreakpointValue({
            base: 1,
            sm: 1,
            md: 1,
            lg: 5
          })}
          borderRadius={'2xl'}
          bg={useColorModeValue('#e5ded2', 'gray.700')}
          p={4}
        >
          <VStack mx={'auto'} h={'full'}>
            <VStack w={'90%'} h={'full'} justifyContent={'center'} alignItems={'center'} gap={4}>
              <Text as={'h2'} className={'open-sans'} fontSize={22}>GitHub Contributions</Text>
              <Image
                w={'full'}
                src="https://ghchart.rshah.org/FE4A49/dominic-myb"
                alt="GitHub Contributions"
                borderRadius={'lg'}
                objectFit={'cover'}
              />
            </VStack>
            <Text as={'h2'} className={'open-sans'} fontSize={22}>GitHub Streak Stats</Text>
            <Stack
              width={'90%'}
              h={'full'}
              direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Image
                src="https://nirzak-streak-stats.vercel.app/?user=dominic-myb&theme=transparent&hide_border=true"
                alt="GitHub Streak Stats"
                w={{ base: '100%', sm: '100%', md: '75%', lg: '100%' }}
                h={{ base: '100%', sm: '130', md: '180', lg: '180' }}
                borderRadius={'lg'}
                objectFit={'cover'}
              />
              <Image
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=dominic-myb&theme=transparent&hide_border=true&include_all_commits=false&count_private=false&layout=compact"
                alt="GitHub Top Languages"
                w={{ base: '100%', sm: '70%', md: '70%', lg: '90%' }}
                h={{ base: '100%', sm: '130', md: '180', lg: '180' }}
                borderRadius={'lg'}
              />
            </Stack>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default About;
