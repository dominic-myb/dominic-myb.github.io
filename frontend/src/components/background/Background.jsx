import { Container, Box, VStack, Heading, Text } from "@chakra-ui/react";
import { useThemeColor, useThemeConstantColor } from "@/assets/colors";

function BackgroundTile({ idx, timeline }) {
  const [accent, titleFont, bodyFont, smallFont, secondary] = useThemeColor([
    "accent",
    "titleFont",
    "bodyFont",
    "smallFont",
    "secondary"
  ]);
  const dateCol = useThemeConstantColor("titleFont", "dark");
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
      <Box className="timeline-content" borderRadius="xl" bg={secondary}>
        <Box
          as="span"
          className="timeline-date"
          bg={accent}
          color={dateCol}
        >
          {timeline.date}
        </Box>
        <Heading as="h3" size="md" className="timeline-title" color={titleFont}>
          {timeline.title}
        </Heading>
        <Text
          className="timeline-subtitle"
          color={bodyFont}
          fontSize="sm"
          fontWeight={400}
        >
          {timeline.subtitle}
        </Text>
        <Text
          className="timeline-description"
          color={smallFont}
          fontSize="sm"
          fontWeight={400}
          fontStyle="italic"
        >
          {timeline.description}
        </Text>
      </Box>
    </Box>
  );
}

export default function Background({ title, subtitle, timeline }) {
  const accent = useThemeColor("accent");
  return (
    <Container maxW="container.lg">
      <VStack textAlign="center" my={6}>
        <Heading fontSize="3xl" fontWeight={600}>{title}</Heading>
        <Text fontSize="md" fontWeight={300}>{subtitle}</Text>
      </VStack>
      <Box
        my={4}
        className="timeline-container"
        _after={{
          backgroundColor: accent,
        }}
      >
        {timeline.map((item, idx) => (
          <BackgroundTile key={idx} idx={idx} timeline={item}></BackgroundTile>
        ))}
      </Box>
    </Container>
  );
}
