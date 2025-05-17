import {
  GridItem,
  VStack,
  SimpleGrid,
  Text,
  Tooltip,
  Box,
  Image,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';

import html5 from '../../assets/techstack/html-5.svg';
import css3 from '../../assets/techstack/css-3.svg';
import javascript from '../../assets/techstack/javascript.svg';
import react from '../../assets/techstack/react.svg';
import nodejs from '../../assets/techstack/nodejs-icon.svg';
import mongodb from '../../assets/techstack/mongodb-icon.svg';
import mysql from '../../assets/techstack/mysql.svg';
import php from '../../assets/techstack/php.svg';
import cpp from '../../assets/techstack/c-plusplus.svg';
import jquery from '../../assets/techstack/jquery.svg';
import figma from '../../assets/techstack/figma.svg';

function Techstacks() {
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
        lg: 2,
      })}
      p={4}
      borderRadius="2xl"
      bg={useColorModeValue('#e5ded2', 'gray.700')}
    >
      <VStack
        w={{ base: '90%', sm: '90%', md: '90%', lg: 'full' }}
        h="full"
        mx="auto"
      >
        <Text as="h2" className="open-sans" fontSize={22}>
          Tech Stack
        </Text>
        <SimpleGrid
          columns={{ base: 3, sm: 4, md: 5, lg: 4 }}
          gap={4}
          w="full"
          placeItems="center"
        >
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
            { src: figma, alt: 'Figma' },
          ].map((tech, index) => (
            <Tooltip key={index} label={tech.alt} placement="top" hasArrow>
              <Box
                boxSize="20"
                cursor="pointer"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: 'translateY(-10px)' }}
              >
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  boxSize={{ base: '70%', sm: '80%' }}
                  objectFit="contain"
                />
              </Box>
            </Tooltip>
          ))}
        </SimpleGrid>
      </VStack>
    </GridItem>
  );
}

export default Techstacks;
