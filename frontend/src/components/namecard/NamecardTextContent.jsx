import { HStack, Heading, Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillCode } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { useThemeColor } from "@/assets/colors";
import styles from "./Namecard.module.css";

const NamecardTextContent = ({ textContent }) => {
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
        <Heading as="h1" className="fw-600" fontSize="3xl" color={titleFont}>
          {textContent.greet}
          <Box
            as="span"
            className={`${styles.hand} ${isWaving ? styles.hand_wave : ""}`}
          >
            {textContent.icon}
          </Box>
        </Heading>
      </HStack>
      <HStack spacing={1}>
        <FaLocationDot size={15} />
        <Text fontSize="md" color={bodyFont} className="fw-300">
          {textContent.location}
        </Text>
      </HStack>
      <HStack spacing={1}>
        <AiFillCode size={15} />
        <Text fontSize="md" color={bodyFont} className="fw-300">
          {textContent.profession}
        </Text>
      </HStack>
    </>
  );
};

export default NamecardTextContent;
