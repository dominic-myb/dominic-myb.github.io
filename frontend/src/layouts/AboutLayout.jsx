import { Box, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { useThemeColor } from "@/assets/colors";

export default function AboutLayout({ cards }) {
  const [cardBg, cardBd, bg] = useThemeColor(["cardBg", "cardBd", "bg"]);
  const cardStyles = [
    {
      // namecard
      borderRadius: "xl",
      bg: bg,
      border: `1px solid ${cardBd}`,
    },
    {
      // techstack
      borderRadius: "xl",
      bg: cardBg,
    },
    {
      // timeline
      borderRadius: "xl",
      border: `1px solid ${cardBd}`,
    },
    {
      // certificates
      borderRadius: "xl",
      bg: cardBg,
    },
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
  const aboutGridSize = [
    { rowSpan: { base: 1, md: 2, lg: 1 }, colSpan: { base: 1, md: 2, lg: 3 } },
    { rowSpan: { base: 1, md: 2, lg: 1 }, colSpan: { base: 1, md: 2, lg: 2 } },
    { rowSpan: { base: 2, md: 4, lg: 2 }, colSpan: { base: 1, md: 4, lg: 5 } },
    { rowSpan: { base: 1, md: 1, lg: 1 }, colSpan: { base: 1, md: 4, lg: 5 } },
  ];

  return (
    <Grid templateRows={rows} templateColumns={cols} gap={4}>
      {aboutGridSize.map((size, idx) => (
        <GridItem
          key={idx}
          rowSpan={size.rowSpan}
          colSpan={size.colSpan}
          {...cardStyles[idx]}
        >
          {Array.isArray(cards) ? cards[idx] : cards || <Box>No Card</Box>}
        </GridItem>
      ))}
    </Grid>
  );
}
