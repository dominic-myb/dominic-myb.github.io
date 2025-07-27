import {
  Flex,
  VStack,
  Heading,
  Image,
  SimpleGrid,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { iconMap } from "@/assets/icons";
import { colorMap } from "@/assets/data/constants";
import techstackData from "@/assets/data/techstack.json";

export default function Techstacks() {
  const [isAnimated, setIsAnimated] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimated((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const techstacks = techstackData.map(({ key, alt }) => ({
    src: iconMap[key],
    alt,
  }));

  return (
    <VStack mx="auto" p={4}>
      <Heading fontSize={28}>Techstacks</Heading>
      <SimpleGrid columns={4} gap={4} placeItems="center">
        {techstacks.map(({ src, alt }, idx) => (
          <Tooltip key={idx} label={alt} placement="top" hasArrow>
            <Flex
              className={`techstack ${isAnimated ? "moveup" : ""}`}
              p={2}
              boxSize={20}
              borderRadius="md"
              bg={useColorModeValue(
                colorMap.light.buttonBg,
                colorMap.dark.buttonBg
              )}
              style={{ animationDelay: `${idx}00ms` }}
            >
              <Image src={src} alt={alt} boxSize="65%" objectFit="contain" />
            </Flex>
          </Tooltip>
        ))}
      </SimpleGrid>
    </VStack>
  );
}
