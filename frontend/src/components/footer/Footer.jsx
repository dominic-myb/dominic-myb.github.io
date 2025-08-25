import { VStack, Text } from "@chakra-ui/react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <VStack as="footer" className={styles.footer}>
      <Text className={styles.copyright}>
        © 2024 - {new Date().getFullYear()} Dominic Esguerra. All rights
        reserved.
      </Text>
      <Text className={styles.credit_line}>Made with React + ChakraUI</Text>
    </VStack>
  );
};

export default Footer;
