import { Box } from "@chakra-ui/react";
import styles from "./Contacts.module.css";

const ContactBody = ({ children }) => (
  <Box w={{ base: "70%", md: "60%" }} className={styles.contact_body}>
    {children}
  </Box>
);

export default ContactBody;
