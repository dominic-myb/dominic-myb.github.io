import { Container, VStack, Heading, Text, Box } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";

export default function ContactLayout({ children }) {
  const [cardBd, cardBg, titleFont, bodyFont] = useThemeColor([
    "cardBd",
    "cardBg",
    "titleFont",
    "bodyFont",
  ]);
  return (
    <Container id="contact" maxW="container.lg" scrollMarginTop="75px">
      <VStack maxW="container.lg" bg={cardBg} borderRadius="xl" boxShadow="lg">
        <VStack mt={8} gap={4}>
          <Heading as="h1" fontSize="3xl" color={titleFont}>
            Get in Touch
          </Heading>
          <Text
            w="60%"
            textAlign="center"
            fontSize={16}
            color={bodyFont}
            fontWeight={300}
          >
            Have a project in mind or just want to say hello? I'd love to hear
            from you. Send me a message and I'll get back to you as soon as
            possible.
          </Text>
        </VStack>
        <Box
          w={{ base: "70%", md: "60%" }}
          my={10}
          p={6}
          borderRadius="xl"
          border={`1px solid ${cardBd}`}
        >
          {children}
        </Box>
      </VStack>
    </Container>
  );
}
