import {
  Container,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Namecard } from "@/components/namecard";
import { Techstacks } from "@/components/techstacks";
import { Timeline } from "@/components/timelines/";
import { Certificate } from "@/components/certificates";
import aboutData from "@/assets/data/about.json";
import { useThemeColor } from "@/assets/colors";

const AboutSectionGrid = ({ cards }) => {
  const [cardBg, cardBd] = useThemeColor(["cardBg", "cardBd"]);
  const omit = (obj, key) => {
    const { [key]: _, ...rest } = obj;
    return rest;
  };
  const templateStyle = {
    borderRadius: "xl",
    border: `1px solid ${cardBd}`,
    boxShadow: "md",
  };
  const cardStyles = [
    { ...templateStyle },
    { ...templateStyle },
    { ...templateStyle },
    { ...omit(templateStyle, "border"), bg: cardBg },
  ];
  const rows =
    useBreakpointValue({
      base: "repeat(5, 1fr)",
      md: "repeat(7, 1fr)",
      lg: "repeat(4, 1fr)",
    }) ?? "repeat(5, 1fr)";
  const cols =
    useBreakpointValue({
      base: "1fr",
      md: "repeat(4, 1fr)",
      lg: "repeat(3, 1fr)",
    }) ?? "1fr";
  const gridCellSpan = aboutData.gridCellSpan;
  return (
    <Grid templateColumns={cols} templateRows={rows} gap={4}>
      {gridCellSpan.map((size, idx) => (
        <AboutSectionCard
          key={idx}
          colSpan={size.colSpan}
          rowSpan={size.rowSpan}
          {...cardStyles[idx]}
        >
          {Array.isArray(cards) ? cards[idx] : cards || <Box>No Card</Box>}
        </AboutSectionCard>
      ))}
    </Grid>
  );
};

const AboutSectionCard = ({ children, ...props }) => (
  <GridItem {...props}>{children}</GridItem>
);

const AboutSection = () => {
  const avatar = "/assets/images/avatar.jpg";
  const textContent = aboutData.textContent;
  const socialLinks = aboutData.socialLinks;
  const background = aboutData.background;
  const certs = aboutData.certificates;
  return (
    <Container
      as="section"
      id="about"
      maxW="container.lg"
      scrollMarginTop="75px"
    >
      <AboutSectionGrid
        cards={[
          <Namecard
            key="namecard"
            avatar={avatar}
            textContent={textContent}
            socialLinks={socialLinks}
          />,
          <Techstacks key="techstacks" />,
          <Timeline
            key="timeline"
            title={background.title}
            subtitle={background.subtitle}
            timeline={background.timeline}
          />,
          <Certificate cert={certs} />,
        ]}
      />
    </Container>
  );
};

export default AboutSection;
