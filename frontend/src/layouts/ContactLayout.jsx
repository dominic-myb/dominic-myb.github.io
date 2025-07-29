import {
  Container,
  Text,
  useColorModeValue,
  Box,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { colorMap } from "@/assets/data/constants.js";

export default function ContactLayout({ children }) {
  const borderColor = useColorModeValue(
    colorMap.light.cardBorder,
    colorMap.dark.cardBorder
  );
  const backgroundColor = useColorModeValue(
    colorMap.light.cardBg,
    colorMap.dark.cardBg
  );
  const cardStyles = {
    bg: backgroundColor,
    border: `1px solid ${borderColor}`,
    borderRadius: "xl",
  };
  return (
    <Container id="contact" maxW="container.lg" h="100vh">
      <VStack maxW="container.lg" p={4} {...cardStyles}>
        <VStack mt={10} gap={4}>
          <Heading as="h1" fontSize={36}>
            Get in Touch
          </Heading>
          <Text textAlign="center" fontSize={18} w="60%">
            Have a project in mind or just want to say hello? I'd love to hear
            from you. Send me a message and I'll get back to you as soon as
            possible.
          </Text>
        </VStack>
        <Box
          w="60%"
          my={10}
          p={6}
          borderRadius="xl"
          border={`1px solid ${borderColor}`}
        >
          {children}
        </Box>
      </VStack>
    </Container>
  );
}
