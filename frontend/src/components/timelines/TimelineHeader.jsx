import { VStack, Heading, Text } from "@chakra-ui/react";
import styles from "./Timeline.module.css";

const TimelineHeader = ({ title, subtitle }) => (
  <VStack className={styles.header}>
    <Heading className={styles.title}>{`🌱${title}`}</Heading>
    <Text className={styles.subtitle}>{subtitle}</Text>
  </VStack>
);

export default TimelineHeader;
