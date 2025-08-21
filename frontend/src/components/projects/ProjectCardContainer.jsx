import { VStack } from "@chakra-ui/react";
import styles from "./Projects.module.css";

const ProjectCardContainer = ({ children, ...props }) => {
  return (
    <VStack
      borderRadius="xl"
      p={6}
      spacing={2}
      boxShadow="lg"
      className={styles.card}
      {...props}
    >
      {children}
    </VStack>
  );
};

export default ProjectCardContainer;
