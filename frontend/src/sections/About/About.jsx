import { Container, Grid, useBreakpointValue } from '@chakra-ui/react';
import Namecard from './Namecard';
import Techstacks from './Techstacks';
import Contribution from './Contribution';

function About() {
  return (
    <Container id="about" maxW="container.lg">
      <Grid
        templateRows={useBreakpointValue({
          base: 'repeat(6, 1fr)',
          sm: 'repeat(5, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(5, 1fr)',
        })}
        templateColumns={useBreakpointValue({
          base: '1fr',
          sm: '1fr',
          md: '1fr',
          lg: 'repeat(5, 1fr)',
        })}
        gap={4}
      >
        <Namecard />
        <Techstacks />
        <Contribution />
      </Grid>
    </Container>
  );
}

export default About;
