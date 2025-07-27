import {
  Container,
  Box,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { colorMap } from "@/assets/data/constants.js";

function BackgroundTile({ idx, timeline }) {
  return (
    <Box className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}>
      <Box className="timeline-content">
        <Box
          as="span"
          className="timeline-date"
          bgGradient={useColorModeValue(
            colorMap.light.logo,
            colorMap.dark.logo
          )}
        >
          {timeline.date}
        </Box>
        <Heading as="h3" size="md" className="timeline-title">
          {timeline.title}
        </Heading>
        <Text className="timeline-subtitle">{timeline.subtitle}</Text>
        <Text className="timeline-description">{timeline.description}</Text>
      </Box>
    </Box>
  );
}

export default function Background({ title, subtitle, timeline }) {
  return (
    <Container maxW="container.lg" p={5}>
      <Box textAlign="center" my={4}>
        <Heading>{title}</Heading>
        <Text>{subtitle}</Text>
      </Box>
      <Box
        className="timeline-container"
        _after={{
          bgGradient: useColorModeValue(
            colorMap.light.line,
            colorMap.dark.line
          ),
        }}
      >
        {timeline.map((item, idx) => (
          <BackgroundTile key={idx} idx={idx} timeline={item}></BackgroundTile>
        ))}
      </Box>
    </Container>
  );
}
