import { Container, VStack, Heading, SimpleGrid } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";

export default function ProjectLayout({ children }) {
  const [cardBd, cardBg, titleFont] = useThemeColor(
    ["cardBd",
    "cardBg",
    "titleFont"]
  );
  return (
    <Container id="projects" maxW="container.lg" scrollMarginTop="75px">
      <VStack bg={cardBg} border={`1px solid ${cardBd}`} borderRadius="xl">
        <Heading mt={6} fontSize="3xl" color={titleFont}>
          My Projects
        </Heading>
        <SimpleGrid p={6} columns={2} gap={6}>
          {children}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
