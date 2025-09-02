import {
  Container,
  VStack,
  HStack,
  Text,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import styles from "./Contacts.module.css";

const Contact = () => (
  <Container as="section" id="contact" className={styles.contact_container}>
    <VStack className={styles.contact_wrapper}>
      <VStack className={styles.contact_header}>
        <Text as="h2" className={styles.title}>
          Let's Connect
        </Text>
        <Text className={styles.subtitle} fontSize={16}>
          Find me on LinkedIn, check out my GitHub, or reach me by email or
          phone.
        </Text>
      </VStack>
      <HStack gap={10} wrap="wrap" justifyContent="center">
        <ContactIcon label={"LinkedIn"} iconSize={6} component={SiLinkedin} />
        <ContactIcon label={"Github"} iconSize={6} component={SiGithub} />
        <ContactIcon label={"Email Me"} iconSize={6} component={SiGmail} />
      </HStack>
    </VStack>
  </Container>
);

const ContactIcon = ({ label, iconSize, component: Component }) => (
  <Tooltip label={label} placement="bottom" hasArrow>
    <Icon as={Component} boxSize={iconSize} />
  </Tooltip>
);

export default Contact;
