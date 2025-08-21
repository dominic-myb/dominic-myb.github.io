import { VStack, HStack, Link, Text, Image, Tooltip } from "@chakra-ui/react";
import ProjectImage from "./ProjectImage";
import ProjectCardContainer from "./ProjectCardContainer";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useThemeColors } from "@/assets/colors";
// import styles from "./Projects.module.css";

const CardTools = ({ tools }) => (
  <HStack spacing={1}>
    <Text fontSize="sm" color={colors.smallFont} fontWeight={300}>
      Built with:
    </Text>
    <Tooltip label="Godot" hasArrow>
      <Image src={"/assets/icons/godot.svg"} boxSize="20px" />
    </Tooltip>
  </HStack>
);

const CardDesc = ({ desc }) => (
  <Text fontSize="sm" color={colors.bodyFont} fontWeight={300}>
    {desc}
  </Text>
);

const CardTitle = ({ title }) => (
  <HStack>
    <Link fontSize="xl" fontWeight="bold" color={colors.titleFont}>
      {title}
      <ExternalLinkIcon boxSize={4} mx={1} mt="-4px" />
    </Link>
  </HStack>
);

const ProjectCard = ({ image, title, desc }) => {
  const colors = useThemeColors();
  return (
    <ProjectCardContainer
      border={`1px solid ${colors.cardBd}`}
      bg={colors.cardBg}
    >
      <ProjectImage image={image} />
      <VStack spacing={1} alignItems="strech">
        <CardTitle title={title} />
        <CardDesc desc={desc} />
        <CardTools tools={tools}/>
      </VStack>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
