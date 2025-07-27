import {
  Container,
  Heading,
  useColorModeValue,
  Text,
  Box,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { toKebabCase } from "../../utils/formatters";

function ProjectCard({ image, name, link, tools }) {
  return (
    <Container
      className="project-card"
      borderRadius="xl"
      bg={useColorModeValue("#e5ded2", "gray.700")}
    >
      <Box h="full">
        <img
          src={image}
          alt={toKebabCase(name)}
          style={{ borderRadius: "var(--chakra-radii-2xl)" }}
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
