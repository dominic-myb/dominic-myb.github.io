import { HStack, Heading, Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillCode } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { useThemeColor } from "@/assets/colors";

export default function NamecardTextContent({ textContent }) {
  const [titleFont, bodyFont] = useThemeColor(["titleFont", "bodyFont"]);
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
        <Heading as="h1" fontSize="32px" color={titleFont} fontWeight={600}>
          {textContent.greet}
          <Box
            as="span"
            cursor="pointer"
            className={`wave ${isWaving ? "hand-wave" : ""}`}
            fontSize="32px"
          >
            {textContent.icon}
          </Box>
        </Heading>
      </HStack>
      <HStack spacing={1}>
        <FaLocationDot size={15} />
        <Text fontSize={{ base: "16px" }} color={bodyFont} fontWeight={300}>
          {textContent.location}
        </Text>
      </HStack>
      <HStack spacing={1}>
        <AiFillCode size={15} />
        <Text fontSize={{ base: "16px" }} color={bodyFont} fontWeight={300}>
          {textContent.profession}
        </Text>
      </HStack>
    </>
  );
}
