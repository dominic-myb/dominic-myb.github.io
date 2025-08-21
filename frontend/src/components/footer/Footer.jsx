import { VStack, Text } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";
import styles from "./Footer.module.css";

const Footer = () => {
  const [bg, bodyFont, smallFont] = useThemeColor([
    "bg",
    "bodyFont",
    "smallFont",
  ]);
  
  return (
    <VStack as="footer" bg={bg} className={styles.footer}>
      <Text className={styles.copyright} color={bodyFont}>
        © 2024 - {new Date().getFullYear()} Dominic Esguerra. All rights
        reserved.
      </Text>
      <Text className={styles.credit_line} color={smallFont}>
        Made with React + ChakraUI
      </Text>
    </VStack>
  );
};

export default Footer;
