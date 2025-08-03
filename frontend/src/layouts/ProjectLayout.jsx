import {
  Container,
  VStack,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { colorMap } from "@/assets/data/constants.js";

export default function ProjectLayout({ children }) {
  const _bg = useColorModeValue(colorMap.light.cardBg, colorMap.dark.cardBg);
  const _border = `1px solid ${useColorModeValue(
    colorMap.light.cardBorder,
    colorMap.dark.cardBorder
  )}`;

  return (
    <Container id="projects" maxW="container.lg" scrollMarginTop="75px">
      <VStack bg={_bg} border={_border} borderRadius="xl">
        <Heading mt={6} fontSize="3xl">
          My Projects
        </Heading>
        <SimpleGrid p={6} columns={2} gap={6}>
          {children}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
