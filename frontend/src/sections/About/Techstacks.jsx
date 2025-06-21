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
import { useState, useEffect } from 'react';
import { techstackImgMap } from '@/assets/techstack';
import techstackData from '@/assets/data/techstack.json';
import { colorMap } from '@/assets/color';

function Techstacks() {
  const [isAnimated, setIsAnimated] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimated((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const techstacks = techstackData.map(({ key, alt }) => ({
    src: techstackImgMap[key],
    alt,
  }));

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
      borderRadius="xl"
      bg={useColorModeValue(
        'rgba(255, 255, 255, 0.35)',
        'rgba(255, 255, 255, 0.05)'
      )}
      backdropFilter="blur(12px)"
      border={`1px solid ${useColorModeValue(
        'rgba(0, 0, 0, 1)',
        'rgba(255, 255, 255, 0.1)'
      )}`}
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
          {techstacks.map(({ src, alt }, idx) => (
            <Tooltip key={idx} label={alt} placement="top" hasArrow>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxSize="20"
                cursor="pointer"
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: 'translateY(-10px)' }}
                bg="rgba(255, 255, 255, 0.1)"
                p={2}
                borderRadius="md"
                className={isAnimated ? 'moveup' : ''}
                style={{ animationDelay: `${idx}00ms` }}
              >
                <Image
                  src={src}
                  alt={alt}
                  boxSize={{ base: '70%' }}
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
