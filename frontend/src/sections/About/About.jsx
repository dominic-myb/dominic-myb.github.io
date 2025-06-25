import { Container, Grid, useBreakpointValue } from "@chakra-ui/react";
import Namecard from "./namecard/Namecard";
import Techstacks from "./techstacks/Techstacks";
import Background from "./background/Background";
import "./index.css";

function About() {
  return (
    <Container id="about" maxW="container.lg">
      <Grid
        templateRows={useBreakpointValue({
          base: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(5, 1fr)",
        })}
        templateColumns={useBreakpointValue({
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(5, 1fr)",
        })}
        gap={4}
      >
        <Namecard />
        <Techstacks />
        <Background />
      </Grid>
    </Container>
  );
}

export default About;
