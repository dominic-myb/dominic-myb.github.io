import {
  Container,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

function Home() {
  return (
    <Container
      maxW="container.xxl"
      minW="container.sm"
      bg={useColorModeValue('#e5ded2', '#1A212D')}
    >
      <Navbar />
      <VStack>
        <About />
        <Projects />
        {/* <Contact /> */}
      </VStack>
    </Container>
  );
}

export default Home;
