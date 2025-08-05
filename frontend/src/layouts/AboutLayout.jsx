import { Box, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { aboutGridSize } from "@/assets/data/constants";
import { useThemeColor } from "@/assets/colors";

export default function AboutLayout({ cards }) {
  const [cardBg, cardBd] = useThemeColor(["cardBg", "cardBd"]);
  const cardStyles = {
    borderRadius: "xl",
    bg: cardBg,
    border: `1px solid ${cardBd}`,
  };
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

  return (
    <Grid templateRows={rows} templateColumns={cols} gap={4}>
      {aboutGridSize.map((size, idx) => (
        <GridItem
          key={idx}
          rowSpan={size.rowSpan}
          colSpan={size.colSpan}
          {...cardStyles}
        >
          {Array.isArray(cards) ? cards[idx] : cards || <Box>No Card</Box>}
        </GridItem>
      ))}
    </Grid>
  );
}
