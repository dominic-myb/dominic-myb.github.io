import {
  Container,
  VStack,
  HStack,
  Text,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import styles from "./Contacts.module.css";

const Contact = () => {
  const data = [
    {
      label: "LinkedIn",
      component: <SiLinkedin size={35} />,
      link: "https://www.linkedin.com/in/dominic-esguerra/",
    },
    {
      label: "Github",
      component: <SiGithub size={35} />,
      link: "https://github.com/dominic-myb",
    },
    {
      label: "Email Me",
      component: <SiGmail size={35} />,
      link: "mailto:dominic.arenal.esguerra@gmail.com",
    },
  ];
  return (
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
          {data.map((icon, idx) => (
            <Tooltip key={idx} label={icon.label} placement="bottom" hasArrow>
              <IconButton
                onClick={() =>
                  window.open(icon.link, "_blank", "noopener,noreferrer")
                }
                icon={icon.component}
              />
            </Tooltip>
          ))}
        </HStack>
      </VStack>
    </Container>
  );
};

export default Contact;
