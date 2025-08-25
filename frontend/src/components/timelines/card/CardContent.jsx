import { Box } from "@chakra-ui/react";
import styles from "./TimelineCard.module.css";

const CardContent = ({ children }) => (
  <Box className={styles.card_content}>{children}</Box>
);

export default CardContent;
