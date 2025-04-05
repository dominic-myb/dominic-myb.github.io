import { Container, Text } from '@chakra-ui/react';

function Projects() {
  return (
    // move the id to the h2 of this
    <Container id={'projects'} maxW={'container.lg'} h={'100vh'} bg={'blue'}>
      <Text>Projects</Text>
    </Container>
  );
}

export default Projects;