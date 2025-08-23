import { Text } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";
import styles from "./Card.module.css";

const CardDesc = ({ desc }) => (
  <Text className={styles.card_desc} color={useThemeColor("bodyFont")}>
    {desc}
  </Text>
);

export default CardDesc;
