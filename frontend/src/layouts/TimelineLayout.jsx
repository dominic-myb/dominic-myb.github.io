import { Container, Box, VStack, Heading, Text } from "@chakra-ui/react";
import TimelineCard from "@/components/TimelineCard";
import { useThemeColor } from "@/assets/colors";

const TimelineHeader = ({ title, subtitle }) => (
  <VStack textAlign="center" my={6}>
    <Heading as="h2" fontSize="3xl" fontWeight={600}>
      {title}
    </Heading>
    <Text as="p" fontSize="md" fontWeight={300}>
      {subtitle}
    </Text>
  </VStack>
);

const TimelineContainer = ({ children }) => {
  const accentCol = useThemeColor("accent");
  return (
    <Box className="timeline-container" my={4} _after={{ bg: accentCol }}>
      {children}
    </Box>
  );
};

const TimelineLayout = ({ title, subtitle, timeline }) => {
  return (
    <Container maxW="container.lg">
      <TimelineHeader title={title} subtitle={subtitle} />
      <TimelineContainer>
        {timeline.map((item, idx) => (
          <TimelineCard key={idx} idx={idx} timeline={item}></TimelineCard>
        ))}
      </TimelineContainer>
    </Container>
  );
};

export default TimelineLayout;
