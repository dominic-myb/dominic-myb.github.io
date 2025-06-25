import {
  GridItem,
  VStack,
  SimpleGrid,
  Heading,
  Tooltip,
  Box,
  Image,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { techstackImgMap } from "@/assets/techstack";
import techstackData from "@/assets/data/techstack.json";
import { colorMap } from "@/assets/color";
import "./index.css";

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
        lg: 2,
      })}
      colSpan={useBreakpointValue({
        base: 1,
        lg: 2,
      })}
      borderRadius="xl"
      bg={useColorModeValue(colorMap.light.cardBg, colorMap.dark.cardBg)}
      border={`1px solid ${useColorModeValue(
        colorMap.light.cardBorder,
        colorMap.dark.cardBorder
      )}`}
    >
      <VStack mx="auto" padding="4">
        <Heading as="h2" className="lato" size="md">
          Tech Stack
        </Heading>
        <SimpleGrid columns={{ base: 5, md: 4 }} gap="4" placeItems="center">
          {techstacks.map(({ src, alt }, idx) => (
            <Tooltip key={idx} label={alt} placement="top" hasArrow>
              <Box
                padding="2"
                boxSize="20"
                className={`techstack ${isAnimated ? "moveup" : ""}`}
                _hover={{ transform: "translateY(-10px)" }}
                bg={useColorModeValue(
                  colorMap.light.buttonBg,
                  colorMap.dark.buttonBg
                )}
                borderRadius="md"
                style={{ animationDelay: `${idx}00ms` }}
                transition="transform 0.3s ease-in-out"
              >
                <Image src={src} alt={alt} boxSize="65%" objectFit="contain" />
              </Box>
            </Tooltip>
          ))}
        </SimpleGrid>
      </VStack>
    </GridItem>
  );
}

export default Techstacks;
