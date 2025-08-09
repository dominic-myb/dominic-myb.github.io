import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";

export default function ProjectLayout({ children }) {
  const [titleFont] = useThemeColor(["titleFont"]);
  return (
    <Container id="projects" maxW="container.lg" scrollMarginTop="75px">
        <Heading mb={6} mt={2} fontSize="3xl" color={titleFont} textAlign="center">
          Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} my={6}>
          {children}
        </SimpleGrid>
    </Container>
  );
}
