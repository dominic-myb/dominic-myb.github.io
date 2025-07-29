import {
  VStack,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
} from "@chakra-ui/react";

export default function ContactForm() {
  return (
    <FormControl>
      <VStack gap={4}>
        <Heading as="h1" fontSize={28}>
          Send a Message
        </Heading>
        <>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="name@domain.com" />
          <FormHelperText>I'll never share your email.</FormHelperText>
        </>
        <>
          <FormLabel>Subject</FormLabel>
          <Input type="text" placeholder="Subject of your message" />
        </>
        <>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Tell me about your project or question." />
        </>
      </VStack>
    </FormControl>
  );
}
