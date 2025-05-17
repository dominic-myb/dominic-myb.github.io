import { Container, Heading } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import dara from '../../assets/project-img/project-dara.jpg';

function Projects() {
  const projects = [
    {
      name: 'The Adventures of Dara',
      image: dara,
    },
  ];
  return (
    <Container id="projects" maxW="container.lg">
      <Heading as="h2">Projects</Heading>
      {projects.map((project, index) => (
        <ProjectCard key={index} name={project.name} image={project.image} />
      ))}
    </Container>
  );
}

export default Projects;
