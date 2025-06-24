import { HStack, Heading, Text } from "@chakra-ui/react";
import { AiFillCode } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";

function NamecardTextContent() {
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
          fontSize={{ base: "38px", md: "32px" }}
        >
          Hi, I'm Dominic
          <span
            cursor="pointer"
            className={`wave ${isWaving ? "hand-wave" : ""}`}
          >
            👋
          </span>
        </Heading>
      </HStack>
      <HStack gap={1}>
        <FaLocationDot />
        <Text className="open-sans" fontSize={{ base: "18px", md: "16px" }}>
          Cavite, Philippines
        </Text>
      </HStack>
      <HStack gap={1}>
        <AiFillCode />
        <Text className="open-sans" fontSize={{ base: "18px", md: "16px" }}>
          Web Developer | MERN Stack
        </Text>
      </HStack>
    </>
  );
}

export default NamecardTextContent;
