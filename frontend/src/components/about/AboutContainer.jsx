import { Container } from "@chakra-ui/react";
import styles from "./About.module.css";

const AboutContainer = ({ children }) => (
  <Container as="section" id="about" className={styles.about_container}>
    {children}
  </Container>
);

export default AboutContainer;
