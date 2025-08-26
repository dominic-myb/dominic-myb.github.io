import { Container, VStack, Heading, SimpleGrid } from "@chakra-ui/react";
import styles from "./Projects.module.css";

const ProjectsContainer = ({ children }) => (
  <Container as="section" id="projects" className={styles.project_container}>
    <VStack className={styles.wrapper}>
      <Heading className={styles.heading}>🚀 Projects</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} className={styles.grid}>
        {children}
      </SimpleGrid>
    </VStack>
  </Container>
);

export default ProjectsContainer;
