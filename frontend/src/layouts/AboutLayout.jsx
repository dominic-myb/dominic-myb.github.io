import {
  Box,
  Grid,
  GridItem,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { colorMap, aboutGridSize } from "@/assets/data/constants";

export default function AboutLayout({ cards }) {
  const bgColor = useColorModeValue(
    colorMap.light.cardBg,
    colorMap.dark.cardBg
  );
  const borderColor = useColorModeValue(
    colorMap.light.cardBorder,
    colorMap.dark.cardBorder
  );
  const cardStyles = {
    borderRadius: "xl",
    bg: `${bgColor}`,
    border: `1px solid ${borderColor}`,
  };
  const rows =
    useBreakpointValue({
      base: "repeat(5, 1fr)",
      md: "repeat(7, 1fr)",
      lg: "repeat(7, 1fr)",
    }) ?? "repeat(5, 1fr)";
  const cols =
    useBreakpointValue({
      base: "1fr",
      md: "repeat(4, 1fr)",
      lg: "repeat(5, 1fr)",
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
