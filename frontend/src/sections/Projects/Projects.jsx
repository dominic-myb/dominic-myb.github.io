import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import projectData from '@/assets/data/project.json';
import { projectImgMap } from '@/assets/projects';

function Projects() {

    const projects = projectData.map(({ key, alt }) => ({
    src: projectImgMap[key],
    alt
  }));

  return (
    <Container id="projects" maxW="container.lg">
      <Box w="full">
        <SimpleGrid columns={2} gap={4}>
          {projectData.map((item, idx) => (
            <ProjectCard
              key={idx}
              image={item.image}
              name={item.name}
              link={item.link}
              tools={item.tools}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}

export default Projects;
