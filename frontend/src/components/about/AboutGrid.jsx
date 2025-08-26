import { Grid } from "@chakra-ui/react";

const AboutGrid = ({ children }) => {
  return (
    <Grid templateColumns="repeat(auto-fit, auto)" width="full" gap={4}>
      {children}
    </Grid>
  );
};

export default AboutGrid;
