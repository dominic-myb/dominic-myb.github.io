import { VStack, Text } from "@chakra-ui/react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <VStack as="footer" className={styles.footer}>
      <Text as="p" className={styles.copyright}>
        © 2024 - {new Date().getFullYear()} Dominic Esguerra. All rights
        reserved.
      </Text>
      <Text as="p" className={styles.credit_line}>
        Made with React + ChakraUI
      </Text>
    </VStack>
  );
}
