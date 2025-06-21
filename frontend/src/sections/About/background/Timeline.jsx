import { SimpleGrid, Box, Text, Heading, Flex } from '@chakra-ui/react';

function TimelineTitle({ title }) {
  return (
    <Box bg="tomato" p="5">
      <Heading textAlign="center" size="lg">
        {title}
      </Heading>
    </Box>
  );
}

function TimelineBox({ background = []}) {
  return (
    <Flex flexDirection="column" gap="4" p="4">
      {background.map((item, idx) => (
        <Box key={idx} p="4">
          <Text>{item.title}</Text>
          <Text>{item.subtitle}</Text>
          <Text>{item.year}</Text>
        </Box>
      ))}
    </Flex>
  );
}

function Timeline({ timelineData = [] }) {
  return (
    <SimpleGrid columns="2">
      {timelineData.map((timeline, timelineIdx) => (
        <Box key={timelineIdx}>
          <TimelineTitle title={timeline.title} />
          <TimelineBox background={timeline.background} />
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default Timeline;
