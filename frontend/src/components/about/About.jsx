import { Container, Grid } from "@chakra-ui/react";
import styles from "./About.module.css";

const About = ({ children }) => (
  <Container as="section" id="about" className={styles.about_container}>
    <Grid templateColumns="repeat(auto-fit, auto)" gap={4}>
      {children}
    </Grid>
  </Container>
);

export default About;
