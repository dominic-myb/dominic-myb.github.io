import { Text } from "@chakra-ui/react";
import styles from "./TimelineCard.module.css";

const CardDescription = ({ desc }) => (
  <Text className={styles.card_desc}>{desc}</Text>
);

export default CardDescription;
