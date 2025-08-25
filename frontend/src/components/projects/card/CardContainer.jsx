import { VStack } from "@chakra-ui/react";
import styles from "./Card.module.css";

const CardContainer = ({ children }) => (
  <VStack className={styles.card_container}>{children}</VStack>
);

export default CardContainer;
