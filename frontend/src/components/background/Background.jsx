import {
  Container,
  Box,
  VStack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { colorMap } from "@/assets/data/constants.js";

function BackgroundTile({ idx, timeline }) {
  const isLeft = idx % 2 === 0;
  const _className = isLeft ? "left" : "right";
  const _borderColor = isLeft
    ? "transparent transparent transparent rgba(255, 255, 255, 0.08)"
    : "transparent rgba(255, 255, 255, 0.08) transparent transparent";
  return (
    <Box
      className={`timeline-item ${_className}`}
      _before={{
        borderColor: _borderColor,
      }}
    >
      <Box className="timeline-content" borderRadius="xl">
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
        <Text className="timeline-description" fontStyle="italic">
          {timeline.description}
        </Text>
      </Box>
    </Box>
  );
}

export default function Background({ title, subtitle, timeline }) {
  return (
    <Container maxW="container.lg">
      <VStack textAlign="center" my={6}>
        <Heading fontSize="3xl">{title}</Heading>
        <Text fontSize="md">{subtitle}</Text>
      </VStack>
      <Box
        my={4}
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
