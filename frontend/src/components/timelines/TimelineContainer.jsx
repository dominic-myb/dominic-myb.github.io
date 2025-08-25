import { Box } from "@chakra-ui/react";
import styles from "./Timeline.module.css";

const TimelineContainer = ({ children }) => (
  <Box className={styles.container}>{children}</Box>
);

export default TimelineContainer;
