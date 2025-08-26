import { Box } from "@chakra-ui/react";
import styles from "./Card.module.css";

const CardImageWrapper = ({ children, ...props }) => (
  <Box className={styles.image_wrapper} {...props}>
    {children}
  </Box>
);

export default CardImageWrapper;
