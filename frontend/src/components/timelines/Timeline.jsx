import { useState } from "react";
import {
  Container,
  GridItem,
  Box,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import styles from "./Timeline.module.css";

function TimelineCard({ idx, timeline }) {
  const point = [styles.left, styles.right];
  const [expanded, setExpanded] = useState(false);
  const maxChars = 100;
  const isLong = timeline.description.length > maxChars;
  const displayText = expanded
    ? timeline.description
    : timeline.description.slice(0, maxChars);
  return (
    <Box className={`${styles.card_item} ${point[idx % 2]}`}>
      <Box className={styles.card_content}>
        <Box as="span" className={styles.card_date}>
          {timeline.date}
        </Box>
        <Heading as="h3" className={styles.card_title}>
          {timeline.title}
        </Heading>
        <Text as="p" className={styles.card_subtitle}>
          {timeline.subtitle}
        </Text>
        <Text as="p" className={styles.card_desc}>
          {displayText}
          {isLong && !expanded && "..."}
          {isLong && (
            <Button onClick={() => setExpanded(!expanded)}>
              {expanded ? "\u00A0See less" : "\u00A0See more"}
            </Button>
          )}
        </Text>
      </Box>
    </Box>
  );
}

export default function Timeline({ timeline }) {
  return (
    <GridItem
      colSpan={{ base: 4, md: 4, lg: 5 }}
      className={styles.main_container}
    >
      <Container className={styles.wrapper}>
        <VStack className={styles.header}>
          <Heading as="h2" className={styles.title}>
            🌱Timeline
          </Heading>
          <Text as="p" className={styles.subtitle}>
            Education & Professional Timeline
          </Text>
        </VStack>
        <Box className={styles.container}>
          {timeline.map((item, idx) => (
            <TimelineCard key={idx} idx={idx} timeline={item} />
          ))}
        </Box>
      </Container>
    </GridItem>
  );
}
