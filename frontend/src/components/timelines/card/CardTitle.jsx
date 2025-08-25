import { Heading } from "@chakra-ui/react";
import styles from "./TimelineCard.module.css";

const CardTitle = ({ title }) => (
  <Heading as="h3" className={styles.card_title}>
    {title}
  </Heading>
);

export default CardTitle;
