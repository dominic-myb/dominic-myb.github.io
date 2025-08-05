import { Container, VStack, Heading, Text } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";

export default function ContactLayout({ children }) {
  const [cardBd, cardBg] = useThemeColor(["cardBd", "cardBg"]);
  return (
    <Container id="contact" maxW="container.lg" scrollMarginTop="75px">
      <VStack
        maxW="container.lg"
        bg={cardBg}
        borderRadius="xl"
        border={`1px solid ${cardBd}`}
      >
        <VStack mt={8} gap={4}>
          <Heading as="h1" fontSize={36}>
            Get in Touch
          </Heading>
          <Text textAlign="center" fontSize={16} w="60%">
            Have a project in mind or just want to say hello? I'd love to hear
            from you. Send me a message and I'll get back to you as soon as
            possible.
          </Text>
        </VStack>
        <Container
          my={10}
          p={6}
          borderRadius="xl"
          border={`1px solid ${cardBd}`}
        >
          {children}
        </Container>
      </VStack>
    </Container>
  );
}
