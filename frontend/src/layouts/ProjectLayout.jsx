import { Container, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { colorMap } from "@/assets/data/constants.js";

export default function ProjectLayout({ children }) {
  const _bg = useColorModeValue(colorMap.light.cardBg, colorMap.dark.cardBg);
  const _border = useColorModeValue(
    colorMap.light.cardBorder,
    colorMap.dark.cardBorder
  );

  const containerStyles = {
    id: "projects",
    maxW: "container.lg",
    bg: _bg,
    border: _border,
  };

  return (
    <Container {...containerStyles}>
      <SimpleGrid columns={2} gap={4}>
        {children}
      </SimpleGrid>
    </Container>
  );
}
