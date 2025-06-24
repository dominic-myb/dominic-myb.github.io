import {
  SimpleGrid,
  Box,
  Text,
  Heading,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { colorMap } from "@/assets/color";

function TimelineTitle({ title }) {
  return (
    <Box
      p="5"
      bg={useColorModeValue(colorMap.light.cardBg, colorMap.dark.cardbg)}
    >
      <Heading textAlign="center" size="md">
        {title}
      </Heading>
    </Box>
  );
}

function TimelineBox({ background = [] }) {
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
      {timelineData.map((timeline, idx) => (
        <Box key={idx}>
          <TimelineTitle title={timeline.title} />
          <TimelineBox background={timeline.background} />
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default Timeline;
