import {
  Container,
  Text,
  useColorModeValue,
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { colorMap } from "@/assets/data/constants.js";
function Contact() {
  return (
    <Container id="contact" maxW="container.lg" h="100vh">
      <VStack
        maxW="container.lg"
        bg={useColorModeValue(colorMap.light.cardBg, colorMap.dark.cardBg)}
        border={`1px solid ${useColorModeValue(
          colorMap.light.cardBorder,
          colorMap.dark.cardBorder
        )}`}
        borderRadius="xl"
        p="4"
      >
        <VStack mt="10" gap="4">
          <Heading as="h1" fontSize="36">
            Get in Touch
          </Heading>
          <Text textAlign="center" fontSize="18" w="60%">
            Have a project in mind or just want to say hello? I'd love to hear
            from you. Send me a message and I'll get back to you as soon as
            possible.
          </Text>
        </VStack>
        <Box
          my="10"
          w="60%"
          p="6"
          borderRadius="xl"
          border={`1px solid ${useColorModeValue(
            colorMap.light.cardBorder,
            colorMap.dark.cardBorder
          )}`}
        >
          <FormControl>
            <Box display="flex" flexDirection="column" gap="4">
              <Heading as="h1" fontSize="28">
                Send Message
              </Heading>
              <Box>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="name@domain.com" />
                <FormHelperText>I'll never share your email.</FormHelperText>
              </Box>
              <Box>
                <FormLabel>Subject</FormLabel>
                <Input type="text" placeholder="Subject of your message" />
              </Box>
              <Box>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Tell me about your project or question." />
              </Box>
            </Box>
          </FormControl>
        </Box>
      </VStack>
    </Container>
  );
}

export default Contact;
