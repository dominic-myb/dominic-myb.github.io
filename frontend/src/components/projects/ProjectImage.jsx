import { Image } from "@chakra-ui/react";
import styles from "./Projects.module.css";

// TODO: change the alt
const ProjectImage = ({image}) => (
  <Image
    src={image}
    alt="sample"
    className={styles.image}
    borderRadius="xl"
    mb={2}
  />
);

export default ProjectImage;
