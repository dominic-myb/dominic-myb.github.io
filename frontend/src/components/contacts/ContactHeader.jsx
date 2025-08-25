import { VStack, Heading, Text } from "@chakra-ui/react";
import styles from "./Contacts.module.css";

const ContactHeader = () => (
  <VStack className={styles.contact_header}>
    <Heading className={styles.title}>Get in Touch</Heading>
    <Text className={styles.subtitle} fontSize={16}>
      Have a project in mind or just want to say hello? I'd love to hear from
      you. Send me a message and I'll get back to you as soon as possible.
    </Text>
  </VStack>
);

export default ContactHeader;
