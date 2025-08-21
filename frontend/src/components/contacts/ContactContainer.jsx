import { Container, VStack } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";
import styles from "./Contacts.module.css";

const ContactContainer = ({ children }) => (
  <Container as="section" id="contact" className={styles.contact_container}>
    <VStack bg={useThemeColor("cardBg")} className={styles.contact_wrapper}>
      {children}
    </VStack>
  </Container>
);

export default ContactContainer;
