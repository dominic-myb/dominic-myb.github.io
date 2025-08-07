import { Container, Box, VStack, Heading, Text } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";

function BackgroundTile({ idx, timeline }) {
  const logo = useThemeColor("logo");
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
        <Box as="span" className="timeline-date" bgGradient={logo}>
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
  const line = useThemeColor("line");
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
          bgGradient: line,
        }}
      >
        {timeline.map((item, idx) => (
          <BackgroundTile key={idx} idx={idx} timeline={item}></BackgroundTile>
        ))}
      </Box>
    </Container>
  );
}
