import { Heading, SimpleGrid } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";

const Projects = ({ children }) => {
  const [titleFont] = useThemeColor(["titleFont"]);
  return (
    <>
      <Heading
        mb={6}
        mt={2}
        fontSize="3xl"
        color={titleFont}
        textAlign="center"
      >
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} my={6}>
        {children}
      </SimpleGrid>
    </>
  );
};

export default Projects;
