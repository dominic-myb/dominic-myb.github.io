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
import { useState, useEffect } from 'react';

function Techstacks() {
  const techStacks = [
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
  ];

  const [isAnimated, setIsAnimated] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimated((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
      borderRadius="lg"
      bg={useColorModeValue('#e5ded2', 'gray.700')}
    >
      <VStack mx="auto" p={5} py={4}>
        <Text as="h2" className="lato" fontSize={22}>
          Tech Stack
        </Text>
        <SimpleGrid
          columns={{ base: 3, sm: 5, md: 3, lg: 4 }}
          gap={4}
          w="full"
          placeItems="center"
        >
          {techStacks.map((item, idx) => (
            <Tooltip key={idx} label={item.alt} placement="top" hasArrow>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxSize="20"
                cursor="pointer"
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: 'translateY(-10px)' }}
              >
                <Image
                  className={isAnimated ? 'moveup' : ''}
                  src={item.src}
                  alt={item.alt}
                  boxSize={{ base: '70%' }}
                  objectFit="contain"
                  style={{ animationDelay: `${idx}00ms` }}
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
