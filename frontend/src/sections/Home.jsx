import { Container } from '@chakra-ui/react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Home() {
  return (
    <Container maxW={'container.xxl'}>
      <About />
      <Projects />
      <Contact />
    </Container>
  );
}

export default Home;
