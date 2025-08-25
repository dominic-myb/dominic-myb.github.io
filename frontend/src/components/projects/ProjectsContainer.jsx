import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import styles from "./Projects.module.css";

const ProjectsContainer = ({ children }) => (
  <Container as="section" id="projects" className={styles.project_container}>
    <Heading className={styles.heading}>
      Projects
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 2 }} className={styles.grid}>
      {children}
    </SimpleGrid>
  </Container>
);

export default ProjectsContainer;
