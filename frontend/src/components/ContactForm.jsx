import { useState } from "react";
import {
  VStack,
  Heading,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  useToast,
} from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isEmailInvalid = email && !emailRegex.test(email);
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    setIsTouched(true);

    if (isEmailInvalid || !subject || !message) return;

    const promise = fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, subject, message }),
    }).then((res) => {
      if (!res.ok) throw new Error("Failed to send");
      setEmail("");
      setSubject("");
      setMessage("");
      return res;
    });

    toast.promise(promise, {
      loading: { title: "Sending message...", description: "Please wait." },
      success: {
        title: "Message sent!",
        description: "Thanks for reaching out.",
      },
      error: { title: "Error", description: "Failed to send message." },
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <VStack alignItems="stretch" spacing={4} mb={4}>
        <Heading as="h1" fontSize={28}>
          Send a Message
        </Heading>

        <FormControl isInvalid={isTouched && isEmailInvalid}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            placeholder="name@domain.com"
            value={email}
            onChange={(e) => {
              const value = e.target.value;
              setEmail(value);
              if (!value) setIsTouched(false);
            }}
            onBlur={() => {
              if (email) setIsTouched(true);
            }}
          />
          <FormErrorMessage>
            Please enter a valid email address.
          </FormErrorMessage>
          <FormHelperText>I'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Subject</FormLabel>
          <Input
            type="text"
            placeholder="Subject of your message"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            placeholder="Tell me about your project or question."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormControl>

        <Button
          type="submit"
          size="lg"
          colorScheme="teal"
          rightIcon={<IoSend />}
        >
          Send
        </Button> 
      </VStack>
    </form>
  );
}
