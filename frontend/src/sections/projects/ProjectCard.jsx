import {
  Stack,
  Container,
  Heading,
  useColorModeValue,
  Text,
  Box,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

function toKebabCase(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-');
}

function ProjectCard({ image, name, link, tools }) {
  return (
    <Container
      h="350px"
      p="4"
      gap="4"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      borderRadius="xl"
      bg={useColorModeValue('#e5ded2', 'gray.700')}
      border="1px solid transparent"
      _hover={{ border: '1px solid red' }}
    >
      <Box h="full">
        <img
          src={image}
          alt={toKebabCase(name)}
          style={{ borderRadius: 'var(--chakra-radii-2xl)' }}
        />
      </Box>
      <Box h="full" px="2">
        <Heading size="md">
          <Link href={link} isExternal>
            {name} <ExternalLinkIcon mx="2px" position="relative" top="-2px" />
          </Link>
        </Heading>

        {tools.map((item, idx) => (
          <Text key={idx}>{item}</Text>
        ))}
      </Box>
    </Container>
  );
}

export default ProjectCard;
