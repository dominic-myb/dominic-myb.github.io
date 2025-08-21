import { Box } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";
import styles from "./Contacts.module.css";

const ContactBody = ({ children }) => (
  <Box
    w={{ base: "70%", md: "60%" }}
    className={styles.contact_body}
    border={`1px solid ${useThemeColor("cardBd")}`}
  >
    {children}
  </Box>
);

export default ContactBody;
