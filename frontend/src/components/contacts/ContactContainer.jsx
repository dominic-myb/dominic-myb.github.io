import { Container, VStack } from "@chakra-ui/react";
import styles from "./Contacts.module.css";

const ContactContainer = ({ children }) => (
  <Container as="section" id="contact" className={styles.contact_container}>
    <VStack className={styles.contact_wrapper}>{children}</VStack>
  </Container>
);

export default ContactContainer;
