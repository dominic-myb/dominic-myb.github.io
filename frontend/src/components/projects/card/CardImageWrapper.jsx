import { Box } from "@chakra-ui/react";
import styles from "./Card.module.css";

const CardImageWrapper = ({ children, handleMouseEnter, handleMouseLeave }) => (
  <Box
    className={styles.image_wrapper}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    {children}
  </Box>
);

export default CardImageWrapper;
