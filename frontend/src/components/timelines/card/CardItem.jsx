import { Box } from "@chakra-ui/react";
import styles from "./TimelineCard.module.css";

const CardItem = ({ children, idx }) => {
  const point = [styles.left, styles.right];
  return (
    <Box className={`${styles.card_item} ${point[idx % 2]}`}>{children}</Box>
  );
};

export default CardItem;
