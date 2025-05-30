import React from 'react';
import { Stack, Container, Heading, useColorModeValue } from '@chakra-ui/react';

function toKebabCase(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-');
}

function ProjectCard({ name, image }) {
  return (
    <Container
      h="300px"
      bg={useColorModeValue('#e5ded2', 'gray.700')}
      borderRadius="lg"
    >
      <Stack
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={10}
      >
        <img src={image} alt={toKebabCase(name)} />
        <Heading as="h2">{name}</Heading>
      </Stack>
    </Container>
  );
}

export default ProjectCard;
