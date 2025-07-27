import { HStack, Heading, Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillCode } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

export default function NamecardTextContent({ textContent }) {
  const [isWaving, setIsWaving] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsWaving((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HStack>
        <Heading
          as="h1"
          className="lato"
          fontSize={{ base: "28px", md: "32px" }}
        >
          {textContent.greet}
          <Box
            as="span"
            cursor="pointer"
            className={`wave ${isWaving ? "hand-wave" : ""}`}
          >
            {textContent.icon}
          </Box>
        </Heading>
      </HStack>
      <HStack gap={1}>
        <FaLocationDot />
        <Text className="open-sans" fontSize={{ base: "16px", md: "18px" }}>
          {textContent.location}
        </Text>
      </HStack>
      <HStack gap={1}>
        <AiFillCode />
        <Text className="open-sans" fontSize={{ base: "16px", md: "18px" }}>
          {textContent.profession}
        </Text>
      </HStack>
    </>
  );
}
