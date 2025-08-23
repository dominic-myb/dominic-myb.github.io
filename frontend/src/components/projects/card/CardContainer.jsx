import { VStack } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";
import styles from "./Card.module.css";

const CardContainer = ({ children }) => (
  <VStack
    className={styles.card_container}
    border={`1px solid ${useThemeColor("cardBd")}`}
    // bg={useThemeColor("cardBg")}
  >
    {children}
  </VStack>
);

export default CardContainer;
