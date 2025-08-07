import { VStack, HStack, Link, Text, Image, Tooltip } from "@chakra-ui/react";
import { useThemeColors } from "@/assets/colors";
import { ExternalLinkIcon } from "@chakra-ui/icons";
export default function ProjectCard({ cardImage, cardTitle }) {
  const colors = useThemeColors();
  return (
    <VStack
      borderRadius="xl"
      bg={colors.cardBg}
      p={6}
      spacing={2}
      alignItems="stretch"
      boxShadow="lg"
      backdropFilter="blur(10px)"
      border={`1px solid ${colors.cardBd}`}
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
          <Link fontSize="xl" fontWeight="bold" color={colors.titleFont}>
            {cardTitle}
            <ExternalLinkIcon boxSize={4} mx={1} mt="-4px" />
          </Link>
        </HStack>
        <Text fontSize="sm" color={colors.bodyFont}>
          A 2D platformer built in Godot featuring
        </Text>
        <HStack spacing={1}>
          <Text fontSize="sm" color={colors.smallFont}>
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
