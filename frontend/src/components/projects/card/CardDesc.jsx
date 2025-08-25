import { Text } from "@chakra-ui/react";
import styles from "./Card.module.css";

const CardDesc = ({ desc }) => <Text className={styles.card_desc}>{desc}</Text>;

export default CardDesc;
