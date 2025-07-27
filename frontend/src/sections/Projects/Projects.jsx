import {
  Container,
  SimpleGrid,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import projectData from "@/assets/data/project.json";
import { ProjectImgMap } from "@/assets/projects";
import { colorMap } from "@/assets/data/constants.js";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = projectData.map(({ key, alt }) => ({
    src: ProjectImgMap[key],
    alt,
  }));

  return (
    <Container
      id="projects"
      maxW="container.lg"
      bg={useColorModeValue(colorMap.light.cardBg, colorMap.dark.cardBg)}
      border={useColorModeValue(
        colorMap.light.cardBorder,
        colorMap.dark.cardBorder
      )}
    >
      <Box w="full">
        <SimpleGrid columns={2} gap={4}>
          {projectData.map((item, idx) => (
            <ProjectCard
              key={idx}
              image={ProjectImgMap[item.images.thumbnail]}
              name={item.title}
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
