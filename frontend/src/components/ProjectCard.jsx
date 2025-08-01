import {
  VStack,
  HStack,
  Link,
  Text,
  Image,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { colorMap } from "@/assets/data/constants";
import { ExternalLinkIcon } from "@chakra-ui/icons";
export default function ProjectCard({ cardImage, cardTitle }) {
  const _bg = useColorModeValue(colorMap.light.cardBg, colorMap.dark.cardBg);
  const _border = `1px solid ${useColorModeValue(
    colorMap.light.cardBorder,
    colorMap.dark.cardBorder
  )}`;
  return (
    <VStack
      borderRadius="xl"
      bg={_bg}
      p={6}
      spacing={2}
      alignItems="stretch"
      boxShadow="lg"
      backdropFilter="blur(10px)"
      border={_border}
    >
      <Image
        src={cardImage}
        alt="sample"
        objectFit="cover"
        borderRadius="xl"
        mb={2}
      />
      <VStack spacing={1} alignItems="strech">
        <HStack>
          <Link fontSize="xl" fontWeight="bold">
            {cardTitle}
            <ExternalLinkIcon boxSize={4} mx={1} mt="-4px" />
          </Link>
        </HStack>
        <Text fontSize="sm">A 2D platformer built in Godot featuring</Text>
        <HStack spacing={1}>
          <Text fontSize="sm" color="gray.500">
            Built with:
          </Text>
          <Tooltip label="Godot" hasArrow>
            <Image src={"/assets/icons/godot.svg"} boxSize="20px" />
          </Tooltip>
        </HStack>
      </VStack>
    </VStack>
  );
}
