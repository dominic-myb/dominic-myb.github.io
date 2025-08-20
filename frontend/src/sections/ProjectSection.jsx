import { Container } from "@chakra-ui/react";
import { Projects } from "@/components/projects";

const ProjectSection = () => (
  <Container
    as="section"
    id="projects"
    maxW="container.lg"
    scrollMarginTop="75px"
  >
    <Projects />
  </Container>
);

export default ProjectSection;
