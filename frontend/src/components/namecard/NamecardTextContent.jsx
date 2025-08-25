import { useEffect, useState } from "react";
import { HStack, Heading, Text, Box } from "@chakra-ui/react";
import styles from "./Namecard.module.css";

const NamecardTextContent = () => {
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
        <Heading as="h1" className={styles.greet}>
          Hi, I'm Dominic
          <Box
            as="span"
            className={`${styles.hand} ${isWaving ? styles.hand_wave : ""}`}
          >
            👋
          </Box>
        </Heading>
      </HStack>
      <HStack className={styles.text_container}>
        <Text className={styles.text}>From Cavite, Philippines</Text>
      </HStack>
      <HStack className={styles.text_container}>
        <Text className={styles.text}>IT Grad, Web Development</Text>
      </HStack>
    </>
  );
};

export default NamecardTextContent;
