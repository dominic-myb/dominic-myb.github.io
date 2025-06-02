import { Container, Grid, useBreakpointValue } from '@chakra-ui/react';
import Namecard from './Namecard';
import Techstacks from './Techstacks';
import Background from './Background';
import './about.css';

function About() {
  return (
    <Container id="about" maxW="container.lg">
      <Grid
        templateRows={useBreakpointValue({
          base: 'repeat(1, 1fr)',
          sm: 'repeat(1, 1fr)',
          md: 'repeat(1, 1fr)',
          lg: 'repeat(5, 1fr)',
        })}
        templateColumns={useBreakpointValue({
          base: '1fr',
          sm: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(5, 1fr)',
        })}
        gap={4}
      >
        <Namecard />
        <Techstacks />
        {/* <Background /> */}
      </Grid>
    </Container>
  );
}

export default About;
