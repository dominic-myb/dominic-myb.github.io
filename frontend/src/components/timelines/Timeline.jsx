import {
  Container,
  GridItem,
  Box,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import TimelineCard from "./card/TimelineCard";
import styles from "./Timeline.module.css";

const Timeline = ({ title, subtitle, timeline }) => (
  <GridItem
    colSpan={{ base: 4, md: 4, lg: 5 }}
    className={styles.main_container}
  >
    <Container className={styles.wrapper}>
      <VStack className={styles.header}>
        <Heading className={styles.title}>{`🌱${title}`}</Heading>
        <Text className={styles.subtitle}>{subtitle}</Text>
      </VStack>
      <Box className={styles.container}>
        {timeline.map((item, idx) => (
          <TimelineCard key={idx} idx={idx} timeline={item}></TimelineCard>
        ))}
      </Box>
    </Container>
  </GridItem>
);

export default Timeline;
