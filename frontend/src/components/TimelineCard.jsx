import { createContext, useContext } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useThemeColor, useThemeConstantColor } from "@/assets/colors";

const ThemeContext = createContext();

const TimelineContent = ({ children }) => {
  const theme = useContext(ThemeContext);
  return (
    <Box
      className="timeline-content"
      p={6}
      borderRadius="xl"
      bg={theme.secondary}
    >
      {children}
    </Box>
  );
};

const TimelineDate = ({ date }) => {
  const dateCol = useThemeConstantColor("titleFont", "dark");
  const theme = useContext(ThemeContext);
  return (
    <Box
      as="span"
      className="timeline-date"
      mb={3}
      fontSize="sm"
      fontWeight={500}
      color={dateCol}
      bg={theme.accent}
      borderRadius={50}
    >
      {date}
    </Box>
  );
};

const TimelineTitle = ({ title }) => {
  const theme = useContext(ThemeContext);
  return (
    <Heading
      as="h3"
      className="timeline-title"
      fontSize="md"
      fontWeight={600}
      color={theme.titleFont}
    >
      {title}
    </Heading>
  );
};

const TimelineSubtitle = ({ subtitle }) => {
  const theme = useContext(ThemeContext);
  return (
    <Text
      as="p"
      className="timeline-subtitle"
      color={theme.bodyFont}
      fontSize="sm"
      fontWeight={400}
    >
      {subtitle}
    </Text>
  );
};

const TimelineDescription = ({ desc }) => {
  const theme = useContext(ThemeContext);
  return (
    <Text
      as="p"
      className="timeline-description"
      fontSize="sm"
      fontWeight={400}
      fontStyle="italic"
      color={theme.smallFont}
    >
      {desc}
    </Text>
  );
};

const TimelineItem = ({ children, idx }) => {
  const addClass = idx % 2 === 0 ? "left" : "right";
  const theme = useContext(ThemeContext);
  const _borderColor =
    addClass === "left"
      ? `transparent transparent transparent ${theme.secondary}`
      : `transparent ${theme.secondary} transparent transparent`;
  return (
    <Box
      className={`timeline-item ${addClass}`}
      _before={{ borderColor: _borderColor }}
    >
      {children}
    </Box>
  );
};

const TimelineCard = ({ idx, timeline }) => {
  const [accent, titleFont, bodyFont, smallFont, secondary] = useThemeColor([
    "accent",
    "titleFont",
    "bodyFont",
    "smallFont",
    "secondary",
  ]);
  const themeData = {
    accent,
    titleFont,
    bodyFont,
    smallFont,
    secondary,
  };

  return (
    <ThemeContext.Provider value={themeData}>
      <TimelineItem idx={idx}>
        <TimelineContent>
          <TimelineDate date={timeline.date} />
          <TimelineTitle title={timeline.title} />
          <TimelineSubtitle subtitle={timeline.subtitle} />
          <TimelineDescription desc={timeline.description} />
        </TimelineContent>
      </TimelineItem>
    </ThemeContext.Provider>
  );
};

export default TimelineCard;
