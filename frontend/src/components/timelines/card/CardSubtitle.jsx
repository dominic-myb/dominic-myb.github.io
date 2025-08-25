import { Text } from "@chakra-ui/react";
import styles from "./TimelineCard.module.css";

const CardSubtitle = ({ subtitle }) => (
  <Text className={styles.card_subtitle}>{subtitle}</Text>
);

export default CardSubtitle;
