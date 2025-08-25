import { Grid, useBreakpointValue } from "@chakra-ui/react";

const AboutGrid = ({ children }) => {
  const rows =
    useBreakpointValue({
      base: "repeat(6, 1fr)",
      md: "repeat(7, 1fr)",
      lg: "repeat(4, 1fr)",
    }) ?? "repeat(5, 1fr)";
  const cols =
    useBreakpointValue({
      base: "repeat(4, 1fr)",
      md: "repeat(4, 1fr)",
      lg: "repeat(3, 1fr)",
    }) ?? "repeat(4, 1fr)";
  return (
    <Grid templateColumns={cols} templateRows={rows} gap={4}>
      {children}
    </Grid>
  );
};

export default AboutGrid;
