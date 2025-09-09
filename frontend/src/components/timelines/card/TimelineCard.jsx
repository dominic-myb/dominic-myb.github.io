import { useState } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import styles from "./TimelineCard.module.css";

const TimelineCard = ({ idx, timeline }) => {
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
        <Text className={styles.card_subtitle}>{timeline.subtitle}</Text>
        <Text className={styles.card_desc}>
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
};

export default TimelineCard;
