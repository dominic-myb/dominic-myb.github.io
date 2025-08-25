import { Box } from "@chakra-ui/react";
import styles from "./TimelineCard.module.css";

const CardDate = ({ date }) => (
  <Box as="span" className={styles.card_date}>
    {date}
  </Box>
);

export default CardDate;
