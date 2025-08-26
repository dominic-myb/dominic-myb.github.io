import { Container, GridItem } from "@chakra-ui/react";
import TimelineHeader from "./TimelineHeader";
import TimelineContainer from "./TimelineContainer";
import TimelineCard from "./card/TimelineCard";
import styles from "./Timeline.module.css";

const Timeline = ({ title, subtitle, timeline }) => (
  <GridItem
    colSpan={{ base: 4, md: 4, lg: 5 }}
    className={styles.main_container}
  >
    <Container className={styles.wrapper}>
      <TimelineHeader title={title} subtitle={subtitle} />
      <TimelineContainer>
        {timeline.map((item, idx) => (
          <TimelineCard key={idx} idx={idx} timeline={item}></TimelineCard>
        ))}
      </TimelineContainer>
    </Container>
  </GridItem>
);

export default Timeline;
